import { Sparkles } from "lucide-react";

const paragraphs = [
  "I'm a multidisciplinary tech professional who blends development, cybersecurity, and digital marketing to build solutions that are not only functional, but meaningful and impactful.",
  "My journey into tech started with a strong foundation in Business Information Technology, but I quickly realized I wasn't interested in staying in just one lane. I've intentionally grown across multiple areas, including full stack web development, backend systems, cybersecurity, and creative digital marketing, because today's digital world demands professionals who understand both how systems work and how people interact with them.",
  "As a developer, I build scalable and efficient applications using React, Tailwind CSS, Python, FastAPI, Flask, and Django REST. I enjoy creating clean, user-focused interfaces while also engineering the logic and structure behind them.",
  "At the same time, my experience in social media management and marketing has shaped how I think about users, content, and engagement. I don't just build platforms. I think about how they will be used, how they will grow, and how they will deliver value.",
  "My growing interest in cybersecurity adds another layer to my work. With hands-on experience in vulnerability assessment, system security fundamentals, and threat awareness, I approach every project with a mindset of building secure and reliable systems from the ground up.",
  "Professionally, I've worked in environments ranging from IT support at the Postal Corporation of Kenya, to backend development at Isentry Technologies, to digital marketing and content strategy at Appleton Schools. Each experience has strengthened my ability to adapt, solve problems, and contribute meaningfully to both technical and business goals.",
  "What sets me apart is my ability to connect the dots between technology, users, security, and business needs.",
  "I'm continuously learning, evolving, and pushing my limits, with a clear goal: to build solutions that are efficient, secure, user-centered, and impactful.",
];

const stats = [
  { value: "4+", label: "Disciplines" },
  { value: "10+", label: "Technologies" },
  { value: "3+", label: "Companies" },
  { value: "∞", label: "Curiosity" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Sparkles size={16} /> About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Connecting <span className="text-primary">technology, users & business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A multidisciplinary professional building solutions that are functional, secure, and meaningful.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                {i === 0 ? <span className="block text-xl md:text-2xl font-bold text-foreground mb-2">{p}</span> : p}
              </p>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-smooth text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-primary">{s.value}</p>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-elegant">
              <p className="text-sm font-semibold opacity-80 mb-2">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Python", "FastAPI", "Flask", "Django REST", "PostgreSQL"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
