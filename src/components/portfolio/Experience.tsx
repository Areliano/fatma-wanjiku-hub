import { Briefcase, Building2 } from "lucide-react";

type Item = {
  role: string;
  org: string;
  duration: string;
  achievements: string[];
};

const experiences: Item[] = [
  {
    role: "Social Media & Marketing Specialist",
    org: "Appleton Schools, Nairobi",
    duration: "November 2025 – Present",
    achievements: [
      "Create and publish content across Instagram, Facebook, TikTok, Google Business, X, LinkedIn and YouTube.",
      "Design, develop and maintain the school's new website; write and publish blog articles.",
      "Edit and produce visual content (images & videos) using Canva, CapCut and Adobe Photoshop.",
      "Generate monthly reports on organic content performance and audience insights.",
      "Plan, organize and execute marketing events, open days and school activations.",
      "Support paid advertising campaigns and contribute to weekly strategy brainstorms.",
      "Track and maintain up-to-date student media consent records.",
    ],
  },
  {
    role: "Back End Developer Intern",
    org: "Isentry Technologies (Remote)",
    duration: "September 2025 – November 2025",
    achievements: [
      "Contributed to backend development of TeamIQ, an intern performance and growth tracking platform.",
      "Built and maintained RESTful APIs using FastAPI and SQLAlchemy.",
      "Implemented user authentication and role-based access control.",
      "Designed and optimized relational database models for users, projects, tasks, and skills.",
      "Supported integrations with external tools such as GitHub and Trello.",
      "Collaborated with cross-functional teams on debugging and system testing.",
    ],
  },
  {
    role: "ICT Attachée",
    org: "Postal Corporation of Kenya (PCK), Nairobi",
    duration: "May 2024 – July 2024",
    achievements: [
      "Provided frontline IT support, resolving hardware, software and connectivity issues to minimize downtime.",
      "Troubleshot system and network-related problems across departments.",
      "Installed, configured and maintained computers, printers and other ICT equipment.",
      "Managed IT asset inventory and digital records, ensuring accurate documentation.",
      "Performed routine system maintenance and supported telephony infrastructure.",
      "Assisted staff in adopting digital tools, improving document handling and communication.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Briefcase size={16} /> Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            My <span className="text-primary">professional journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Roles across IT support, backend engineering, and digital marketing.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 z-10 shadow-elegant" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-smooth border border-border/50 animate-fade-in-up">
                      <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent mb-3">
                        {exp.duration}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="flex items-center gap-2 text-primary font-semibold mb-4">
                        <Building2 size={16} /> {exp.org}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex gap-2 text-sm text-foreground/75 leading-relaxed">
                            <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
