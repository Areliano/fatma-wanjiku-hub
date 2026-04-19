import { Briefcase, Building2 } from "lucide-react";

type Item = {
  role: string;
  org: string;
  duration: string;
  achievements: string[];
};

const experiences: Item[] = [
  {
    role: "Digital Marketing & Content Strategist",
    org: "Appleton Schools",
    duration: "Recent",
    achievements: [
      "Developed and executed a content strategy that grew social media engagement and reach.",
      "Managed multi-platform campaigns across Facebook, Instagram, and TikTok.",
      "Produced graphics and short-form video content aligned with the school's brand voice.",
    ],
  },
  {
    role: "Backend Developer",
    org: "Isentry Technologies",
    duration: "Previous",
    achievements: [
      "Built and maintained backend services using Python (Flask / FastAPI / Django REST).",
      "Designed RESTful APIs and database schemas for client-facing applications.",
      "Collaborated with frontend and product teams to deliver scalable features.",
    ],
  },
  {
    role: "IT Support",
    org: "Postal Corporation of Kenya",
    duration: "Earlier",
    achievements: [
      "Provided technical support and troubleshooting across multiple departments.",
      "Maintained hardware, software, and network infrastructure.",
      "Built early hands-on experience in systems administration and user support.",
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
            My <span className="gradient-text">professional journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Roles across IT support, backend engineering, and digital marketing.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

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
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background md:-translate-x-1/2 z-10 shadow-glow" />

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

        <p className="text-center text-sm text-muted-foreground mt-12 italic">
          Upload your CV and I'll populate exact dates and additional roles.
        </p>
      </div>
    </section>
  );
};

export default Experience;
