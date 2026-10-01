"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/nav";
import { trackMetaEvent } from "@/lib/metaPixel";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3417524.082119582!2d65.0398069981926!3d40.872643335923286!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzIxLjkiTiA2NcKwMzknMzkuMiJF!5e0!3m2!1sru!2s!4v1789716980805!5m2!1sru!2s";

export default function ProjectsMap() {
  const { t } = useTranslation();
  const address = t("footer.address");
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading align="center" eyebrow={t("map.eyebrow")} title={t("map.title")} description={t("map.caption")} />

        <div className="mx-auto mt-12 overflow-hidden rounded-3xl border border-stone-200 shadow-sm sm:mt-14">
          <Image
            src="/images/twinstone-fabric-navoiy.png"
            alt={t("map.fabricAlt")}
            width={2054}
            height={766}
            sizes="100vw"
            className="h-auto w-full"
          />

          <div className="lg:grid lg:grid-cols-[1.3fr_1fr]">
            <div className="relative h-95 sm:h-120 lg:h-150">
              <iframe
                src={MAP_EMBED_SRC}
                title={t("map.mapAria")}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full grayscale-20"
                style={{ border: 0 }}
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-stone-950 p-8 text-white sm:p-10">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t("map.addressLabel")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{t("map.phoneLabel")}</h3>
                  <a
                    href={siteConfig.phoneHref}
                    onClick={() => trackMetaEvent("Contact")}
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  {t("map.ctaDirections")}
                </a>
                <a
                  href="#cases"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {t("map.ctaCases")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
