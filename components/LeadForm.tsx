"use client";

import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";
import { trackMetaEvent } from "@/lib/metaPixel";

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").replace(/^998/, "");
  const d = digits.slice(0, 9);
  let result = "+998";
  if (d.length > 0) result += ` (${d.slice(0, 2)}`;
  if (d.length >= 2) result += `) ${d.slice(2, 5)}`;
  if (d.length >= 5) result += `-${d.slice(5, 7)}`;
  if (d.length >= 7) result += `-${d.slice(7, 9)}`;
  return result;
}

export default function LeadForm() {
  const { t } = useTranslation();
  const productTypes = t("leadForm.productTypes", { returnObjects: true }) as string[];
  const objectTypes = t("leadForm.objectTypes", { returnObjects: true }) as string[];
  const areaOptions = t("leadForm.areaOptions", { returnObjects: true }) as string[];

  const [productTypeIndex, setProductTypeIndex] = useState(0);
  const [objectTypeIndex, setObjectTypeIndex] = useState(0);
  const [areaIndex, setAreaIndex] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phone.replace(/\D/g, "").length !== 12) {
      setError(t("leadForm.phoneInvalid"));
      return;
    }

    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          productType: productTypeIndex,
          objectType: objectTypeIndex,
          area: areaIndex,
        }),
      });
      if (!res.ok) throw new Error(`Lead request failed: ${res.status}`);
      setSubmitted(true);
      trackMetaEvent("Lead");
    } catch {
      setError(t("leadForm.sendError"));
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="lead-form" className="bg-stone-50 py-16 sm:py-24 lg:py-28">
      <Container className="max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow={t("leadForm.eyebrow")}
          title={t("leadForm.title")}
          description={t("leadForm.description")}
        />

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-stone-950">{t("leadForm.successTitle")}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
                {t("leadForm.successText", { phone })}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                {t("leadForm.successAgain")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-stone-950">
                  {t("leadForm.productTypeLegend")}
                </legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {productTypes.map((type, index) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors ${
                        productTypeIndex === index
                          ? "border-accent bg-accent text-white"
                          : "border-stone-200 text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="productType"
                        value={type}
                        checked={productTypeIndex === index}
                        onChange={() => setProductTypeIndex(index)}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-stone-950">
                  {t("leadForm.objectTypeLegend")}
                </legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {objectTypes.map((type, index) => (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors ${
                        objectTypeIndex === index
                          ? "border-accent bg-accent text-white"
                          : "border-stone-200 text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="objectType"
                        value={type}
                        checked={objectTypeIndex === index}
                        onChange={() => setObjectTypeIndex(index)}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-stone-950">
                  {t("leadForm.areaLegend")}
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {areaOptions.map((option, index) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center justify-center rounded-xl border px-3 py-3 text-center text-xs font-medium transition-colors sm:text-sm ${
                        areaIndex === index
                          ? "border-accent bg-accent text-white"
                          : "border-stone-200 text-stone-700 hover:border-stone-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="area"
                        value={option}
                        checked={areaIndex === index}
                        onChange={() => setAreaIndex(index)}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="name" className="mb-3 block text-sm font-semibold text-stone-950">
                  {t("leadForm.nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("leadForm.namePlaceholder")}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3.5 text-base text-stone-950 outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-3 block text-sm font-semibold text-stone-950">
                  {t("leadForm.phoneLabel")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder={t("leadForm.phonePlaceholder")}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3.5 text-base text-stone-950 outline-none transition-colors focus:border-accent"
                />
              </div>

              {error && (
                <p role="alert" className="-mt-4 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? t("leadForm.sending") : t("leadForm.submit")}
              </button>

              <p className="text-center text-xs leading-relaxed text-stone-500">
                {t("leadForm.consent")}
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
