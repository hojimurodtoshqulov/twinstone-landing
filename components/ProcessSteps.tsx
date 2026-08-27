"use client";

import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ChatIcon,
  ClipboardIcon,
  DocumentIcon,
  ShieldCheckIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/ui/Icons";

interface Step {
  title: string;
  description: string;
}

const icons = [ChatIcon, ClipboardIcon, DocumentIcon, WrenchIcon, TruckIcon, ShieldCheckIcon];

export default function ProcessSteps() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Step[];

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow={t("process.eyebrow")} title={t("process.title")} />

        <div className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={step.title} className="flex flex-col items-center gap-4 text-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white ring-2 ring-white">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-950">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
