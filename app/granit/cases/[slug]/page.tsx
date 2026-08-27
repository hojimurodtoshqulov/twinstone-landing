import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetailContent from "@/components/CaseDetailContent";
import { cases } from "@/data/cases";
import { resources } from "@/lib/i18n/resources";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  const copy = resources.ru.translation.cases.items[slug as keyof typeof resources.ru.translation.cases.items];
  if (!item || !copy) return {};
  return {
    title: `${copy.title} — Twinstone`,
    description: copy.description,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();

  return <CaseDetailContent item={item} />;
}
