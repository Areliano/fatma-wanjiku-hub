import { Briefcase, Building2 } from "lucide-react";

type Item = {
  role: string;
  org: string;
  duration: string;
  achievements: string[];
};

const experiences: Item[] = [
  {
    role: "Communications Strategist",
    org: "Appleton Schools, Nairobi",
    duration: "December 2025 – Present",
    achievements: [
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
    org: "Isentry Technologies (Remote)",
    duration: "September 2025 – November 2025",
    achievements: [
      "Developed and maintained RESTful APIs using Python, FastAPI and SQLAlchemy for TeamIQ, an intern performance and growth tracking platform.",
      "Implemented authentication systems and role-based access controls to support secure application functionality.",
      "Assisted in database design, testing, debugging and deployment activities.",
      "Prepared technical documentation and contributed to collaborative development processes within a remote team.",
      "Worked collaboratively with team members to troubleshoot issues and support project delivery.",
    ],
  },
  {
    role: "ICT Support Intern",
    org: "Postal Corporation of Kenya, Nairobi",
    duration: "May 2024 – July 2024",
    achievements: [
      "Provided frontline technical support for hardware, software and network-related issues across departments.",
      "Assisted staff with digital tools, computer systems and communication technologies.",
      "Maintained ICT inventories and technical documentation to support effective resource management.",
      "Assisted with system maintenance, equipment configuration and troubleshooting.",
      "Supported network connectivity and day-to-day technology operations.",
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
