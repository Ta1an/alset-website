// All page copy, in both languages, in one place.
// @nuxtjs/i18n handles the /ru /en URLs and locale switching;
// this composable just hands back the right copy object for the
// active locale, which keeps nested arrays (services, stats, steps…)
// simple to author compared to vue-i18n message files.

export type Locale = "ru" | "en";

export const CONTENT: Record<Locale, any> = {
  ru: {
    nav: {
      home: "Главная",
      about: "О компании",
      services: "Услуги",
      how: "Как это работает",
      contacts: "Контакты",
    },
    cta: { whatsapp: "WhatsApp" },
    footer: {
      description:
        "Сопровождаем производителей и импортёров в вопросах сертификации и декларирования продукции для выхода на рынок ЕАЭС.",
      navigation: "Навигация",
      contactTitle: "Нужна помощь с сертификацией?",
      contactButton: "Связаться с нами",
      rights: "© 2026 Alset Certification. Все права защищены.",
    },

    home: {
      eyebrow: "Сертификация и декларирование в ЕАЭС",
      titleBefore: "Выводим ваш товар на рынок",
      titleHighlight: "ЕАЭС",
      titleAfter: "без лишних шагов",
      subtitle:
        "Alset Certification сопровождает декларирование и сертификацию продукции по требованиям Таможенного союза и Казахстана — от заявки до готового документа.",
      primary: "Получить консультацию",
      secondary: "Смотреть услуги",
      pillars: [
        {
          icon: "tabler:file-certificate",
          title: "Декларируем",
          desc: "Декларация соответствия ЕАЭС и сертификат ТР РК",
        },
        {
          icon: "tabler:certificate",
          title: "Сертифицируем",
          desc: "Сертификат соответствия ЕАС и добровольная сертификация",
        },
        {
          icon: "tabler:headset",
          title: "Сопровождаем",
          desc: "Консультации и сбор документов под ключ",
        },
      ],
      ctaBar: {
        label: "Какой товар сертифицируем?",
        placeholder: "Например: БАД, детские игрушки, оборудование…",
        button: "Получить консультацию",
      },
      stats: [
        { n: "30+", l: "компаний получили сертификаты" },
        { n: "100+", l: "бесплатных консультаций" },
        { n: "10", l: "партнёрских лабораторий" },
      ],
      servicesButton: "Все услуги",
      services: [
        {
          icon: "tabler:file-text",
          title: "Декларация соответствия ЕАЭС",
          d: "Подготовка документов и сопровождение при оформлении декларации соответствия Таможенного союза.",
        },
        {
          icon: "tabler:shield-check",
          title: "Свидетельство о государственной регистрации",
          d: "Получение СГР для специализированной пищевой продукции и БАDов.",
        },
        {
          icon: "tabler:certificate",
          title: "Сертификат соответствия ТР РК",
          d: "Оформление сертификата соответствия техническим регламентам Республики Казахстан.",
        },
        {
          icon: "tabler:award",
          title: "Добровольная сертификация",
          d: "Подтверждение качества продукции вне обязательных требований — для доверия покупателей.",
        },
        {
          icon: "tabler:mail",
          title: "Отказные и информационные письма",
          d: "Письма для продукции, не подлежащей обязательной сертификации.",
        },
      ],
      ctaTitle: "Готовы сертифицировать ваш товар?",
      ctaSub:
        "Расскажите нам о продукте — подберём подходящую схему сертификации.",
      ctaBtn: "Связаться с нами",
    },

    about: {
      eyebrow: "О компании",
      title: "Помогаем бизнесу законно выйти на рынок ЕАЭС",
      intro:
        "Alset Certification сопровождает производителей и импортёров на каждом шаге обязательной и добровольной сертификации — от первичной консультации до получения готового документа, принимаемого таможней и контролирующими органами.",
      quote: {
        text: "Мы помогаем компаниям быстро и без ошибок проходить обязательную сертификацию при выходе на рынок ЕАЭС.",
        name: "Алия Толеубекова",
        role: "Директор Alset Certification",
      },
      stats: [
        { n: "30+", l: "компаний" },
        { n: "100+", l: "консультаций" },
        { n: "10", l: "партнёров" },
      ],
      valuesTitle: "Почему обращаются к нам",
      values: [
        {
          t: "Экспертиза",
          d: "Разбираемся в требованиях ЕАЭС и Казахстана по широкому кругу категорий товаров.",
        },
        {
          t: "Сопровождение под ключ",
          d: "Берём на себя подготовку документов и взаимодействие с органами по сертификации.",
        },
        {
          t: "Прозрачность",
          d: "Заранее объясняем, какая схема сертификации нужна именно вашему товару и почему.",
        },
      ],
      ctaTitle: "Обсудим ваш товар?",
      ctaSub:
        "Бесплатная консультация поможет понять, какие документы потребуются.",
      ctaBtn: "Связаться с нами",
    },

    services: {
      eyebrow: "Направления работы",
      title: "Комплексные решения для сертификации продукции",
      subtitle:
        "Подбираем подходящую форму подтверждения соответствия, помогаем подготовить документы и сопровождаем процесс — от первой консультации до получения готового документа.",
      services: [
        {
          t: "Декларация соответствия ЕАЭС",
          d: "Подготовка документов и сопровождение при оформлении декларации соответствия Таможенного союза.",
        },
        {
          t: "Свидетельство о государственной регистрации",
          d: "Получение СГР для специализированной пищевой продукции и биологически активных добавок.",
        },
        {
          t: "Сертификат соответствия ТР РК",
          d: "Оформление сертификата соответствия техническим регламентам Республики Казахстан.",
        },
        {
          t: "Добровольная сертификация",
          d: "Подтверждение качества продукции вне обязательных требований — для повышения доверия покупателей и партнёров.",
        },
        {
          t: "Отказные и информационные письма",
          d: "Оформление писем об отказе в сертификации и информационных писем для продукции, не подлежащей обязательной сертификации.",
        },
      ],
      typesTitle: "Виды сертификации",
      typesSub:
        "В зависимости от категории товара применяется одна из трёх форм подтверждения соответствия.",
      types: [
        {
          t: "Декларация соответствия",
          d: "Заявительное подтверждение того, что продукция соответствует требованиям технических регламентов.",
        },
        {
          t: "Сертификат соответствия ЕАС",
          d: "Обязательное подтверждение соответствия, выдаваемое аккредитованным органом по сертификации.",
        },
        {
          t: "Свидетельство о госрегистрации (СГР)",
          d: "Разрешительный документ для продукции, подлежащей санитарно-эпидемиологической экспертизе.",
        },
      ],
      goodsTitle: "Товары, подлежащие сертификации ТС",
      goodsSub: "Ниже — основные категории, с которыми мы работаем чаще всего.",
      goods: [
        "Специализированная пищевая продукция и БАДы",
        "Детские товары и игрушки",
        "Оборудование",
        "Колёсные транспортные средства и компоненты",
        "Материалы для автодорожного строительства",
        "Пиротехнические изделия",
        "Железнодорожный транспорт",
        "Маломерные суда",
        "Отдельные товары лёгкой промышленности",
        "Другое",
      ],
      ctaTitle: "Не уверены, какая схема нужна?",
      ctaSub:
        "Опишите товар — бесплатно подскажем, какие документы потребуются.",
      ctaBtn: "Получить консультацию",
    },

    how: {
      eyebrow: "Как мы работаем",
      title: "Сертификация продукции — шаг за шагом",
      subtitle:
        "Показываем весь путь заранее: от первичной консультации и подготовки документов до испытаний и получения итогового документа.",

      steps: [
        {
          n: "1",
          t: "Консультация и заявка",
          d: "Вы описываете товар — мы определяем, какой документ нужен: декларация, сертификат ЕАС или СГР.",
        },
        {
          n: "2",
          t: "Сбор документов",
          d: "Собираем пакет документов на продукцию: от учредительных документов компании до технической документации на товар.",
        },
        {
          n: "3",
          t: "Выбор схемы сертификации",
          d: "Подбираем применимую схему подтверждения соответствия исходя из категории товара и объёма поставок.",
        },
        {
          n: "4",
          t: "Испытания и экспертиза",
          d: "При необходимости организуем лабораторные испытания образцов в аккредитованных лабораториях-партнёрах.",
        },
        {
          n: "5",
          t: "Выдача документа",
          d: "Получаете готовую декларацию, сертификат или свидетельство, зарегистрированные в реестре ЕАЭС.",
        },
      ],
      ctaTitle: "Готовы начать?",
      ctaSub:
        "Опишите ваш товар — расскажем, сколько шагов понадобится именно вам.",
      ctaBtn: "Получить консультацию",
    },

    contacts: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      intro:
        "Ответим на вопросы о сертификации и подберём подходящую схему для вашего товара.",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp",
      instaPlaceholder: "[ССЫЛКА НА INSTAGRAM]",
      formTitle: "Оставить заявку",
      form: {
        name: "Имя",
        namePh: "Как к вам обращаться",
        phone: "Телефон",
        category: "Категория товара",
        message: "Сообщение",
        messagePh: "Кратко опишите продукт",
        submit: "Отправить заявку",
        sent: "Заявка отправлена — мы свяжемся с вами в ближайшее время.",
      },
      formCategories: [
        "Специализированная пищевая продукция и БАДы",
        "Детские товары и игрушки",
        "Оборудование",
        "Транспортные средства",
        "Другое",
      ],
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      how: "How It Works",
      contacts: "Contacts",
    },
    cta: { whatsapp: "WhatsApp" },
    footer: {
      description:
        "We support manufacturers and importers with product certification and declaration for entering the EAEU market.",
      navigation: "Navigation",
      contactTitle: "Need help with certification?",
      contactButton: "Contact us",
      rights: "© 2026 Alset Certification. All rights reserved.",
    },

    home: {
      eyebrow: "Certification & declaration across the EAEU",
      titleBefore: "Bring your product to the",
      titleHighlight: "EAEU market",
      titleAfter: "without the guesswork",
      subtitle:
        "Alset Certification manages declaration and certification under Customs Union and Kazakhstan requirements — from application to finished document.",
      primary: "Get a consultation",
      secondary: "See services",
      pillars: [
        {
          icon: "tabler:file-certificate",
          title: "Declare",
          desc: "EAEU declarations of conformity and TR RK certificates",
        },
        {
          icon: "tabler:certificate",
          title: "Certify",
          desc: "EAC certificates of conformity and voluntary certification",
        },
        {
          icon: "tabler:headset",
          title: "Support",
          desc: "End-to-end consultations and document handling",
        },
      ],
      ctaBar: {
        label: "What product are you certifying?",
        placeholder: "e.g. dietary supplement, toys, equipment…",
        button: "Get a consultation",
      },
      stats: [
        { n: "30+", l: "companies certified" },
        { n: "100+", l: "free consultations" },
        { n: "10", l: "partner labs" },
      ],
      servicesButton: "All services",
      services: [
        {
          icon: "tabler:file-text",
          title: "EAEU Declaration of Conformity",
          d: "Document preparation and support for registering a Customs Union declaration of conformity.",
        },
        {
          icon: "tabler:shield-check",
          title: "State Registration Certificate",
          d: "Obtaining an SRC for specialized nutrition products and dietary supplements.",
        },
        {
          icon: "tabler:certificate",
          title: "TR RK Certificate of Conformity",
          d: "Certification against Kazakhstan’s technical regulations.",
        },
        {
          icon: "tabler:award",
          title: "Voluntary Certification",
          d: "Confirming product quality beyond mandatory requirements to build buyer trust.",
        },
        {
          icon: "tabler:mail",
          title: "Refusal & Information Letters",
          d: "For goods that don’t require mandatory certification.",
        },
      ],
      ctaTitle: "Ready to certify your product?",
      ctaSub:
        "Tell us about it — we will match it to the right certification scheme.",
      ctaBtn: "Contact us",
    },

    about: {
      eyebrow: "About us",
      title: "Helping businesses enter the EAEU market the right way",
      intro:
        "Alset Certification supports manufacturers and importers through every step of mandatory and voluntary certification — from the first consultation to a finished document accepted by customs and regulators.",
      quote: {
        text: "We help companies pass mandatory certification quickly and correctly when entering the EAEU market.",
        name: "Aliya Toleubekova",
        role: "Director, Alset Certification",
      },
      stats: [
        { n: "30+", l: "companies" },
        { n: "100+", l: "consultations" },
        { n: "10", l: "partners" },
      ],
      valuesTitle: "Why clients work with us",
      values: [
        {
          t: "Expertise",
          d: "We know EAEU and Kazakhstan requirements across a wide range of product categories.",
        },
        {
          t: "End-to-end support",
          d: "We handle document preparation and liaise with certification bodies on your behalf.",
        },
        {
          t: "Transparency",
          d: "We explain upfront which certification scheme your product actually needs, and why.",
        },
      ],
      ctaTitle: "Let’s talk about your product",
      ctaSub:
        "A free consultation will clarify exactly which documents you need.",
      ctaBtn: "Contact us",
    },

    services: {
      eyebrow: "Our services",
      title: "Comprehensive product certification solutions",
      subtitle:
        "We help identify the right conformity assessment procedure, prepare the required documents and guide you through the process — from the initial consultation to the final document.",
      services: [
        {
          t: "EAEU Declaration of Conformity",
          d: "Document preparation and support for registering a Customs Union declaration of conformity.",
        },
        {
          t: "State Registration Certificate",
          d: "Obtaining an SRC for specialized nutrition products and dietary supplements.",
        },
        {
          t: "TR RK Certificate of Conformity",
          d: "Certification against Kazakhstan’s technical regulations.",
        },
        {
          t: "Voluntary Certification",
          d: "Confirming product quality beyond mandatory requirements to build buyer and partner trust.",
        },
        {
          t: "Refusal & Information Letters",
          d: "Refusal and information letters for goods that don’t require mandatory certification.",
        },
      ],
      typesTitle: "Types of certification",
      typesSub:
        "Depending on the product category, one of three conformity-assessment forms applies.",
      types: [
        {
          t: "Declaration of Conformity",
          d: "A supplier’s declared confirmation that a product meets technical regulations.",
        },
        {
          t: "EAC Certificate of Conformity",
          d: "Mandatory confirmation of conformity issued by an accredited certification body.",
        },
        {
          t: "State Registration Certificate (SRC)",
          d: "A permit required for goods subject to sanitary and epidemiological review.",
        },
      ],
      goodsTitle: "Goods requiring a Customs Union certificate",
      goodsSub: "The categories we work with most often are listed below.",
      goods: [
        "Specialized nutrition & dietary supplements",
        "Children’s goods & toys",
        "Equipment",
        "Wheeled vehicles & components",
        "Highway construction materials",
        "Pyrotechnics",
        "Railway transport",
        "Small vessels",
        "Select light-industry goods",
        "Other",
      ],
      ctaTitle: "Not sure which scheme you need?",
      ctaSub:
        "Describe your product — we’ll tell you free of charge what documents are required.",
      ctaBtn: "Get a consultation",
    },

    how: {
      eyebrow: "How we work",
      title: "Product certification, step by step",
      subtitle:
        "We guide you through the entire process: from the initial consultation and document preparation to testing and receiving the final document.",

      steps: [
        {
          n: "1",
          t: "Consultation & application",
          d: "You describe the product — we determine which document is required: a declaration, an EAC certificate, or an SRC.",
        },
        {
          n: "2",
          t: "Document collection",
          d: "We gather the product’s documentation — from the company’s incorporation papers to technical documentation for the goods.",
        },
        {
          n: "3",
          t: "Choosing the certification scheme",
          d: "We select the applicable conformity-assessment scheme based on the product category and shipment volume.",
        },
        {
          n: "4",
          t: "Testing & expert review",
          d: "Where needed, we arrange lab testing of samples at accredited partner laboratories.",
        },
        {
          n: "5",
          t: "Document issuance",
          d: "You receive the finished declaration, certificate or registration, recorded in the EAEU register.",
        },
      ],
      ctaTitle: "Ready to start?",
      ctaSub:
        "Describe your product and we’ll tell you exactly how many steps you’ll need.",
      ctaBtn: "Get a consultation",
    },

    contacts: {
      eyebrow: "Contacts",
      title: "Get in touch",
      intro:
        "We’ll answer your certification questions and match your product to the right scheme.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      instaPlaceholder: "[INSTAGRAM LINK]",
      formTitle: "Send a request",
      form: {
        name: "Name",
        namePh: "How should we address you",
        phone: "Phone",
        category: "Product category",
        message: "Message",
        messagePh: "Briefly describe the product",
        submit: "Send request",
        sent: "Request sent — we’ll be in touch shortly.",
      },
      formCategories: [
        "Specialized nutrition & dietary supplements",
        "Children’s goods & toys",
        "Equipment",
        "Vehicles",
        "Other",
      ],
    },
  },
};

export function useContent() {
  const { locale } = useI18n();
  return computed(() => CONTENT[locale.value as Locale] ?? CONTENT.ru);
}
