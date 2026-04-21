import { FileText, Download, Eye, Briefcase, GraduationCap, Wrench, Award, Languages, MapPin, Mail, Phone } from "lucide-react";

const experience = [
  {
    role: "Social Media & Marketing Intern",
    company: "Appleton Schools, Nairobi",
    period: "November 2025 – Present",
    bullets: [
      "Create and publish content across Instagram, Facebook, TikTok, Google Business, X, LinkedIn and YouTube.",
      "Designed, developed and maintain the school's new website, including blog articles and ongoing content updates.",
      "Edit visual content (images & videos) using Canva, CapCut and Adobe Photoshop.",
      "Generate monthly reports on organic content performance and audience growth.",
      "Plan and execute marketing events, open days and school activations; support paid ad campaigns and weekly strategy meetings.",
    ],
  },
  {
    role: "Back End Developer Intern",
    company: "Isentry Technologies (Remote)",
    period: "September 2025 – November 2025",
    bullets: [
      "Contributed to backend development of TeamIQ, an intern performance and growth tracking platform.",
      "Built and maintained RESTful APIs using FastAPI and SQLAlchemy.",
      "Implemented user authentication and role-based access control.",
      "Designed and optimized relational database models for users, projects, tasks and skills.",
      "Supported integrations with external tools such as GitHub and Trello.",
    ],
  },
  {
    role: "ICT Attachée",
    company: "Postal Corporation of Kenya (PCK), Nairobi",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Provided frontline IT support, resolving hardware, software and connectivity issues to minimize downtime.",
      "Installed, configured and maintained computers, printers and other ICT equipment.",
      "Managed IT asset inventory and digital records, ensuring accurate documentation.",
      "Performed routine system maintenance and supported telephony infrastructure.",
      "Assisted staff in adopting digital tools, improving efficiency in document handling and communication.",
    ],
  },
];

const skillGroups = [
  { label: "IT Support & Networking", items: ["Hardware/software troubleshooting", "System maintenance", "Network protocols", "Basic system administration"] },
  { label: "Cybersecurity", items: ["Vulnerability scanning", "Threat analysis", "Network security fundamentals"] },
  { label: "Programming & Backend", items: ["Python", "FastAPI", "Flask", "Django", "SQLAlchemy"] },
  { label: "Tools & Documentation", items: ["Microsoft Office", "Google Workspace", "WordPress", "Canva"] },
];

const competencies = [
  "Technical Troubleshooting & Support",
  "Analytical Thinking & Problem Solving",
  "Systems Documentation & Record Keeping",
  "Teamwork & Collaboration",
  "Clear Verbal & Written Communication",
  "Planning, Organization & Time Management",
  "Accountability & Proactiveness",
  "Adaptability & Willingness to Learn",
];

const CV = () => {
  return (
    <section id="cv" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <FileText size={16} /> Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            View or download my <span className="gradient-text">CV</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            A detailed summary of my education, experience, technical stack and certifications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/Fatma_Hussein_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-bounce"
            >
              <Eye size={18} /> View CV
            </a>
            <a
              href="/Fatma_Hussein_CV.pdf"
              download="Fatma_Hussein_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-smooth"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>
        </div>

        {/* CV Card */}
        <div className="rounded-[2rem] bg-card shadow-elegant border border-border/50 overflow-hidden">
          {/* Top banner */}
          <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-1">Fatma Wanjiku Hussein</h3>
                <p className="opacity-90 font-medium">
                 IT Graduate · Backend Developer · Social Media & Marketing Intern
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm opacity-95">
                <span className="inline-flex items-center gap-2"><MapPin size={14} /> Nairobi, Kenya · Open to relocation</span>
                <span className="inline-flex items-center gap-2"><Phone size={14} /> +254 792 535 807</span>
                <span className="inline-flex items-center gap-2"><Mail size={14} /> fatmahussein355@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-primary mb-2 uppercase">Professional Summary</h4>
              <p className="text-foreground/80 leading-relaxed">
                Motivated Information Technology graduate with a Bachelor's degree in Business Information Technology and
                hands-on experience in IT Support, Social Media Marketing, Web Development and cybersecurity fundamentals.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <Briefcase size={18} className="text-primary" /> Work Experience
              </h4>
              <div className="space-y-6">
                {experience.map((e) => (
                  <div key={e.role} className="relative pl-6 border-l-2 border-border">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-primary" />
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                      <p className="font-bold text-foreground">{e.role}</p>
                      <span className="text-xs font-semibold text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{e.company}</p>
                    <ul className="space-y-1.5">
                      {e.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <GraduationCap size={18} className="text-primary" /> Education
              </h4>
              <div className="rounded-2xl bg-muted p-5">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                  <p className="font-bold">Bachelor of Business Information Technology (BBIT)</p>
                  <span className="text-xs font-semibold text-muted-foreground">Aug 2021 – May 2025</span>
                </div>
                <p className="text-sm text-primary font-semibold">Multimedia University of Kenya</p>
                <p className="text-sm text-foreground/70 mt-1">Second Class Honors (Upper Division)</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <Wrench size={18} className="text-primary" /> Technical Skills
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {skillGroups.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-border/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{g.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground/80 font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <Award size={18} className="text-primary" /> Core Competencies
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {competencies.map((c) => (
                  <div key={c} className="flex gap-2 items-start text-sm text-foreground/80">
                    <span className="text-accent mt-1">●</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <Languages size={18} className="text-primary" /> Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-muted text-foreground font-semibold text-sm">
                  English: <span className="text-primary">C2 Proficient</span>
                </span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground font-semibold text-sm">
                  Swahili: <span className="text-primary">C2 Proficient</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">Referees available upon request.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
