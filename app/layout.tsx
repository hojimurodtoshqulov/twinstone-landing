import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I18nProvider from "@/lib/i18n/I18nProvider";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twinstone — натуральный гранит для фасадов, мощения и благоустройства",
  description:
    "Twinstone — изделия из натурального гранита: плиты, гранитная брусчатка, ступени и бордюры. Подбор вида гранита, формата и обработки поверхности под частные и коммерческие объекты в Узбекистане.",
  keywords: [
    "гранит",
    "натуральный гранит",
    "гранитные плиты",
    "гранитная брусчатка",
    "гранитные ступени",
    "гранитный бордюр",
    "облицовка фасада гранитом",
    "гранит Ташкент",
    "Twinstone",
  ],
  openGraph: {
    title: "Twinstone — натуральный гранит для фасадов, мощения и благоустройства",
    description:
      "Подберём вид гранита, формат и обработку поверхности под задачу, нагрузку и архитектуру вашего проекта.",
    locale: "ru_RU",
    type: "website",
  },
  verification: {
    other: {
      "facebook-domain-verification": "3lo6q23n4ix1cnuiw2za67lw8tlhxt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
        <MetaPixel />
      </body>
    </html>
  );
}
