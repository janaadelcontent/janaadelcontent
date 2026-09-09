import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jana",
  lastName: "Adel",
  name: "Jana Adel",
  role: "Social media expert, content creator, and digital marketing trainer",
  avatar: "/images/profile_photo.jpg",
  email: "janaa.aadel@gmail.com",
  whatsapp: "201027670707",
  location: "Africa/Cairo",
  locationLabel: "Cairo, Egypt",
  languages: ["Arabic, English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to Jana&apos;s newsletter</>,
  description: <>[Add the newsletter topic and subscription link.]</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jana-affan-4a886a15b/",
    essential: true,
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
    link: "mailto:janaa.aadel@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Social media expert and content creator`,
  description: `${person.name}'s portfolio: ${person.role}, specialising in marketing research and market strategy.`,
  headline: <>Content that turns attention into action.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Jana Adel</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected content and strategy work
        </Text>
      </Row>
    ),
    href: "/work/simple-portfolio-builder",
  },
  subline: (
    <>
      I&apos;m Jana, a social media expert, content creator, and digital marketing trainer. I help brands and individuals develop clear messaging, effective content, and marketing strategies grounded in audience and market insight.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About ${person.name}`,
  description: `Learn about ${person.name}, ${person.role}.`,
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
    title: "Introduction",
    description: (
      <>
        Jana is a social media expert, content creator, and digital marketing trainer who combines
        audience insight, compelling storytelling, and practical strategy. Her experience spans operations,
        marketing research, content writing, campaign management, and digital-marketing training for young people and students.
      </>
    ),
  },
  contact: {
    display: true,
    title: "Let&apos;s work together",
    description: (
      <>
        For collaborations, campaigns, or research projects: <strong>janaa.aadel@gmail.com</strong>
        <br />
        WhatsApp: <strong>+20 102 767 0707</strong>
        <br />
        LinkedIn: <strong>linkedin.com/in/jana-affan-4a886a15b</strong>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work experience",
    experiences: [
      {
        company: "Y-PEER",
        timeframe: "November 2021 – present · Part-time",
        role: "Online trainer",
        achievements: [
          <>Train young people on the network&apos;s subjects through online learning and interactive platforms.</>,
          <>Use tools including Kahoot, Padlet, Nearpod, Mentimeter, Google Classroom, ClassPoint, and Wordwall.</>,
        ],
        images: [],
      },
      {
        company: "Youth Qualification for Self-employment Project – Modern European Academy",
        timeframe: "October 2020 – present · Part-time",
        role: "Digital marketing trainer",
        achievements: [
          <>Train students in marketing fundamentals, marketing plans and strategy, market research, ideal-customer definition, and customer journeys.</>,
          <>Deliver practical training in social channels, content, campaign monitoring, and advertising across Facebook, Instagram, X, and more.</>,
        ],
        images: [],
      },
      {
        company: "ELADL MEDIA CO.",
        timeframe: "February 2019 – present",
        role: "Operations manager",
        achievements: [
          <>Manage and supervise an integrated team and prepare reports.</>,
          <>Write and publish content for company clients, developing original content through social listening and independent sources.</>,
          <>Improve content quality through review, editing, and industry-news monitoring.</>,
        ],
        images: [],
      },
      {
        company: "Horus Trading and Agricultural Development",
        timeframe: "August 2019 – January 2020",
        role: "Public relations specialist and marketing officer",
        achievements: [
          <>Design and deliver campaign assets, including email invitations, articles, and marketing videos.</>,
          <>Conduct market analysis, monitor competitor activity, and manage internal, external, and crisis communications.</>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2017 - 2019",
        role: "Social media specialist",
        achievements: [
          <>Prepare interactive digital presentations for managers and write professional business correspondence and update reports.</>,
          <>Use sales forecasting and strategic planning to support product and service profitability.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education and certifications",
    institutions: [
      {
        name: "Bachelor of Agriculture – Tanta University",
        description: <>2014 - 2018</>,
      },
      {
        name: "Training of Trainers (TOT) – UNFPA / Y-PEER Project",
        description: <>June 2019</>,
      },
      {
        name: "Preparing agricultural engineers for greenhouse vegetable cultivation",
        description: <>National Company in cooperation with the Arab Organization for Industrialization and the Ministry of Agriculture – September to November 2019</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Core expertise",
    skills: [
      {
        title: "Social media management",
        description: (
          <>Plan platform-appropriate content, build content calendars, manage community engagement, and monitor campaigns.</>
        ),
        tags: [
          {
            name: "Facebook, Instagram, X",
          },
        ],
        images: [],
      },
      {
        title: "Content creation",
        description: (
          <>Turn brand messaging and audience insight into engaging content ideas, copy, and creative direction, supported by proofreading, editing, and photography and editing tools.</>
        ),
        tags: [
          {
            name: "Articles, videos, posts, presentations",
          },
          {
            name: "Photography and editing tools",
          },
        ],
        images: [],
      },
      {
        title: "Marketing research and audience insight",
        description: (
          <>Study audiences, competitors, market signals, ideal customers, and customer journeys to inform content and campaign decisions.</>
        ),
        tags: [
          {
            name: "Market and competitor analysis",
          },
        ],
        images: [],
      },
      {
        title: "Market strategy",
        description: (
          <>Turn research into practical recommendations for positioning, channels, content, and campaigns, including business models, value propositions, and marketing plans.</>
        ),
        tags: [
          {
            name: "Marketing plan and customer journey",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Articles",
  title: "Insights and notes",
  description: `Marketing and content insights from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Case studies",
  title: `Case studies and strategic work – ${person.name}`,
  description: `${person.name}'s work in social media, content, research, and market strategy`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Content creation",
  title: `Content creation showcase – ${person.name}`,
  description: "Original social content by Jana, showing how audience questions and product benefits become clear, engaging visual stories.",
  images: [
    {
      src: "/images/gallery/741365568_122109772761298739_1925903136731901658_n.jpg",
      alt: "Educational bathroom-planning post for Ahmed Ali Finishing and Décor",
      title: "Bathroom planning guide",
      description: "An educational post that turns bathroom-planning details into clear visual cues, helping prospective clients know what to consider before finishing begins.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/742278172_122109953607298739_4884959408223029162_n.jpg",
      alt: "TV-unit placement advice for Ahmed Ali Finishing and Décor",
      title: "Plan the TV wall before finishing",
      description: "A post that addresses a common homeowner problem with a direct headline and visual example that encourages saves and comments.",
      orientation: "square",
    },
    {
      src: "/images/gallery/750617433_122107771911392444_2952137954997065360_n.jpg",
      alt: "Fertilizer-choice education post for Horus",
      title: "Choose fertilizer with confidence",
      description: "An educational post that frames fertilizer choice as a long-term investment, using a strong visual concept to stop the scroll.",
      orientation: "square",
    },
    {
      src: "/images/gallery/752620010_122110313091392444_6322651060208188094_n.jpg",
      alt: "Educational post about yellowing leaves for Horus",
      title: "Why new leaves turn yellow",
      description: "A research-led educational format that answers a real audience question, explains likely causes, and positions the product as part of the solution.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/754173798_122111115507392444_3229624667310912974_n.jpg",
      alt: "Cube-K product-awareness post for Horus",
      title: "Cube-K product awareness",
      description: "A concise product-awareness design with a strong headline and simple composition that make the product name and benefit easy to remember.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/754462817_122110304919392444_8615957788398259004_n.jpg",
      alt: "New-growth visual-identity post for Horus",
      title: "A new-growth brand message",
      description: "A clean, product-led design that connects healthy leaves with the brand promise and builds recall while keeping the message simple.",
      orientation: "square",
    },
    {
      src: "/images/gallery/756139053_122111533491298739_1106585143775612591_n.jpg",
      alt: "Plumbing-preparation tip for Ahmed Ali Finishing and Décor",
      title: "Prevent plumbing problems early",
      description: "An educational post that highlights a hidden risk before it becomes costly, positioning the brand as a helpful expert rather than only a service provider.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/765694074_122115950253392444_8147023490213788659_n.jpg",
      alt: "Educational agricultural-product post for Horus",
      title: "Practical crop-care education",
      description: "An educational post that turns a product benefit into helpful, easy-to-understand guidance for an agricultural audience.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/769324476_122112609381298739_5975140177248648632_n.jpg",
      alt: "Social-media design for the Horus agricultural brand",
      title: "Agricultural brand storytelling",
      description: "A branded design that keeps product communication consistent across content, strengthening trust and brand recognition.",
      orientation: "square",
    },
    {
      src: "/images/gallery/781923862_122113773705298739_4119283306258091273_n.jpg",
      alt: "Agricultural-product social-media design for Horus",
      title: "Product benefit spotlight",
      description: "A focused content piece that presents one product benefit clearly, making it easy to read quickly on mobile social platforms.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/787888529_122114529819298739_5985919033583710538_n.jpg",
      alt: "Agricultural social-media campaign design for Horus",
      title: "Campaign message visual",
      description: "A campaign-ready design that combines product messaging with a consistent identity system to give the brand a stronger content presence.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/clipssaver-facebook-photo-11d30a1739dd.jpg",
      alt: "Ahmed Ali Finishing and Décor logo",
      title: "Brand identity reference",
      description: "The visual identity used as the foundation for Ahmed Ali&apos;s content series, keeping every social post consistent.",
      orientation: "square",
    },
    {
      src: "/images/gallery/fvidgo.com_47c2456387d0.jpg",
      alt: "Ahmed Ali finishing quality-awareness post",
      title: "Finishing quality starts beneath the paint",
      description: "A striking paint-and-wall visual that positions preparation work as the difference between a temporary finish and lasting quality.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/fvidgo.com_50683ab20d1e.jpg",
      alt: "Ahmed Ali electrical-planning awareness post",
      title: "Plan the electrical work before closing the wall",
      description: "An educational electrical-installation post that helps homeowners understand the hidden decisions that protect a finished space.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/fvidgo.com_625d2a0bfcf3.jpg",
      alt: "Ahmed Ali HVAC-installation awareness post",
      title: "The HVAC detail that changes the outcome",
      description: "A practical visual about air-conditioning installation, turning a technical finishing detail into a clear, save-worthy customer lesson.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/fvidgo.com_971b44826643.jpg",
      alt: "Ahmed Ali shower-drainage awareness post",
      title: "The shower drainage detail to plan early",
      description: "A bathroom-planning post that surfaces a small drainage decision before it becomes a costly problem after delivery.",
      orientation: "square",
    },
    {
      src: "/images/gallery/fvidgo.com_9f73e2865e11.jpg",
      alt: "Ahmed Ali plumbing-access awareness post",
      title: "Protect plumbing before the tiles go in",
      description: "A plumbing access visual that makes hidden infrastructure visible and strengthens the brand&apos;s expert-led positioning.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/fvidgo.com_e4ffc0a693b3.jpg",
      alt: "Ahmed Ali cost-planning awareness post",
      title: "Plan the finishing budget before the work begins",
      description: "A high-impact residential visual that uses cost planning as an entry point for a more informed conversation with the client.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953948_y.jpg",
      alt: "Ahmed Ali bathroom drainage-design post",
      title: "A better shower starts with drainage planning",
      description: "An educational bathroom visual that connects a polished final space to one critical technical choice below the surface.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953949_y.jpg",
      alt: "Ahmed Ali concealed plumbing-design post",
      title: "Inspect hidden plumbing before closing the wall",
      description: "A clear pre-finishing message that helps homeowners understand why inspection matters before tiles and paint are completed.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953950_y.jpg",
      alt: "Ahmed Ali water-pipe planning post",
      title: "Prevent future repairs with early plumbing planning",
      description: "A practical content piece that turns a technical plumbing issue into an accessible customer education moment.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953951_y.jpg",
      alt: "Ahmed Ali recessed-lighting planning post",
      title: "Recessed lighting needs a precise plan",
      description: "A room-design visual that demonstrates how detailed ceiling planning protects the finished ambience of a home.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953953_y.jpg",
      alt: "Ahmed Ali concealed cistern awareness post",
      title: "The hidden bathroom detail that needs attention",
      description: "A focused bathroom post that uses a concealed-cistern detail to position preventative planning as part of a quality finish.",
      orientation: "square",
    },
    {
      src: "/images/gallery/photo_5834434530561953955_y.jpg",
      alt: "Ahmed Ali finishing cost-planning post",
      title: "Control finishing costs with the right early decisions",
      description: "A cinematic interior visual that frames careful planning as the foundation for managing finishing costs successfully.",
      orientation: "square",
    },
    {
      src: "/images/gallery/787888529_122114529819298739_5985919033583710538_n..jpg",
      alt: "Ahmed Ali kitchen layout-planning post",
      title: "The three-point kitchen layout",
      description: "A kitchen-planning visual that explains how the right relationship between storage, washing, and cooking makes daily movement easier.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/document_5834434530101961909.mp4",
      alt: "Ahmed Ali Finishing and Décor social-content reel",
      title: "Finishing and décor content reel",
      description: "A vertical video asset that brings the finishing-content system to life through motion, pacing, and an immediate visual hook.",
      orientation: "vertical",
      type: "video",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
