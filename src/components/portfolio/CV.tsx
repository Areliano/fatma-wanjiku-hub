import { FileText, Download, Eye, Briefcase, GraduationCap, Wrench, Award, Languages, MapPin, Mail, Phone } from "lucide-react";

const experience = [
  {
    role: "Communications Strategist",
    company: "Appleton Schools, Nairobi",
    period: "December 2025 – Present",
    bullets: [
      "Develop, write and manage digital communications across social media platforms, supporting institutional visibility and stakeholder engagement.",
      "Prepare newsletters, reports, promotional materials, website content and other internal and external communications.",
      "Manage and update the school's website, ensuring content accuracy, accessibility and functionality.",
      "Monitor digital communication performance, analyse engagement metrics and prepare reports to inform communication strategies.",
      "Maintain content calendars and coordinate communication activities across departments to support organisational priorities.",
      "Support the planning and communication of institutional events, admissions campaigns and community engagement initiatives.",
      "Produce and edit photography and video content for institutional communications and digital platforms.",
      "Manage email marketing campaigns using Mailchimp and provide technical assistance to support digital operations.",
    ],
  },
  {
    role: "Back End Developer Intern",
    company: "Isentry Technologies (Remote)",
    period: "September 2025 – November 2025",
    bullets: [
      "Developed and maintained RESTful APIs using Python, FastAPI and SQLAlchemy for TeamIQ, an intern performance and growth tracking platform.",
      "Implemented authentication systems and role-based access controls to support secure application functionality.",
      "Assisted in database design, testing, debugging and deployment activities.",
      "Prepared technical documentation and contributed to collaborative development processes within a remote team.",
      "Worked collaboratively with team members to troubleshoot issues and support project delivery.",
    ],
  },
  {
    role: "ICT Support Intern",
    company: "Postal Corporation of Kenya, Nairobi",
    period: "May 2024 – July 2024",
    bullets: [
      "Provided frontline technical support for hardware, software and network-related issues across departments.",
      "Assisted staff with digital tools, computer systems and communication technologies.",
      "Maintained ICT inventories and technical documentation to support effective resource management.",
      "Assisted with system maintenance, equipment configuration and troubleshooting.",
      "Supported network connectivity and day-to-day technology operations.",
    ],
  },
];

const skillGroups = [
  { label: "Research, Communications & Admin", items: ["Research & information gathering", "Report writing & documentation", "Copywriting, editing & proofreading", "Newsletters & email communications", "Digital content development", "Website administration"] },
  { label: "Office & Productivity", items: ["Microsoft Word", "Excel", "PowerPoint", "Google Workspace", "Trello"] },
  { label: "Communications & Design", items: ["Mailchimp", "Canva", "WordPress", "Social media management", "Content scheduling"] },
  { label: "Software Development", items: ["Python", "FastAPI", "Flask", "Django", "SQLAlchemy", "HTML", "CSS"] },
  { label: "Technical Support", items: ["ICT troubleshooting", "System maintenance", "Network fundamentals"] },
  { label: "Cybersecurity", items: ["Cybersecurity fundamentals", "Vulnerability scanning", "Secure coding principles"] },
];

const certifications = [
  "Google Cybersecurity Professional Certificate – Coursera (2025)",
  "Python for Software Engineering – CSAA (2025)",
  "Fundamentals: Designing & Deploying Computer Networks – Internet Society (2025)",
  "Security Analyst Training – CyberShujaa (2024)",
  "LITA Cybersecurity Training – LITA (2024)",
  "Full Stack Web Development – eMobilis (2024)",
  "Web Development – Tech4Dev (2024)",
  "Google IT Support Professional Certificate – Coursera (2022)",
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
            View or download my <span className="text-primary">CV</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            A detailed summary of my education, experience, technical stack and certifications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/Fatma_Hussein_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-bounce"
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
          <div className="bg-primary text-primary-foreground p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-1">Fatma Wanjiku Hussein</h3>
                <p className="opacity-90 font-medium">
                 BBIT Graduate · Communications Strategist · Backend Developer
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm opacity-95">
                <span className="inline-flex items-center gap-2"><MapPin size={14} /> Nairobi, Kenya</span>
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
                Creative and detail-oriented Business Information Technology (BBIT) graduate with experience in digital
                communications, content creation, social media management, website administration, and community
                engagement. Skilled in translating complex ideas into accessible content, managing digital platforms, and
                collaborating across teams to deliver meaningful communication strategies.
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
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
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

            {/* Certifications & Training */}
            <div>
              <h4 className="flex items-center gap-2 text-lg font-black mb-6">
                <Award size={18} className="text-primary" /> Certifications & Training
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map((c) => (
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
