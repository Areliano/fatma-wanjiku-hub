import { useState } from "react";
import { ExternalLink, Github, FolderOpen, TrendingUp, Users, BarChart3 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "web" | "graphics" | "github";
  link?: string;
  github?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "School Management Platform",
    description: "Full-stack web app for managing students, fees, and academic records with role-based access.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    category: "web",
    link: "#",
    github: "#",
    gradient: "from-primary to-primary-glow",
  },
  {
    title: "E-commerce Storefront",
    description: "Modern responsive storefront with cart, checkout flow and admin dashboard.",
    tech: ["React", "Django REST", "Stripe"],
    category: "web",
    link: "#",
    gradient: "from-accent to-primary",
  },
  {
    title: "Brand Identity — Appleton Schools",
    description: "Logo refresh, social templates, and a complete visual content system.",
    tech: ["Figma", "Illustrator", "Photoshop"],
    category: "graphics",
    gradient: "from-primary-glow to-accent",
  },
  {
    title: "Marketing Poster Series",
    description: "Editorial posters for campaigns, events and product launches.",
    tech: ["Illustrator", "Photoshop"],
    category: "graphics",
    gradient: "from-primary to-accent",
  },
  {
    title: "Vulnerability Scanner CLI",
    description: "Python CLI tool that performs basic web vulnerability checks and reports findings.",
    tech: ["Python", "Requests", "Click"],
    category: "github",
    github: "#",
    gradient: "from-secondary to-primary",
  },
  {
    title: "REST API Boilerplate",
    description: "Production-ready FastAPI starter with auth, migrations, and CI workflows.",
    tech: ["FastAPI", "Alembic", "Docker"],
    category: "github",
    github: "#",
    gradient: "from-accent to-secondary",
  },
];

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "graphics", label: "Graphic Design" },
  { id: "github", label: "GitHub Projects" },
] as const;

const caseStudy = {
  title: "Appleton Schools — Social Media Growth",
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
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <FolderOpen size={16} /> Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web apps, brand identities, and open-source tooling — placeholders shown until uploads are provided.
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
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                  : "bg-card text-foreground/70 hover:text-primary border border-border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((p, i) => (
            <article
              key={i}
              className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-smooth border border-border/50 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center text-primary-foreground/90 font-black text-5xl">
                  {p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
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
                    <a href={p.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-smooth">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-foreground hover:gap-2.5 transition-smooth ml-auto">
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Case Study */}
        <div className="rounded-[2rem] bg-card shadow-elegant border border-border/50 overflow-hidden">
          <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12">
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
                    <p className="text-xl font-black gradient-text">{r.value}</p>
                    <p className="text-[11px] font-semibold text-muted-foreground mt-1 leading-tight">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Sample post links / screenshots will appear here once you upload them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
