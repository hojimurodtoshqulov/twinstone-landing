# Twinstone — лендинг гранитной компании

Клон лендинга [twinstonegranitnetlify.vercel.app](https://twinstonegranitnetlify.vercel.app/), реализованный на Next.js (App Router) + TypeScript + Tailwind CSS.

## Стек

- Next.js 16 (App Router), React 19
- TypeScript (strict)
- Tailwind CSS v4
- `next/font/google` (Inter)
- `next/image` для всех изображений

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Локализация (RU / UZ)

Переключение языка реализовано на `i18next` + `react-i18next`. Все переводимые
строки лежат в `lib/i18n/resources.ts` (объекты `ru` и `uz`, `uz` типизирован
как `typeof ru`, поэтому TypeScript не даст забыть перевод какого-то ключа).
Выбор языка хранится в `localStorage` (`twinstone-lang`) и переключается
кнопкой RU/UZ в хедере и футере — весь текст на странице реагирует сразу.

## Структура

```
app/
  layout.tsx                     # шрифты, metadata
  page.tsx                       # сборка лендинга из секций
  globals.css                    # Tailwind + цветовые токены
  granit/cases/[slug]/page.tsx   # страница одного кейса
components/
  Header.tsx, Hero.tsx, ProductsSection.tsx, ApplicationsSection.tsx,
  GraniteCatalog.tsx, QualitySection.tsx, ProcessSteps.tsx, LeadForm.tsx,
  ProjectsMap.tsx, CasesSection.tsx, DeliverySection.tsx, PartnersLogos.tsx,
  FaqSection.tsx, FooterCta.tsx, Footer.tsx
  ui/                            # Container, SectionHeading, Chip, Icons
data/
  types.ts, granites.ts, products.ts, applications.ts, cases.ts,
  faq.ts, partners.ts, process.ts, quality.ts, nav.ts
public/images/                   # изображения — все реальные ассеты заказчика
scripts/
  process-logo.mjs               # обрезает поля у исходного PNG-лого (требует sharp)
  fix-enter-logo-alpha.mjs       # чинит логотип с "убитым" альфа-каналом (требует sharp)
```

## Изображения

Все изображения в `public/images/` — реальные ассеты заказчика (не заглушки).
Новый файл достаточно положить в `public/images/` и указать путь в нужном
файле `data/*.ts` (или, для лого партнёров, в `data/partners.ts`).

| Секция | Файлы |
|---|---|
| Лого (хедер/футер) | `twinstone-logo.png` — обрезано от полей скриптом `process-logo.mjs` из исходника `Twin Stone _logo.png` |
| Hero | `hero-desktop.webp` |
| Изделия из гранита | `plitka_mramor.jpg`, `bruschatka.webp`, `bordyor.png` |
| Области применения | без фото — линейные иконки (`components/ui/Icons.tsx`: `StorefrontIcon`, `StairsIcon`, `RoadIcon`, `TreeIcon`, `MonumentIcon`, `HouseIcon`) |
| Каталог гранита | `granite-kuksaroy-pink.webp`, `granite-kuksaroy-gray.webp`, `granite-aurora.webp`, `granite-nero.webp`, `granite-suvlik.webp`, `granite-kushrabot.webp` — исходники тёмные (недоэкспонированы), карточки в `GraniteCatalog.tsx` вытягивают их CSS-фильтром `brightness-[1.9]`, не трогая сами файлы |
| Производство и обработка | `production.webp` — контейнер `aspect-video`, чтобы не обрезать флаг слева по краю кадра |
| Доставка | `dostavka-bruschatka.jpg` |
| Реализованные объекты (кейсы) | `project-residential.webp`, `project-hotel.webp`, `project-public.webp` — используются и на страницах `/granit/cases/[slug]` |
| Логотипы партнёров | `partners/akay-city.webp`, `partners/nurafshon-business-city.webp`, `partners/enter-engineering.webp`, `partners/modera-towers.webp`. Файл `enter-engineering.webp` — не копия исходника: у `project-enter.webp` альфа-канал был экспортирован обрезанным до ~20% (лого было практически невидимым), `fix-enter-logo-alpha.mjs` растягивает альфу до полного диапазона и сохраняет исправленную копию сюда |
