/* Design philosophy: project records keep the reference-matched portfolio editorial, but make every live build discoverable through a clear narrative and visual gallery. */
export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  category: "Vercel" | "Webflow";
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  liveUrl: string;
};

const storage = "/assets/";

export const projects: Project[] = [
  {
    slug: "ayyan-khan-portfolio",
    title: "Ayyan Khan Portfolio",
    type: "GRAPHIC DESIGNER CLIENT PORTFOLIO",
    year: "2026",
    category: "Vercel",
    description:
      "A client portfolio showcasing a graphic designer's work across branding, logos, social media, packaging, print, and UI/UX design.",
    longDescription:
      "I built this portfolio for graphic designer Ayyan Khan to give his creative work a distinctive online home. Bold typography, lime accents, and an editorial layout lead visitors through logo collections, brand identity presentations, social campaigns, packaging, print, and UI/UX projects. Clear section navigation and direct contact links make it easy to explore his work and start a project.",
    image: `${storage}ayyan-khan-home.png`,
    gallery: [`${storage}ayyan-khan-home.png`, `${storage}ayyan-khan-work.png`],
    tags: ["Client Project", "Portfolio", "Visual Storytelling"],
    liveUrl: "https://ayyan-khan-portfolio.vercel.app/",
  },
  {
    slug: "boost-vertex",
    title: "Boost Vertex",
    type: "FULL STACK MARKETING AGENCY",
    year: "2026",
    category: "Vercel",
    description:
      "A full stack marketing agency website with an admin dashboard, service pages, case studies, and clear paths for client inquiries.",
    longDescription:
      "I built Boost Vertex as a full stack website for a performance marketing agency, pairing a public-facing experience with an admin dashboard. The site presents Meta Ads, lead generation, Google Ads, YouTube Ads, SEO, and web development through dedicated service pages, supported by case studies, insights, and contact flows. A bold dark-and-lime visual system ties the agency's offering together and guides prospective clients toward an inquiry or consultation.",
    image: `${storage}boost-vertex-home.png`,
    gallery: [
      `${storage}boost-vertex-home.png`,
      `${storage}boost-vertex-services.png`,
    ],
    tags: ["Full Stack", "Admin Dashboard", "Marketing Agency"],
    liveUrl: "https://boost-vertex.vercel.app/",
  },
  {
    slug: "skyelite",
    title: "SkyElite",
    type: "PREMIUM LANDING PAGE",
    year: "2026",
    category: "Vercel",
    description:
      "A quiet-luxury private aviation experience with fleet storytelling, rates, destinations, and concierge conversion paths.",
    longDescription:
      "SkyElite turns private aviation into a calm, editorial product story. I shaped the experience around premium imagery, strong typographic pacing, aircraft specifications, transparent pricing tiers, destination discovery, and a direct concierge CTA.",
    image: `${storage}skyelite.webp`,
    gallery: [
      `${storage}skyelite.webp`,
      `${storage}skyelite.webp`,
      `${storage}skyelite.webp`,
    ],
    tags: ["React", "Editorial UI", "Responsive"],
    liveUrl: "https://skyelite-landing-page-rosy.vercel.app/",
  },
  {
    slug: "luxe-mart",
    title: "Luxe Mart",
    type: "COMMERCE EXPERIENCE",
    year: "2026",
    category: "Vercel",
    description:
      "A luxury storefront built around collection discovery, product rhythm, lookbook energy, and confident commerce controls.",
    longDescription:
      "Luxe Mart is an editorial commerce concept for modern luxury retail. The interface moves from seasonal campaign storytelling into curated categories, product cards, wishlist/cart moments, and a visual lookbook without losing the sense of restraint.",
    image: `${storage}luxe-mart.webp`,
    gallery: [
      `${storage}luxe-mart.webp`,
      `${storage}luxe-mart.webp`,
      `${storage}luxe-mart.webp`,
    ],
    tags: ["React", "Commerce", "Motion"],
    liveUrl: "https://luxe-mart-steel.vercel.app/",
  },
  {
    slug: "resume-ai",
    title: "ResumeAI Pro",
    type: "AI PRODUCT SITE",
    year: "2026",
    category: "Vercel",
    description:
      "A conversion-led AI resume product site presenting ATS scoring, rewriting, templates, pricing, and trust signals.",
    longDescription:
      "ResumeAI Pro makes a technical product feel immediately useful. I translated ATS scoring, keyword extraction, smart rewriting, templates, social proof, and pricing into a clear marketing flow with product-like interface cues.",
    image: `${storage}resume-ai.webp`,
    gallery: [
      `${storage}resume-ai.webp`,
      `${storage}resume-ai.webp`,
      `${storage}resume-ai.webp`,
    ],
    tags: ["React", "SaaS", "Product UX"],
    liveUrl: "https://ai-resume-maker-51.vercel.app/",
  },
  {
    slug: "movie-stream",
    title: "Movie Stream",
    type: "STREAMING LANDING PAGE",
    year: "2026",
    category: "Vercel",
    description:
      "A cinematic streaming landing page with a bold hero, device storytelling, download value, and FAQ conversion structure.",
    longDescription:
      "Movie Stream is a streaming-service concept focused on cinematic contrast and immediate conversion. The page brings together a dark hero, email capture, device compatibility, offline viewing, family profiles, and responsive section transitions.",
    image: `${storage}movie.webp`,
    gallery: [
      `${storage}movie.webp`,
      `${storage}movie.webp`,
      `${storage}movie.webp`,
    ],
    tags: ["React", "Cinematic UI", "Responsive"],
    liveUrl: "https://movie-website-ivory-iota.vercel.app/",
  },
  {
    slug: "study-tracker",
    title: "StudyTracker Pro",
    type: "PRODUCT LANDING PAGE",
    year: "2026",
    category: "Vercel",
    description:
      "A focused student productivity concept for weekly schedules, completion tracking, streaks, and study analytics.",
    longDescription:
      "StudyTracker Pro keeps the promise simple: plan the week, track the work, see the pattern. I organized the landing page around a strong hero CTA and three clear product pillars that can expand into a full productivity app.",
    image: `${storage}study-tracker.webp`,
    gallery: [
      `${storage}study-tracker.webp`,
      `${storage}study-tracker.webp`,
      `${storage}study-tracker.webp`,
    ],
    tags: ["React", "Product UI", "Dashboard"],
    liveUrl: "https://study-tracker-vu.vercel.app/",
  },
  {
    slug: "urban-vista",
    title: "Urban Vista",
    type: "REAL ESTATE PLATFORM",
    year: "2026",
    category: "Vercel",
    description:
      "A luxury Miami real-estate experience with property search, featured listings, agents, editorial insights, and consultation paths.",
    longDescription:
      "Urban Vista frames property discovery as a premium advisory experience. The build combines an immersive Miami hero, search controls, listing cards, agents, market insights, and a strong consultation close.",
    image: `${storage}urban-vista.webp`,
    gallery: [
      `${storage}urban-vista.webp`,
      `${storage}urban-vista.webp`,
      `${storage}urban-vista.webp`,
    ],
    tags: ["React", "Real Estate", "CMS"],
    liveUrl: "https://urban-vista-website.vercel.app/",
  },
  {
    slug: "learnify",
    title: "Learnify",
    type: "EDTECH PLATFORM",
    year: "2026",
    category: "Vercel",
    description:
      "An online-learning platform concept with course discovery, instructor storytelling, career outcomes, and category navigation.",
    longDescription:
      "Learnify organizes a large learning proposition into a confident education journey: discover popular courses, understand outcomes, meet instructors, and move into a focused start-learning CTA.",
    image: "/assets/learnify-cover.png",
    gallery: [
      "/assets/learnify-cover.png",
      "/assets/study-tracker.webp",
      "/assets/resume-ai.webp",
    ],
    tags: ["React", "Education", "CMS"],
    liveUrl: "https://courseseekho-f3az.vercel.app/",
  },
  {
    slug: "forecaster",
    title: "Forecaster",
    type: "SMART PRODUCT",
    year: "2025",
    category: "Webflow",
    description:
      "A playful Webflow product story for a smart golf ball with audio feedback, swing data, and membership tiers.",
    longDescription:
      "Forecaster uses a witty voice and product-led storytelling to introduce a smart golf ball. The Webflow build moves from promise to features, data feedback, membership tiers, and forecasted FAQs.",
    image: "/assets/luxe-mart.webp",
    gallery: [
      "/assets/luxe-mart.webp",
      "/assets/skyelite.webp",
      "/assets/movie.webp",
    ],
    tags: ["Webflow", "CMS", "Brand Voice"],
    liveUrl: "https://muhammads-awesome-site-de3b47.webflow.io/",
  },
  {
    slug: "dovehero",
    title: "DoveHero CRM",
    type: "CRM / AUTOMATION",
    year: "2025",
    category: "Webflow",
    description:
      "A Webflow CRM story for fast-moving teams, connecting lead routing, WhatsApp automation, property portals, and AI-assisted workflows.",
    longDescription:
      "DoveHero turns scattered sales tools into one clear operating system. The build explains the cost of slow lead response, shows how integrations work, and positions the CRM around speed, visibility, and mobile access.",
    image: "/assets/urban-vista.webp",
    gallery: [
      "/assets/urban-vista.webp",
      "/assets/resume-ai.webp",
      "/assets/study-tracker.webp",
    ],
    tags: ["Webflow", "CRM", "Automation"],
    liveUrl: "https://dovehero-909c5f.webflow.io/home-page",
  },
];

export const featuredProjects = projects.slice(0, 6);
export const webflowProjects = projects.filter(
  (project) => project.category === "Webflow",
);
export const vercelProjects = projects.filter(
  (project) => project.category === "Vercel",
);
