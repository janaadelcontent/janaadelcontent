import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "جنا",
  lastName: "عادل",
  name: "جنا عادل",
  role: "خبيرة وسائل التواصل الاجتماعي وصانعة محتوى ومدربة تسويق رقمي",
  avatar: "/images/jana-adel-placeholder.svg",
  email: "",
  whatsapp: "201027670707", // أضف الرقم بصيغة دولية، مثال: 201XXXXXXXXX
  location: "Africa/Cairo",
  locationLabel: "Cairo, Egypt",
  languages: ["Arabic, English"],
  locale: "ar",
};

const newsletter: Newsletter = {
  display: false,
  title: <>اشترك في نشرة جنا البريدية</>,
  description: <>[أضف موضوع النشرة ورابط الاشتراك.]</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "الرئيسية",
  title: `${person.name} — خبيرة وسائل التواصل الاجتماعي وصانعة محتوى`,
  description: `ملف أعمال ${person.name}، ${person.role} المتخصصة في أبحاث التسويق واستراتيجية السوق.`,
  headline: <>محتوى يحوّل الاهتمام إلى تأثير.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Jana Adel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          أعمال مختارة في المحتوى والاستراتيجية
        </Text>
      </Row>
    ),
    href: "/work/simple-portfolio-builder",
  },
  subline: (
    <>
      أنا {person.firstName}، {person.role}. أساعد العلامات التجارية والأفراد على بناء رسائل
      واضحة ومحتوى فعّال واستراتيجيات تسويقية قائمة على فهم الجمهور والسوق.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "عن جنا",
  title: `عن جنا – ${person.name}`,
  description: `تعرّف على ${person.name}، ${person.role}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "نبذة",
    description: (
      <>
        جنا خبيرة في وسائل التواصل الاجتماعي وصناعة المحتوى ومدربة تسويق رقمي، تجمع بين فهم
        الجمهور والسرد المؤثر والاستراتيجية العملية. لديها خبرة في إدارة العمليات، وأبحاث
        السوق، وكتابة المحتوى، وإدارة الحملات، وتدريب الشباب والطلاب على التسويق الرقمي.
      </>
    ),
  },
  contact: {
    display: true,
    title: "لنعمل معاً",
    description: (
      <>
        للتعاون أو الحملات أو مشاريع الأبحاث: <strong>[أضف البريد الإلكتروني المهني]</strong>
        <br />
        واتساب: <strong>[أضف رقم واتساب بصيغة دولية]</strong>
        <br />
        لينكدإن وإنستغرام: <strong>[أضف روابط الحسابات]</strong>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "الخبرات العملية",
    experiences: [
      {
        company: "Y-PEER",
        timeframe: "نوفمبر 2021 - حتى الآن (دوام جزئي)",
        role: "مدربة عبر الإنترنت",
        achievements: [
          <>تدريب الشباب على موضوعات الشبكة باستخدام منصات تعليمية وتفاعلية عبر الإنترنت.</>,
          <>استخدام أدوات مثل Kahoot وPadlet وNearpod وMentimeter وGoogle Classroom وClassPoint وWordwall.</>,
        ],
        images: [],
      },
      {
        company: "مشروع تأهيل الشباب للتوظيف الذاتي - الأكاديمية الأوروبية الحديثة",
        timeframe: "أكتوبر 2020 - حتى الآن (دوام جزئي)",
        role: "مدربة تسويق رقمي",
        achievements: [
          <>تدريب الطلاب على أساسيات التسويق وخطة واستراتيجية التسويق وأبحاث السوق وتحديد العميل المثالي ورحلة العميل.</>,
          <>تقديم تدريب عملي على القنوات الاجتماعية والمحتوى ومراقبة الحملات والإعلانات عبر فيسبوك وإنستغرام وX وغيرها.</>,
        ],
        images: [],
      },
      {
        company: "ELADL MEDIA CO.",
        timeframe: "فبراير 2019 - حتى الآن",
        role: "مديرة عمليات",
        achievements: [
          <>إدارة فريق عمل متكامل والإشراف عليه وإعداد التقارير.</>,
          <>كتابة المحتوى ونشره لعملاء الشركة، وتطوير محتوى أصلي عبر الاستماع الاجتماعي والمصادر المستقلة.</>,
          <>تعزيز جودة المحتوى بالمراجعة والتحرير ومتابعة أخبار الصناعة ومصادرها.</>,
        ],
        images: [],
      },
      {
        company: "Horus للتجارة والتنمية الزراعية",
        timeframe: "أغسطس 2019 - يناير 2020",
        role: "أخصائية علاقات عامة ومسؤولة تسويق",
        achievements: [
          <>تصميم وتنفيذ مخرجات الحملات، بما فيها الدعوات البريدية والمقالات والفيديوهات التسويقية.</>,
          <>إجراء تحليل السوق ومتابعة نشاط المنافسين وإدارة الاتصالات الداخلية والخارجية واتصالات الأزمات.</>,
        ],
        images: [],
      },
      {
        company: "عمل حر",
        timeframe: "2017 - 2019",
        role: "أخصائية وسائل التواصل الاجتماعي",
        achievements: [
          <>إعداد عروض رقمية تفاعلية للمديرين وكتابة مراسلات أعمال احترافية وتقارير تحديثات.</>,
          <>استخدام التنبؤ بالمبيعات والتخطيط الاستراتيجي لدعم ربحية المنتجات والخدمات.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "التعليم والشهادات",
    institutions: [
      {
        name: "بكالوريوس الزراعة - جامعة طنطا",
        description: <>2014 - 2018</>,
      },
      {
        name: "تدريب المدربين (TOT) - مشروع UNFPA / Y-PEER",
        description: <>يونيو 2019</>,
      },
      {
        name: "إعداد مهندسين زراعيين لزراعة الخضراوات تحت الصوب",
        description: <>الشركة الوطنية بالتعاون مع الهيئة العربية للتصنيع ووزارة الزراعة - سبتمبر إلى نوفمبر 2019</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "مجالات الخبرة",
    skills: [
      {
        title: "إدارة وسائل التواصل الاجتماعي",
        description: (
          <>تخطيط محتوى مناسب لكل منصة، وبناء جداول المحتوى، وإدارة التفاعل مع المجتمع ومراقبة الحملات.</>
        ),
        tags: [
          {
            name: "Facebook, Instagram, X",
          },
        ],
        images: [],
      },
      {
        title: "صناعة المحتوى",
        description: (
          <>تحويل رسائل العلامة التجارية ورؤى الجمهور إلى أفكار محتوى ونصوص وتوجيه إبداعي جذاب، مع التدقيق والتحرير واستخدام أدوات التصوير والتحرير.</>
        ),
        tags: [
          {
            name: "مقالات، فيديوهات، منشورات، عروض",
          },
          {
            name: "أدوات التصوير والتحرير",
          },
        ],
        images: [],
      },
      {
        title: "أبحاث التسويق ورؤى الجمهور",
        description: (
          <>دراسة الجمهور والمنافسين وإشارات السوق وتحديد العميل المثالي ورحلة العميل لدعم قرارات المحتوى والحملات.</>
        ),
        tags: [
          {
            name: "تحليل السوق والمنافسين",
          },
        ],
        images: [],
      },
      {
        title: "استراتيجية السوق",
        description: (
          <>تحويل الأبحاث إلى توصيات عملية للتموضع والقنوات والمحتوى والحملات، بما يشمل نماذج الأعمال والقيمة المقترحة وخطط التسويق.</>
        ),
        tags: [
          {
            name: "خطة التسويق ورحلة العميل",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "مقالات",
  title: "رؤى وملاحظات",
  description: `رؤى في التسويق والمحتوى من ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "دراسات الحالة",
  title: `دراسات الحالة والأعمال الاستراتيجية – ${person.name}`,
  description: `أعمال ${person.name} في وسائل التواصل الاجتماعي والمحتوى والأبحاث واستراتيجية السوق`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "صناعة المحتوى",
  title: `معرض صناعة المحتوى – ${person.name}`,
  description: "محتوى أصلي من تصميم جنا لوسائل التواصل الاجتماعي، يوضح كيف تحوّل أسئلة الجمهور ومزايا المنتجات إلى قصص بصرية واضحة وجذابة.",
  images: [
    {
      src: "/images/gallery/741365568_122109772761298739_1925903136731901658_n.jpg",
      alt: "منشور تعليمي لتخطيط الحمام لصالح أحمد علي للتشطيبات والديكور",
      title: "دليل تخطيط الحمام",
      description: "منشور تعليمي يحوّل تفاصيل تخطيط الحمام إلى إشارات بصرية واضحة، ليساعد العملاء المحتملين على معرفة ما يجب التفكير فيه قبل بدء التشطيب.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/742278172_122109953607298739_4884959408223029162_n.jpg",
      alt: "نصيحة عن موضع وحدة التلفزيون لصالح أحمد علي للتشطيبات والديكور",
      title: "خطط لجدار التلفزيون قبل التشطيب",
      description: "منشور لحل مشكلة شائعة لدى أصحاب المنازل، يستخدم عنواناً مباشراً ومثالاً بصرياً لتشجيع الحفظ والتعليقات.",
      orientation: "square",
    },
    {
      src: "/images/gallery/750617433_122107771911392444_2952137954997065360_n.jpg",
      alt: "منشور توعوي لاختيار السماد لصالح شركة حورس",
      title: "اختر السماد بثقة",
      description: "منشور توعوي يعيد تقديم اختيار السماد كاستثمار طويل المدى، مستخدماً فكرة بصرية قوية تلفت الانتباه أثناء التصفح.",
      orientation: "square",
    },
    {
      src: "/images/gallery/752620010_122110313091392444_6322651060208188094_n.jpg",
      alt: "منشور تعليمي عن اصفرار الأوراق لصالح شركة حورس",
      title: "لماذا تصفر الأوراق الجديدة؟",
      description: "صيغة تعليمية مستوحاة من أسئلة البحث، تجيب عن سؤال حقيقي للجمهور وتشرح الأسباب المحتملة وتعرض المنتج كجزء من الحل.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/754173798_122111115507392444_3229624667310912974_n.jpg",
      alt: "منشور للتعريف بمنتج كيوب كيه لصالح شركة حورس",
      title: "التعريف بمنتج كيوب كيه",
      description: "تصميم موجز للتعريف بالمنتج، يستخدم عنواناً قوياً وتكويناً بسيطاً ليجعل اسم المنتج وفائدته سهلَي التذكر.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/754462817_122110304919392444_8615957788398259004_n.jpg",
      alt: "منشور هوية بصرية للنمو الجديد لصالح شركة حورس",
      title: "رسالة نمو جديدة",
      description: "تصميم نظيف يقوده المنتج، يربط بين الأوراق الصحية ووعد العلامة التجارية، ويعزز التذكر مع الحفاظ على رسالة بسيطة.",
      orientation: "square",
    },
    {
      src: "/images/gallery/756139053_122111533491298739_1106585143775612591_n.jpg",
      alt: "نصيحة لتجهيز السباكة لصالح أحمد علي للتشطيبات والديكور",
      title: "تجنب مشكلات السباكة مبكراً",
      description: "منشور توعوي يبرز خطراً خفياً قبل أن يصبح مكلفاً، ويقدم العلامة التجارية كخبير يساعد العميل لا كمجرد مقدم خدمة.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/765694074_122115950253392444_8147023490213788659_n.jpg",
      alt: "منشور تعليمي لمنتج زراعي لصالح شركة حورس",
      title: "توعية عملية للعناية بالمحاصيل",
      description: "منشور تعليمي يحوّل فائدة المنتج إلى إرشاد مفيد وسهل الفهم للجمهور الزراعي.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/769324476_122112609381298739_5975140177248648632_n.jpg",
      alt: "تصميم لوسائل التواصل الاجتماعي لعلامة حورس الزراعية",
      title: "سرد بصري للعلامة الزراعية",
      description: "تصميم يحمل هوية العلامة للحفاظ على اتساق التواصل عن المنتج عبر المحتوى، وتعزيز الثقة والتعرّف على العلامة.",
      orientation: "square",
    },
    {
      src: "/images/gallery/781923862_122113773705298739_4119283306258091273_n.jpg",
      alt: "تصميم لمنتج زراعي على وسائل التواصل الاجتماعي لصالح حورس",
      title: "تسليط الضوء على فائدة المنتج",
      description: "قطعة محتوى مركزة تقدم فائدة واحدة للمنتج بوضوح، ليكون من السهل قراءتها سريعاً على منصات التواصل عبر الهاتف.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/787888529_122114529819298739_5985919033583710538_n.jpg",
      alt: "تصميم حملة زراعية على وسائل التواصل الاجتماعي لصالح حورس",
      title: "تصميم رسالة الحملة",
      description: "تصميم جاهز للحملة يجمع بين توصيل رسالة المنتج ونظام هوية متسق، ليمنح العلامة حضوراً أقوى في المحتوى.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/clipssaver-facebook-photo-11d30a1739dd.jpg",
      alt: "شعار أحمد علي للتشطيبات والديكور",
      title: "مرجع الهوية البصرية",
      description: "الهوية البصرية المستخدمة كأساس لسلسلة محتوى أحمد علي، للحفاظ على اتساق كل منشور على وسائل التواصل.",
      orientation: "square",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
