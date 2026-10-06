// Central translation dictionary for the whole landing page.
// `uz` is typed as `typeof ru`, so TypeScript enforces the exact same shape
// (no missing / extra keys) between the two languages.

const ru = {
  nav: {
    products: "Изделия",
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
    eyebrow: "Изделия из натурального гранита",
    title: "Натуральный гранит для фасадов, мощения и благоустройства",
    subtitle:
      "Подберём вид гранита, формат и обработку поверхности под задачу, нагрузку и архитектуру вашего проекта.",
    ctaPrimary: "Получить расчёт",
    ctaSecondary: "Смотреть виды гранита",
    imageAlt: "Освещённая гранитная пешеходная дорожка, уложенная Twinstone в парковой зоне",
  },
  heroStats: {
    items: [
      { number: "01", text: "Только натуральный гранит местных месторождений" },
      { number: "02", text: "Полировка, термообработка, бучардирование и колотая фактура" },
      { number: "03", text: "Распиловка под размеры частных и крупных объектов" },
    ],
  },
  products: {
    eyebrow: "Изделия Twinstone",
    title: "Что мы изготавливаем из гранита",
    description:
      "Плиты, брусчатка, ступени и бордюры из натурального гранита — распиловка и обработка под размеры и задачи вашего объекта.",
    items: {
      "granitnye-plity": {
        title: "Гранитные плиты",
        description: "Облицовка фасадов, цоколей и полов. Толщина 18 и 30 мм",
      },
      "granitnaya-bruschatka": {
        title: "Гранитная брусчатка",
        description: "Квадратная и шестигранная — для площадей и дорожек с высокой нагрузкой",
      },
      "granitnye-stupeni": {
        title: "Ступени и подступенки",
        description: "Входные группы и лестницы с противоскользящей обработкой",
      },
      "kolotyy-granit": {
        title: "Колотый гранит",
        description: "Рельефная фактура для облицовки цоколей, стен и заборов",
      },
    },
    additionalTitle: "Также изготавливаем",
    additional: {
      bordyur: "Гранитный бордюр",
      podokonniki: "Подоконники",
      stoleshnitsy: "Столешницы",
      plintusy: "Плинтусы",
      parapety: "Парапеты и отливы",
      maf: "Малые архитектурные формы",
      pamyatniki: "Памятники",
    },
    finishesTitle: "Обработка поверхности",
    finishes: {
      polirovannaya: "Полированная",
      termo: "Термообработанная",
      pilenaya: "Пиленая",
      buchardirovannaya: "Бучардированная",
      kolotaya: "Колотая",
      loschenaya: "Лощёная",
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
    sampleAlt: "Образец гранита: {{name}}",
    customFormat: "Раскрой под проект",
    unit: "мм",
    treatment: "Полировка или термообработка",
    items: {
      nero: { name: "Неро", description: "Тёмный графитовый тон с мелким светлым зерном" },
      olivkovyy: { name: "Оливковый", description: "Тёмно-оливковый с крупными овальными вкраплениями" },
      "kuksaroy-seryy": { name: "Куксарой серый", description: "Светло-серый мелкозернистый рисунок" },
      bezhevyy: { name: "Бежевый", description: "Тёплый песочный тон с тёмным зерном" },
      suvlik: { name: "Сувлик", description: "Серый с чёрно-белым зерном" },
      kushrabot: { name: "Кушработ", description: "Красно-коричневый рисунок" },
    },
  },
  quality: {
    eyebrow: "Производство и обработка Twinstone",
    title: "Каждая гранитная плита проходит проверку до отгрузки",
    imageAlt: "Гранитные плиты Twinstone с точной геометрией и обработанной поверхностью",
    features: {
      check: {
        title: "Отбор гранита",
        description: "Проверяем целостность, рисунок и однородность оттенка каждой партии",
      },
      ruler: {
        title: "Точная распиловка",
        description: "Режем и калибруем гранит под согласованный формат и толщину",
      },
      layers: {
        title: "Обработка поверхности",
        description: "Полировка, термообработка, бучардирование или колотая фактура",
      },
    },
  },
  process: {
    eyebrow: "Как мы работаем",
    title: "Путь заказа от заявки до приёмки",
    steps: [
      { title: "Заявка", description: "Получаем задачу и контакты" },
      { title: "Подбор", description: "Уточняем объект, нагрузку и вид гранита" },
      { title: "Расчёт", description: "Согласуем формат, обработку и объём" },
      { title: "Производство", description: "Распиливаем и обрабатываем гранит" },
      { title: "Отгрузка", description: "Упаковываем заказ для перевозки" },
      { title: "Приёмка", description: "Передаём изделия и документы" },
    ],
  },
  leadForm: {
    eyebrow: "Заявка",
    title: "Получите подбор гранита и стоимости",
    description:
      "Оставьте телефон — специалист уточнит задачу, предложит подходящие виды гранита и подготовит расчёт.",
    productTypeLegend: "Что вас интересует",
    productTypes: ["Брусчатка", "Гранит"],
    objectTypeLegend: "Тип объекта",
    objectTypes: ["Частный объект", "Коммерческий объект"],
    areaLegend: "Площадь объекта",
    areaOptions: ["До 50 м²", "50–100 м²", "100–200 м²", "200–500 м²", "500–1000 м²", "Более 1000 м²"],
    nameLabel: "Ваше имя",
    namePlaceholder: "Имя",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+998 (__) ___-__-__",
    submit: "Получить расчёт",
    sending: "Отправляем…",
    phoneInvalid: "Введите номер телефона полностью",
    sendError: "Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.",
    consent: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных",
    successTitle: "Заявка отправлена",
    successText:
      "Спасибо! Специалист Twinstone свяжется с вами в ближайшее время по номеру {{phone}}.",
    successAgain: "Отправить ещё одну заявку",
  },
  map: {
    eyebrow: "Наш адрес",
    title: "Twinstone на карте",
    caption:
      "Приезжайте посмотреть образцы гранита вживую или свяжитесь с нами для расчёта доставки по всему Узбекистану",
    mapAria: "Карта с расположением Twinstone",
    fabricAlt: "Производство гранитных изделий Twinstone",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    ctaDirections: "Проложить маршрут",
    ctaCases: "Смотреть реализованные объекты",
  },
  cases: {
    eyebrow: "Проекты",
    title: "Объекты из нашего гранита",
    backLink: "← Все проекты",
    items: {
      "alleya-s-fonaryami": {
        title: "Гранитная аллея с декоративными фонарями",
        city: "Ташкент",
        category: "Парковая аллея",
        description: "Светлые гранитные плиты пешеходной аллеи с тактильной полосой",
      },
      "ploshchad-s-fontanom": {
        title: "Гранитная площадь у фонтана",
        city: "Ташкент",
        category: "Центральная площадь",
        description: "Лучевые гранитные дорожки между цветниками и газонами",
      },
      "vhodnaya-zona-s-arkoy": {
        title: "Входная зона парка с аркой",
        city: "Ташкент",
        category: "Входная зона",
        description: "Широкое мощение из гранитных плит вокруг декоративной арки",
      },
      "zona-otdyha": {
        title: "Гранитная зона отдыха",
        city: "Ташкент",
        category: "Зона отдыха",
        description: "Крупноформатные гранитные плиты под скамейками и вдоль газонов",
      },
      "sadovye-dorozhki": {
        title: "Гранитные дорожки в саду",
        city: "Ташкент",
        category: "Парк",
        description: "Узкие гранитные дорожки между клумбами с подсветкой",
      },
      "peshehodnaya-dorozhka": {
        title: "Пешеходная дорожка вдоль озеленения",
        city: "Ташкент",
        category: "Пешеходная зона",
        description: "Гранитное мощение прогулочной дорожки рядом с велодорожкой",
      },
    },
  },
  delivery: {
    eyebrow: "Доставка",
    title: "Согласуем удобный способ получения заказа",
    imageAlt: "Погрузка гранитных плит манипулятором в грузовик для отгрузки",
    checklist: ["Гранит на поддонах в надёжной обвязке", "Документы на камень", "Согласованная дата отгрузки"],
    note: "Доступен самовывоз. Возможность и стоимость доставки рассчитываются отдельно с учётом объёма, веса партии и адреса объекта.",
  },
  partners: {
    title: "Нам доверяют проекты",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Частые вопросы",
    items: [
      {
        question: "Какую обработку гранита выбрать для улицы?",
        answer:
          "Для ступеней и мощения используют термообработанную, бучардированную или колотую поверхность: она шероховатая и не скользит зимой и после дождя. Полированный гранит лучше подходит для фасадов и интерьеров.",
      },
      {
        question: "Чем гранит лучше бетонной плитки?",
        answer:
          "Натуральный гранит прочнее, не выцветает, выдерживает сотни циклов замораживания и оттаивания и служит десятилетиями без замены. Поэтому его выбирают для входных групп, площадей и фасадов с высокой нагрузкой.",
      },
      {
        question: "Какие размеры доступны?",
        answer:
          "Для основных видов гранита доступны плиты толщиной 18 и 30 мм в форматах от 200×400 до 600×1500 мм. Нестандартные размеры, ступени, бордюры и другие элементы режем под проект.",
      },
      {
        question: "Можно ли посмотреть образцы гранита?",
        answer:
          "Да. Приезжайте к нам на производство — покажем образцы всех видов гранита с разной обработкой поверхности. Оттенок натурального камня лучше выбирать вживую.",
      },
      {
        question: "Можно заказать только гранит без монтажа?",
        answer:
          "Да. Мы изготавливаем и отгружаем гранитные изделия. Монтаж и дополнительные услуги согласовываются отдельно.",
      },
      {
        question: "Как рассчитывается стоимость?",
        answer:
          "Цена зависит от вида гранита, толщины, формата, обработки поверхности, объёма и условий получения заказа. После короткого брифа специалист подготовит индивидуальный расчёт.",
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
    tagline: "Изделия из натурального гранита для фасадов, мощения, ступеней и благоустройства в Узбекистане.",
    address: "Буюк Ипак Йули, 434, малая промзона «Мирзо Улугбек», Ташкент",
    copyright: "© 2026 Twinstone. Все права защищены.",
  },
};

const uz: typeof ru = {
  nav: {
    products: "Buyumlar",
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
    eyebrow: "Tabiiy granitdan buyumlar",
    title: "Fasadlar, yo'lkalar va obodonlashtirish uchun tabiiy granit",
    subtitle:
      "Loyihangizning vazifasi, yuklamasi va arxitekturasiga mos granit turini, formatini va sirt ishlovini tanlab beramiz.",
    ctaPrimary: "Hisob-kitob olish",
    ctaSecondary: "Granit turlarini ko'rish",
    imageAlt: "Twinstone tomonidan bog' hududida yotqizilgan yoritilgan granit piyodalar yo'lkasi",
  },
  heroStats: {
    items: [
      { number: "01", text: "Faqat mahalliy konlardan tabiiy granit" },
      { number: "02", text: "Pardozlash, termoishlov, bucharda va yorilgan faktura" },
      { number: "03", text: "Xususiy va yirik obyektlar o'lchamiga kesish" },
    ],
  },
  products: {
    eyebrow: "Twinstone buyumlari",
    title: "Granitdan nimalar tayyorlaymiz",
    description:
      "Tabiiy granitdan plitalar, bruschatka, zinapoyalar va bordyurlar — obyektingiz o'lchami va vazifasiga mos kesish va ishlov berish.",
    items: {
      "granitnye-plity": {
        title: "Granit plitalar",
        description: "Fasad, sokl va pollarni qoplash uchun. Qalinligi 18 va 30 mm",
      },
      "granitnaya-bruschatka": {
        title: "Granit bruschatka",
        description: "Kvadrat va olti burchakli — yuqori yuklamali maydon va yo'lkalar uchun",
      },
      "granitnye-stupeni": {
        title: "Zinapoya va pog'onalar",
        description: "Sirpanishga qarshi ishlov berilgan kirish guruhlari va zinalar",
      },
      "kolotyy-granit": {
        title: "Yorilgan granit",
        description: "Sokl, devor va to'siqlarni qoplash uchun bo'rtma faktura",
      },
    },
    additionalTitle: "Shuningdek tayyorlaymiz",
    additional: {
      bordyur: "Granit bordyur",
      podokonniki: "Deraza tokchalari",
      stoleshnitsy: "Stol ustlari",
      plintusy: "Plintuslar",
      parapety: "Parapet va otlivlar",
      maf: "Kichik arxitektura shakllari",
      pamyatniki: "Yodgorliklar",
    },
    finishesTitle: "Sirt ishlovi",
    finishes: {
      polirovannaya: "Pardozlangan",
      termo: "Termoishlov berilgan",
      pilenaya: "Arralangan",
      buchardirovannaya: "Bucharda",
      kolotaya: "Yorilgan",
      loschenaya: "Silliqlangan",
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
    sampleAlt: "Granit namunasi: {{name}}",
    customFormat: "Loyiha bo'yicha kesim",
    unit: "mm",
    treatment: "Pardozlash yoki termoishlov",
    items: {
      nero: { name: "Nero", description: "Mayda och donali to'q grafit tus" },
      olivkovyy: { name: "Zaytunrang", description: "Yirik oval dog'li to'q zaytun rang" },
      "kuksaroy-seryy": { name: "Kuksaroy kulrang", description: "Och kulrang mayda donador naqsh" },
      bezhevyy: { name: "Bej", description: "To'q donali iliq qum rang" },
      suvlik: { name: "Suvlik", description: "Qora-oq donali kulrang" },
      kushrabot: { name: "Qushrabot", description: "Qizil-jigarrang naqsh" },
    },
  },
  quality: {
    eyebrow: "Twinstone ishlab chiqarish va ishlov berish",
    title: "Har bir granit plita jo'natishdan oldin tekshiruvdan o'tadi",
    imageAlt: "Aniq kesilgan va sirtiga ishlov berilgan Twinstone granit plitalari",
    features: {
      check: {
        title: "Granitni saralash",
        description: "Har bir partiyaning yaxlitligi, naqshi va rang bir xilligini tekshiramiz",
      },
      ruler: {
        title: "Aniq kesish",
        description: "Granitni kelishilgan format va qalinlikka mos kesamiz va kalibrlaymiz",
      },
      layers: {
        title: "Sirt ishlovi",
        description: "Pardozlash, termoishlov, bucharda yoki yorilgan faktura",
      },
    },
  },
  process: {
    eyebrow: "Biz qanday ishlaymiz",
    title: "Buyurtmaning arizadan qabul qilishgacha bo'lgan yo'li",
    steps: [
      { title: "Ariza", description: "Vazifa va aloqa ma'lumotlarini qabul qilamiz" },
      { title: "Tanlov", description: "Obyekt, yuklama va granit turini aniqlaymiz" },
      { title: "Hisob-kitob", description: "Format, ishlov va hajmni kelishamiz" },
      { title: "Ishlab chiqarish", description: "Granitni kesamiz va ishlov beramiz" },
      { title: "Jo'natish", description: "Buyurtmani tashish uchun qadoqlaymiz" },
      { title: "Qabul qilish", description: "Buyumlar va hujjatlarni topshiramiz" },
    ],
  },
  leadForm: {
    eyebrow: "Ariza",
    title: "Granit tanlovi va narxini oling",
    description:
      "Telefon raqamingizni qoldiring — mutaxassis vazifani aniqlaydi, mos granit turlarini taklif qiladi va hisob-kitob tayyorlaydi.",
    productTypeLegend: "Mahsulot turi",
    productTypes: ["Bruschatka", "Granit"],
    objectTypeLegend: "Obyekt turi",
    objectTypes: ["Xususiy obyekt", "Tijorat obyekti"],
    areaLegend: "Obyekt maydoni",
    areaOptions: ["50 m² gacha", "50–100 m²", "100–200 m²", "200–500 m²", "500–1000 m²", "1000 m² dan ortiq"],
    nameLabel: "Ismingiz",
    namePlaceholder: "Ism",
    phoneLabel: "Telefon raqami",
    phonePlaceholder: "+998 (__) ___-__-__",
    submit: "Hisob-kitob olish",
    sending: "Yuborilmoqda…",
    phoneInvalid: "Telefon raqamini to'liq kiriting",
    sendError: "Arizani yuborib bo'lmadi. Qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
    consent: "Tugmani bosish orqali shaxsiy ma'lumotlaringizni qayta ishlashga rozilik bildirasiz",
    successTitle: "Ariza yuborildi",
    successText: "Rahmat! Twinstone mutaxassisi tez orada {{phone}} raqami orqali siz bilan bog'lanadi.",
    successAgain: "Yana bitta ariza yuborish",
  },
  map: {
    eyebrow: "Bizning manzil",
    title: "Twinstone xaritada",
    caption:
      "Granit namunalarini jonli ko'rish uchun tashrif buyuring yoki O'zbekiston bo'ylab yetkazib berishni hisoblash uchun bog'laning",
    mapAria: "Twinstone joylashuvi ko'rsatilgan xarita",
    fabricAlt: "Twinstone granit buyumlari ishlab chiqarishi",
    addressLabel: "Manzil",
    phoneLabel: "Telefon",
    ctaDirections: "Yo'nalishni ko'rsatish",
    ctaCases: "Amalga oshirilgan obyektlarni ko'rish",
  },
  cases: {
    eyebrow: "Loyihalar",
    title: "Granitimiz ishlatilgan obyektlar",
    backLink: "← Barcha loyihalar",
    items: {
      "alleya-s-fonaryami": {
        title: "Dekorativ chiroqli granit xiyobon",
        city: "Toshkent",
        category: "Park xiyoboni",
        description: "Taktil yo'lakli piyodalar xiyoboni uchun och rangli granit plitalar",
      },
      "ploshchad-s-fontanom": {
        title: "Favvora yonidagi granit maydon",
        city: "Toshkent",
        category: "Markaziy maydon",
        description: "Gulzorlar va maysazorlar orasidagi nurli granit yo'lkalar",
      },
      "vhodnaya-zona-s-arkoy": {
        title: "Arkali park kirish zonasi",
        city: "Toshkent",
        category: "Kirish zonasi",
        description: "Dekorativ arka atrofidagi keng granit plita qoplamasi",
      },
      "zona-otdyha": {
        title: "Granitdan dam olish zonasi",
        city: "Toshkent",
        category: "Dam olish zonasi",
        description: "O'rindiqlar ostida va maysazor bo'ylab katta formatli granit plitalar",
      },
      "sadovye-dorozhki": {
        title: "Bog'dagi granit yo'lkalar",
        city: "Toshkent",
        category: "Park",
        description: "Yoritilgan gulzorlar orasidagi tor granit yo'lkalar",
      },
      "peshehodnaya-dorozhka": {
        title: "Ko'kalamzor bo'ylab piyodalar yo'lagi",
        city: "Toshkent",
        category: "Piyodalar zonasi",
        description: "Velosiped yo'lagi yonidagi sayr yo'lkasi uchun granit qoplama",
      },
    },
  },
  delivery: {
    eyebrow: "Yetkazib berish",
    title: "Buyurtmani olishning qulay usulini kelishamiz",
    imageAlt: "Granit plitalarni manipulyator yordamida yuk mashinasiga yuklash",
    checklist: ["Paletlarda ishonchli bog'langan granit", "Tosh uchun hujjatlar", "Kelishilgan jo'natish sanasi"],
    note: "O'zi olib ketish mavjud. Yetkazib berish imkoniyati va narxi hajm, partiya og'irligi va obyekt manziliga qarab alohida hisoblanadi.",
  },
  partners: {
    title: "Loyihalar bizga ishonadi",
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p beriladigan savollar",
    items: [
      {
        question: "Ko'cha uchun granitga qanday ishlov tanlash kerak?",
        answer:
          "Zinapoya va yo'lkalar uchun termoishlov, bucharda yoki yorilgan sirt qo'llaniladi: u g'adir-budur bo'lib, qishda va yomg'irdan keyin sirpanmaydi. Pardozlangan granit fasad va interyerlar uchun ko'proq mos keladi.",
      },
      {
        question: "Granit beton plitkadan nimasi bilan yaxshi?",
        answer:
          "Tabiiy granit mustahkamroq, rangi o'chmaydi, yuzlab muzlash-erish sikllariga chidaydi va almashtirishsiz o'nlab yillar xizmat qiladi. Shuning uchun u yuqori yuklamali kirish guruhlari, maydonlar va fasadlar uchun tanlanadi.",
      },
      {
        question: "Qanday o'lchamlar mavjud?",
        answer:
          "Asosiy granit turlari uchun 18 va 30 mm qalinlikdagi plitalar 200×400 dan 600×1500 mm gacha formatlarda mavjud. Nostandart o'lchamlar, zinapoyalar, bordyurlar va boshqa elementlarni loyiha bo'yicha kesamiz.",
      },
      {
        question: "Granit namunalarini ko'rish mumkinmi?",
        answer:
          "Ha. Ishlab chiqarishimizga keling — barcha granit turlarining turli sirt ishlovidagi namunalarini ko'rsatamiz. Tabiiy tosh rangini jonli ko'rib tanlagan ma'qul.",
      },
      {
        question: "Faqat granitni montajsiz buyurtma qilish mumkinmi?",
        answer:
          "Ha. Biz granit buyumlarni tayyorlaymiz va jo'natamiz. Montaj va qo'shimcha xizmatlar alohida kelishiladi.",
      },
      {
        question: "Narx qanday hisoblanadi?",
        answer:
          "Narx granit turi, qalinligi, formati, sirt ishlovi, hajmi va buyurtmani olish shartlariga bog'liq. Qisqa brifingdan so'ng mutaxassis individual hisob-kitob tayyorlaydi.",
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
    tagline: "O'zbekistonda fasadlar, yo'lkalar, zinapoyalar va obodonlashtirish uchun tabiiy granit buyumlar.",
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
