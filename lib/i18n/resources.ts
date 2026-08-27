// Central translation dictionary for the whole landing page.
// `uz` is typed as `typeof ru`, so TypeScript enforces the exact same shape
// (no missing / extra keys) between the two languages.

const ru = {
  nav: {
    products: "Продукция",
    applications: "Применение",
    catalog: "Виды гранита",
    quality: "Качество",
    projects: "Проекты",
    faq: "FAQ",
  },
  header: {
    langToggleAria: "Переключить язык",
    openMenuAria: "Открыть меню",
    closeMenuAria: "Закрыть меню",
    cta: "Получить расчёт",
  },
  hero: {
    eyebrow: "Натуральный камень для частных и коммерческих объектов",
    title: "Натуральный гранит для фасадов, мощения и благоустройства",
    subtitle:
      "Подберём вид гранита, формат и обработку поверхности под задачу, нагрузку и архитектуру вашего проекта.",
    ctaPrimary: "Получить расчёт",
    ctaSecondary: "Смотреть виды гранита",
    imageAlt: "Укладка гранитной брусчатки на объекте Twinstone",
  },
  heroStats: {
    items: [
      { number: "01", text: "Натуральный гранит из каталога" },
      { number: "02", text: "Полировка, термообработка и колотая фактура" },
      { number: "03", text: "Размеры под частные и крупные объекты" },
    ],
  },
  products: {
    eyebrow: "Изделия из гранита",
    title: "Что вы можете заказать",
    description:
      "Три основных направления изделий из натурального гранита для фасадов, территорий и элементов благоустройства.",
    items: {
      "plity-oblitsovka": {
        title: "Плиты и облицовка",
        description: "Для фасадов, цоколей, полов и интерьерных решений",
      },
      "bruschatka-moshchenie": {
        title: "Брусчатка и мощение",
        description: "Для дорожек, площадей, дворов и парковочных зон",
      },
      "stupeni-bordyury": {
        title: "Ступени и бордюры",
        description: "Для входных групп, лестниц и оформления территории",
      },
    },
  },
  applications: {
    eyebrow: "Области применения",
    title: "Где используется натуральный гранит",
    items: {
      "fasady-tsokoli": "Фасады и цоколи",
      "stupeni-vhodnye-gruppy": "Ступени и входные группы",
      "dorozhki-ploschadi": "Дорожки и площади",
      "parki-blagoustroystvo": "Парки и благоустройство",
      "pamyatniki-memorialy": "Памятники и мемориалы",
      "interery-chastnye-doma": "Интерьеры и частные дома",
    },
  },
  catalog: {
    eyebrow: "Каталог",
    title: "Популярные виды гранита",
    description:
      "Стартовая цена каталога показана сразу. Формат, толщина и обработка поверхности меняют итоговую стоимость.",
    priceFrom: "от {{price}}",
    priceCaption: "стартовая позиция",
    sampleAlt: "Образец материала: {{name}}",
    customFormat: "Раскрой под проект",
    unit: "мм",
    treatment: "Полировка или термообработка",
    items: {
      "kuksaroy-rozovyy": { name: "Куксарой розовый", description: "Тёплый розово-серый рисунок" },
      "kuksaroy-seryy": { name: "Куксарой серый", description: "Ровный нейтральный серый тон" },
      avrora: { name: "Аврора", description: "Бордово-красный рисунок" },
      nero: { name: "Неро", description: "Глубокий чёрный тон" },
      suvlik: { name: "Сувлик", description: "Серо-чёрный мелкозернистый" },
      kushrabot: { name: "Кушработ", description: "Красно-коричневый рисунок" },
    },
  },
  quality: {
    eyebrow: "Производство и обработка Twinstone",
    title: "Камень проходит проверку до упаковки и отгрузки",
    imageAlt: "Производственное здание Twinstone",
    features: {
      check: {
        title: "Проверка материала",
        description: "Контролируем целостность и соответствие выбранному виду камня",
      },
      ruler: {
        title: "Точная геометрия",
        description: "Режем и калибруем изделия под согласованный формат",
      },
      layers: {
        title: "Выбор поверхности",
        description: "Полированная, термообработанная или колотая фактура",
      },
    },
  },
  process: {
    eyebrow: "Как мы работаем",
    title: "Путь заказа от заявки до приёмки",
    steps: [
      { title: "Заявка", description: "Получаем задачу и контакты" },
      { title: "Подбор", description: "Уточняем объект, нагрузку и вид камня" },
      { title: "Расчёт", description: "Согласуем формат, обработку и объём" },
      { title: "Подготовка", description: "Режем и обрабатываем изделия" },
      { title: "Отгрузка", description: "Упаковываем заказ для перевозки" },
      { title: "Приёмка", description: "Передаём изделия и документы" },
    ],
  },
  leadForm: {
    eyebrow: "Заявка",
    title: "Получите подбор гранита и стоимости",
    description:
      "Оставьте телефон — специалист уточнит задачу, предложит варианты камня и подготовит расчёт.",
    objectTypeLegend: "Тип объекта",
    objectTypes: ["Частный объект", "Коммерческий объект"],
    areaLegend: "Площадь объекта",
    areaOptions: ["До 50 м²", "50–100 м²", "100–200 м²", "200–500 м²", "500–1000 м²", "Более 1000 м²"],
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+998 (__) ___-__-__",
    submit: "Получить расчёт",
    consent: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных",
    successTitle: "Заявка отправлена",
    successText:
      "Спасибо! Специалист Twinstone свяжется с вами в ближайшее время по номеру {{phone}}.",
    successAgain: "Отправить ещё одну заявку",
  },
  map: {
    title: "Кейсы Twinstone на карте Узбекистана",
    mapAria: "Карта областей Узбекистана с отмеченным Ташкентом",
    tashkentAria: "Смотреть кейсы Twinstone в Ташкенте",
    tashkentName: "Ташкент",
    tashkentCases: "3 кейса",
    caption: "Нажмите на Ташкент, чтобы посмотреть реализованные объекты",
    regions: {
      karakalpakstan: "Республика Каракалпакстан",
      khorezm: "Хорезмская область",
      navoiy: "Навоийская область",
      bukhara: "Бухарская область",
      kashkadarya: "Кашкадарьинская область",
      surkhandarya: "Сурхандарьинская область",
      samarkand: "Самаркандская область",
      jizzakh: "Джизакская область",
      syrdarya: "Сырдарьинская область",
      fergana: "Ферганская область",
      andijan: "Андижанская область",
      namangan: "Наманганская область",
    },
  },
  cases: {
    eyebrow: "Проекты",
    title: "Реализованные объекты",
    backLink: "← Все проекты",
    items: {
      "moshchenie-zhk": {
        title: "Мощение территории жилого комплекса",
        city: "Ташкент",
        category: "Жилой комплекс",
        description: "Мощение пешеходной территории",
      },
      "vhodnaya-gruppa-kontrast": {
        title: "Входная группа с контрастным мощением",
        city: "Ташкент",
        category: "Входная группа",
        description: "Контрастная раскладка натурального камня",
      },
      "obshchestvennoe-prostranstvo": {
        title: "Общественное пространство с мощением",
        city: "Ташкент",
        category: "Общественное пространство",
        description: "Покрытие для зоны с высокой нагрузкой",
      },
    },
  },
  delivery: {
    eyebrow: "Доставка",
    title: "Согласуем удобный способ получения заказа",
    imageAlt: "Погрузка поддонов с продукцией краном-манипулятором для отгрузки",
    checklist: ["Надёжная упаковка изделий", "Документы на продукцию", "Согласованная дата отгрузки"],
    note: "Доступен самовывоз. Возможность и стоимость доставки рассчитываются отдельно с учётом объёма, упаковки и адреса объекта.",
  },
  partners: {
    title: "Нам доверяют проекты",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Частые вопросы",
    items: [
      {
        question: "Какую обработку выбрать для улицы?",
        answer:
          "Для ступеней и мощения обычно используют термообработанную или колотую поверхность: она выраженная и лучше подходит для наружных зон. Финальный вариант подбирается под нагрузку и архитектуру объекта.",
      },
      {
        question: "Какие размеры доступны?",
        answer:
          "Для основных местных видов гранита доступны плиты толщиной 18 и 30 мм и несколько форматов. Нужный размер и возможность изготовления нестандартных элементов уточняются при расчёте.",
      },
      {
        question: "Можно заказать только материал без монтажа?",
        answer:
          "Да. Лендинг рассчитан на подбор, подготовку и отгрузку изделий. Состав работ и дополнительные услуги согласовываются отдельно.",
      },
      {
        question: "Как рассчитывается стоимость?",
        answer:
          "Цена зависит от вида камня, толщины, формата, обработки поверхности, объёма и условий получения заказа. После короткого брифа специалист подготовит индивидуальный расчёт.",
      },
      {
        question: "Есть ли доставка?",
        answer:
          "Самовывоз доступен. Доставку можно рассчитать отдельно по адресу объекта и параметрам партии.",
      },
    ],
  },
  footerCta: {
    title: "Подберём гранит под архитектуру и нагрузку вашего объекта",
    button: "Оставить заявку",
  },
  footer: {
    tagline: "Натуральный гранит для фасадов, мощения, ступеней и благоустройства в Узбекистане.",
    address: "Буюк Ипак Йули, 434, малая промзона «Мирзо Улугбек», Ташкент",
    copyright: "© 2026 Twinstone. Все права защищены.",
  },
};

const uz: typeof ru = {
  nav: {
    products: "Mahsulotlar",
    applications: "Qo'llanilishi",
    catalog: "Granit turlari",
    quality: "Sifat",
    projects: "Loyihalar",
    faq: "FAQ",
  },
  header: {
    langToggleAria: "Tilni almashtirish",
    openMenuAria: "Menyuni ochish",
    closeMenuAria: "Menyuni yopish",
    cta: "Hisob-kitob olish",
  },
  hero: {
    eyebrow: "Xususiy va tijorat obyektlari uchun tabiiy tosh",
    title: "Fasadlar, mostovoy va obodonlashtirish uchun tabiiy granit",
    subtitle:
      "Loyihangizning vazifasi, yuklamasi va arxitekturasiga mos granit turini, formatini va sirt ishlovini tanlab beramiz.",
    ctaPrimary: "Hisob-kitob olish",
    ctaSecondary: "Granit turlarini ko'rish",
    imageAlt: "Twinstone obyektida granit bruschatka yotqizish jarayoni",
  },
  heroStats: {
    items: [
      { number: "01", text: "Katalogdagi tabiiy granit" },
      { number: "02", text: "Pardozlash, termoishlov va yorilgan faktura" },
      { number: "03", text: "Xususiy va yirik obyektlar uchun o'lchamlar" },
    ],
  },
  products: {
    eyebrow: "Granit buyumlari",
    title: "Nimalarni buyurtma qilishingiz mumkin",
    description:
      "Fasadlar, hududlar va obodonlashtirish elementlari uchun tabiiy granitdan tayyorlangan uchta asosiy yo'nalish.",
    items: {
      "plity-oblitsovka": {
        title: "Plitalar va qoplama",
        description: "Fasadlar, sokllar, pollar va interyer yechimlari uchun",
      },
      "bruschatka-moshchenie": {
        title: "Bruschatka va mostovoy",
        description: "Yo'lkalar, maydonlar, hovlilar va avtoturargohlar uchun",
      },
      "stupeni-bordyury": {
        title: "Zinapoyalar va bordyurlar",
        description: "Kirish guruhlari, zinapoyalar va hudud bezatilishi uchun",
      },
    },
  },
  applications: {
    eyebrow: "Qo'llanilish sohalari",
    title: "Tabiiy granit qayerda qo'llaniladi",
    items: {
      "fasady-tsokoli": "Fasadlar va sokllar",
      "stupeni-vhodnye-gruppy": "Zinapoyalar va kirish guruhlari",
      "dorozhki-ploschadi": "Yo'lkalar va maydonlar",
      "parki-blagoustroystvo": "Parklar va obodonlashtirish",
      "pamyatniki-memorialy": "Haykallar va memoriallar",
      "interery-chastnye-doma": "Interyerlar va xususiy uylar",
    },
  },
  catalog: {
    eyebrow: "Katalog",
    title: "Mashhur granit turlari",
    description:
      "Katalogning boshlang'ich narxi darhol ko'rsatilgan. Format, qalinlik va sirt ishlovi yakuniy narxni o'zgartiradi.",
    priceFrom: "{{price}} dan boshlab",
    priceCaption: "boshlang'ich narx",
    sampleAlt: "Material namunasi: {{name}}",
    customFormat: "Loyiha bo'yicha kesim",
    unit: "mm",
    treatment: "Pardozlash yoki termoishlov",
    items: {
      "kuksaroy-rozovyy": { name: "Kuksaroy pushti", description: "Iliq pushti-kulrang rangi" },
      "kuksaroy-seryy": { name: "Kuksaroy kulrang", description: "Bir tekis neytral kulrang tus" },
      avrora: { name: "Avrora", description: "To'q qizil-bordo rangi" },
      nero: { name: "Nero", description: "Chuqur qora tus" },
      suvlik: { name: "Suvlik", description: "Kulrang-qora mayda donador" },
      kushrabot: { name: "Qushrabot", description: "Qizil-jigarrang rangi" },
    },
  },
  quality: {
    eyebrow: "Twinstone ishlab chiqarish va ishlov berish",
    title: "Tosh qadoqlash va jo'natishdan oldin tekshiruvdan o'tadi",
    imageAlt: "Twinstone ishlab chiqarish binosi",
    features: {
      check: {
        title: "Materialni tekshirish",
        description: "Tanlangan tosh turiga mosligi va yaxlitligini nazorat qilamiz",
      },
      ruler: {
        title: "Aniq geometriya",
        description: "Buyumlarni kelishilgan formatga mos kesamiz va kalibrlaymiz",
      },
      layers: {
        title: "Sirt tanlovi",
        description: "Pardozlangan, termoishlov ko'rgan yoki yorilgan faktura",
      },
    },
  },
  process: {
    eyebrow: "Biz qanday ishlaymiz",
    title: "Buyurtmaning arizadan qabul qilishgacha bo'lgan yo'li",
    steps: [
      { title: "Ariza", description: "Vazifa va aloqa ma'lumotlarini qabul qilamiz" },
      { title: "Tanlov", description: "Obyekt, yuklama va tosh turini aniqlaymiz" },
      { title: "Hisob-kitob", description: "Format, ishlov va hajmni kelishamiz" },
      { title: "Tayyorlash", description: "Buyumlarni kesamiz va ishlov beramiz" },
      { title: "Jo'natish", description: "Buyurtmani tashish uchun qadoqlaymiz" },
      { title: "Qabul qilish", description: "Buyumlar va hujjatlarni topshiramiz" },
    ],
  },
  leadForm: {
    eyebrow: "Ariza",
    title: "Granit tanlovi va narxini oling",
    description:
      "Telefon raqamingizni qoldiring — mutaxassis vazifani aniqlaydi, tosh variantlarini taklif qiladi va hisob-kitob tayyorlaydi.",
    objectTypeLegend: "Obyekt turi",
    objectTypes: ["Xususiy obyekt", "Tijorat obyekti"],
    areaLegend: "Obyekt maydoni",
    areaOptions: ["50 m² gacha", "50–100 m²", "100–200 m²", "200–500 m²", "500–1000 m²", "1000 m² dan ortiq"],
    phoneLabel: "Telefon raqami",
    phonePlaceholder: "+998 (__) ___-__-__",
    submit: "Hisob-kitob olish",
    consent: "Tugmani bosish orqali shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz",
    successTitle: "Ariza yuborildi",
    successText: "Rahmat! Twinstone mutaxassisi tez orada {{phone}} raqami orqali siz bilan bog'lanadi.",
    successAgain: "Yana bitta ariza yuborish",
  },
  map: {
    title: "Twinstone keyslari O'zbekiston xaritasida",
    mapAria: "Toshkent belgilangan O'zbekiston viloyatlari xaritasi",
    tashkentAria: "Toshkentdagi Twinstone keyslarini ko'rish",
    tashkentName: "Toshkent",
    tashkentCases: "3 ta keys",
    caption: "Amalga oshirilgan obyektlarni ko'rish uchun Toshkentni bosing",
    regions: {
      karakalpakstan: "Qoraqalpog'iston Respublikasi",
      khorezm: "Xorazm viloyati",
      navoiy: "Navoiy viloyati",
      bukhara: "Buxoro viloyati",
      kashkadarya: "Qashqadaryo viloyati",
      surkhandarya: "Surxondaryo viloyati",
      samarkand: "Samarqand viloyati",
      jizzakh: "Jizzax viloyati",
      syrdarya: "Sirdaryo viloyati",
      fergana: "Farg'ona viloyati",
      andijan: "Andijon viloyati",
      namangan: "Namangan viloyati",
    },
  },
  cases: {
    eyebrow: "Loyihalar",
    title: "Amalga oshirilgan obyektlar",
    backLink: "← Barcha loyihalar",
    items: {
      "moshchenie-zhk": {
        title: "Turar-joy majmuasi hududini mostovoy qilish",
        city: "Toshkent",
        category: "Turar-joy majmuasi",
        description: "Piyodalar hududini mostovoy qilish",
      },
      "vhodnaya-gruppa-kontrast": {
        title: "Kontrastli mostovoyli kirish guruhi",
        city: "Toshkent",
        category: "Kirish guruhi",
        description: "Tabiiy toshning kontrastli terilishi",
      },
      "obshchestvennoe-prostranstvo": {
        title: "Mostovoyli jamoat maydoni",
        city: "Toshkent",
        category: "Jamoat maydoni",
        description: "Yuqori yuklamali zona uchun qoplama",
      },
    },
  },
  delivery: {
    eyebrow: "Yetkazib berish",
    title: "Buyurtmani olishning qulay usulini kelishamiz",
    imageAlt: "Kran-manipulyator yordamida mahsulot paletlarini yuklash",
    checklist: ["Buyumlarning ishonchli qadoqlanishi", "Mahsulot uchun hujjatlar", "Kelishilgan jo'natish sanasi"],
    note: "O'zi olib ketish mavjud. Yetkazib berish imkoniyati va narxi hajm, qadoqlash va obyekt manziliga qarab alohida hisoblanadi.",
  },
  partners: {
    title: "Loyihalar bizga ishonadi",
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p beriladigan savollar",
    items: [
      {
        question: "Ko'cha uchun qanday ishlovni tanlash kerak?",
        answer:
          "Zinapoya va mostovoy uchun odatda termoishlov ko'rgan yoki yorilgan sirt qo'llaniladi: u yaqqol ko'rinadi va tashqi zonalar uchun yaxshiroq mos keladi. Yakuniy variant obyektning yuklamasi va arxitekturasiga qarab tanlanadi.",
      },
      {
        question: "Qanday o'lchamlar mavjud?",
        answer:
          "Asosiy mahalliy granit turlari uchun 18 va 30 mm qalinlikdagi plitalar va bir nechta format mavjud. Kerakli o'lcham va nostandart elementlarni tayyorlash imkoniyati hisob-kitob paytida aniqlanadi.",
      },
      {
        question: "Faqat materialni montajsiz buyurtma qilish mumkinmi?",
        answer:
          "Ha. Sahifa buyumlarni tanlash, tayyorlash va jo'natishga mo'ljallangan. Ishlar tarkibi va qo'shimcha xizmatlar alohida kelishiladi.",
      },
      {
        question: "Narx qanday hisoblanadi?",
        answer:
          "Narx tosh turi, qalinligi, formati, sirt ishlovi, hajmi va buyurtmani olish shartlariga bog'liq. Qisqa brifingdan so'ng mutaxassis individual hisob-kitob tayyorlaydi.",
      },
      {
        question: "Yetkazib berish bormi?",
        answer:
          "O'zi olib ketish mavjud. Yetkazib berishni obyekt manzili va partiya parametrlariga qarab alohida hisoblash mumkin.",
      },
    ],
  },
  footerCta: {
    title: "Obyektingiz arxitekturasi va yuklamasiga mos granitni tanlab beramiz",
    button: "Ariza qoldirish",
  },
  footer: {
    tagline: "O'zbekistonda fasadlar, mostovoy, zinapoyalar va obodonlashtirish uchun tabiiy granit.",
    address: "Buyuk Ipak Yo'li ko'chasi, 434, «Mirzo Ulug'bek» kichik sanoat zonasi, Toshkent",
    copyright: "© 2026 Twinstone. Barcha huquqlar himoyalangan.",
  },
};

export type Locale = "ru" | "uz";

export const resources = {
  ru: { translation: ru },
  uz: { translation: uz },
} as const;

export type TranslationSchema = typeof ru;
