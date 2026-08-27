"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDownIcon } from "@/components/ui/Icons";

interface FaqEntry {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as FaqEntry[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-stone-50 py-16 sm:py-24 lg:py-28">
      <Container className="max-w-3xl">
        <SectionHeading align="center" eyebrow={t("faq.eyebrow")} title={t("faq.title")} />

        <div className="mt-10 flex flex-col divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                >
                  <span className="text-sm font-semibold text-stone-950 sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-stone-600 sm:px-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
