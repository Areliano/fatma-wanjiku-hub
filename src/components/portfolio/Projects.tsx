import { useState } from "react";
import { ExternalLink, Github, FolderOpen, TrendingUp, Users, BarChart3, Maximize2 } from "lucide-react";
import Lightbox from "./Lightbox";
import { graphics } from "@/data/graphics";
import clipsAndStylesImg from "@/assets/projects/clips-and-styles.png";
import halimaHusseinImg from "@/assets/projects/halima-hussein.png";
import weatherAppImg from "@/assets/projects/weather-app.png";
import eventManagementImg from "@/assets/projects/event-management.png";
import safetalkKenyaImg from "@/assets/projects/safetalk-kenya.png";
import ujamaaFlowImg from "@/assets/projects/ujamaaflow.png";
import appletonSchoolImg from "@/assets/projects/appleton-school.png";
import usaniiMasharikiImg from "@/assets/projects/usanii-mashariki.png";
import barakaRestaurantImg from "@/assets/projects/baraka-restaurant.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "web" | "github";
  link?: string;
  github?: string;
  gradient: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Clips & Styles",
    description:
      "A beauty-tech platform where clients can discover and book services from their favourite beauty professionals. Business owners can join the waitlist to be notified the moment the app launches.",
    tech: ["React", "Tailwind CSS"],
    category: "web",
    link: "https://clips-and-styles-website-ljo2n602y.vercel.app/",
    github: "https://github.com/Areliano/Clips_and_Styles-website.git",
    gradient: "from-primary to-primary-glow",
    image: clipsAndStylesImg,
  },
  {
    title: "Halima Hussein | Makeup Artist Portfolio",
    description:
      "A personal portfolio website built for a professional makeup artist, showcasing her featured work, service highlights, bio and contact details in a clean, elegant layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "web",
    link: "https://areliano.github.io/halima-hussein/",
    github: "https://github.com/Areliano/halima-hussein.git",
    gradient: "from-accent to-primary",
    image: halimaHusseinImg,
  },
  {
    title: "Simple Weather App",
    description:
      "A lightweight weather application that lets users search any city and instantly view its current temperature and conditions, powered by a live weather API.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    category: "web",
    link: "https://areliano.github.io/simple-weather-app/",
    github: "https://github.com/Areliano/simple-weather-app.git",
    gradient: "from-primary-glow to-accent",
    image: weatherAppImg,
  },
  {
    title: "SafeTalk Kenya",
    description:
      "A multilingual, anonymous web platform that gives Kenyan high school students a safe way to report issues like bullying, grooming and harassment, and chat with trained counselors. No login or phone number required. Students receive a secure token to resume their conversations whenever they regain access to a device.",
    tech: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    category: "web",
    link: "https://safetalk-kenya.lovable.app/",
    github: "https://github.com/Areliano/safetalk-kenya.git",
    gradient: "from-primary to-accent",
    image: safetalkKenyaImg,
  },
  {
    title: "UjamaaFlow",
    description:
      "A community-driven platform that connects people in need of essentials like food, clothes and shoes with those ready to help, built to mobilise support quickly during emergencies and crises.",
    tech: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    category: "web",
    link: "https://ujamaaflow.lovable.app",
    github: "https://github.com/Areliano/ujamaaflow-0f528308.git",
    gradient: "from-accent to-primary-glow",
    image: ujamaaFlowImg,
  },
  {
    title: "Appleton Schools Website",
    description:
      "An official school website for Appleton Schools featuring campus information, academics, admissions, a gallery and blog. Includes a 'Book a Tour' form for parents, plus integrations with WhatsApp, email and Google Sheets to capture and route enquiries in real time.",
    tech: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    category: "web",
    link: "https://www.appletonschool.ac.ke/",
    gradient: "from-primary-glow to-primary",
    image: appletonSchoolImg,
  },
  {
    title: "Usanii Mashariki Art Gallery",
    description:
      "A full-stack art gallery management system for Usanii Mashariki (UM). Visitors can browse artworks and artists, view exhibitions, book exhibition slots, and contact gallery admins via email. Includes a shopping cart, order summary and admin reports for managing the gallery end-to-end.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "github",
    github: "https://github.com/Areliano/usanii_art_gallery.git",
    gradient: "from-primary to-accent",
    image: usaniiMasharikiImg,
  },
  {
    title: "Baraka Rescue Restaurant",
    description:
      "A Django-based restaurant management system for Baraka Rescue Restaurant. Helps owners and managers handle menus, customer records, reservations, orders and reports — with a customer-facing site for browsing specialties, placing orders and booking tables.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    category: "github",
    github: "https://github.com/Areliano/restaurant_project.git",
    gradient: "from-accent to-primary",
    image: barakaRestaurantImg,
  },
  {
    title: "Event Management System API",
    description:
      "A backend API for managing events end-to-end — users can register and log in, organizers can create, update and delete events, and attendees can RSVP with approval workflows, attendee limits, pagination, and filtering by date, location or keyword. Secured with JWT authentication and documented via Swagger UI.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Swagger"],
    category: "github",
    github: "https://github.com/Areliano/event_management.git",
    gradient: "from-accent to-primary-glow",
    image: eventManagementImg,
  },
];

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "graphics", label: "Graphic Design" },
  { id: "github", label: "GitHub Projects" },
] as const;

const caseStudy = {
  title: "Appleton Schools | Social Media Growth",
  platforms: ["Facebook", "Instagram", "TikTok"],
  role: "Lead Social Media Manager & Content Strategist",
  strategy: [
    "Defined brand voice and built a consistent visual content system.",
    "Implemented a weekly content calendar with reels, posts and stories.",
    "Engaged community through interactive polls, Q&As, and parent stories.",
  ],
  results: [
    { icon: TrendingUp, label: "Engagement", value: "+180%" },
    { icon: Users, label: "Audience growth", value: "+5K" },
    { icon: BarChart3, label: "Reach (monthly)", value: "200K+" },
  ],
};

const Projects = () => {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showGraphics = active === "all" || active === "graphics";
  const showProjects = active === "all" || active === "web" || active === "github";
  const filteredProjects = projects.filter(
    (p) => active === "all" || p.category === active,
  );

  const lightboxImages = graphics.map((g) => ({
    src: g.image,
    title: g.title,
    description: `${g.client} · ${g.category}`,
  }));

  return (
    <section id="projects" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <FolderOpen size={16} /> Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Selected <span className="text-primary">work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web apps, brand identities, and open-source tooling. Click any design to view full-size.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth ${
                active === t.id
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-card text-foreground/70 hover:text-primary border border-border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (Web + GitHub, ordered) */}
        {showProjects && filteredProjects.length > 0 && (
          <div className="mb-16 space-y-12">
            {(["web", "github"] as const).map((cat) => {
              const items = filteredProjects.filter((p) => p.category === cat);
              if (items.length === 0) return null;
              const heading =
                cat === "web" ? (
                  <>
                    Web <span className="text-primary">development</span>
                  </>
                ) : (
                  <>
                    GitHub <span className="text-primary">projects</span>
                  </>
                );
              return (
                <div key={cat}>
                  {active === "all" && (
                    <h3 className="text-2xl font-black mb-6">{heading}</h3>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((p, i) => (
                      <article
                        key={p.title}
                        className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-smooth border border-border/50 animate-fade-in"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div className="relative aspect-[16/10] bg-primary overflow-hidden">
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={`${p.title} preview`}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-smooth duration-500"
                            />
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                              <div className="absolute inset-0 grid place-items-center text-primary-foreground/90 font-black text-5xl">
                                {p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                              </div>
                            </>
                          )}
                          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-bold text-foreground capitalize">
                            {p.category === "github" ? "GitHub" : p.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">{p.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {p.tech.map((t) => (
                              <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-primary font-semibold">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            {p.link && (
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-smooth"
                              >
                                <ExternalLink size={14} /> Live
                              </a>
                            )}
                            {p.github && (
                              <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-foreground hover:gap-2.5 transition-smooth ml-auto"
                              >
                                <Github size={14} /> Code
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Graphics Gallery */}
        {showGraphics && graphics.length > 0 && (
          <div className="mb-20">
            {active === "all" && (
              <h3 className="text-2xl font-black mb-6">
                Graphic <span className="text-primary">design</span>
              </h3>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {graphics.map((g, i) => (
                <button
                  key={g.title}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-smooth border border-border/50 animate-fade-in text-left"
                  style={{ animationDelay: `${i * 0.04}s` }}
                  aria-label={`Open ${g.title}`}
                >
                  <img
                    src={g.image}
                    alt={`${g.title} | designed for ${g.client}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-secondary/80 opacity-60 group-hover:opacity-90 transition-smooth" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-card/95 backdrop-blur-sm text-primary">
                    {g.category}
                  </span>
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/95 backdrop-blur-sm grid place-items-center text-primary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-smooth">
                    <Maximize2 size={14} />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground translate-y-2 group-hover:translate-y-0 transition-smooth">
                    <h4 className="font-bold text-sm leading-tight mb-0.5 line-clamp-2">{g.title}</h4>
                    <p className="text-[11px] opacity-80 font-medium">{g.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Case Study */}
        <div className="rounded-[2rem] bg-card shadow-elegant border border-border/50 overflow-hidden">
          <div className="bg-primary text-primary-foreground p-8 md:p-12">
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-primary-foreground/20 mb-3">
              Case Study · Social Media
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-2">{caseStudy.title}</h3>
            <p className="opacity-90">Role: {caseStudy.role}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {caseStudy.platforms.map((p) => (
                <span key={p} className="text-xs px-3 py-1.5 rounded-full bg-primary-foreground/15 font-semibold">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Strategy</h4>
              <ul className="space-y-2.5">
                {caseStudy.strategy.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Results</h4>
              <div className="grid grid-cols-3 gap-3">
                {caseStudy.results.map((r) => (
                  <div key={r.label} className="p-4 rounded-2xl bg-muted text-center">
                    <r.icon className="mx-auto mb-1 text-primary" size={20} />
                    <p className="text-xl font-black text-primary">{r.value}</p>
                    <p className="text-[11px] font-semibold text-muted-foreground mt-1 leading-tight">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i === null ? null : (i - 1 + lightboxImages.length) % lightboxImages.length))
          }
          onNext={() =>
            setLightboxIndex((i) => (i === null ? null : (i + 1) % lightboxImages.length))
          }
        />
      )}
    </section>
  );
};

export default Projects;
