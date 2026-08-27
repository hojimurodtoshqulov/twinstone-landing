import type { Metadata } from "next";
import { Inter } from "next/font/google";
import I18nProvider from "@/lib/i18n/I18nProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twinstone — натуральный гранит для фасадов, мощения и благоустройства",
  description:
    "Twinstone — натуральный гранит из каталога: плиты, брусчатка, ступени и бордюры. Подбор вида камня, формата и обработки поверхности под частные и коммерческие объекты в Узбекистане.",
  keywords: [
    "гранит",
    "натуральный камень",
    "брусчатка",
    "облицовка фасада",
    "ступени гранит",
    "Ташкент",
    "Twinstone",
  ],
  openGraph: {
    title: "Twinstone — натуральный гранит для фасадов, мощения и благоустройства",
    description:
      "Подберём вид гранита, формат и обработку поверхности под задачу, нагрузку и архитектуру вашего проекта.",
    locale: "ru_RU",
    type: "website",
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
      </body>
    </html>
  );
}
