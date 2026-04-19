import { Code, Server, Layout, Palette, Megaphone, TrendingUp, ShieldCheck, Headphones, Wrench } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Web Development", desc: "Pixel-perfect, responsive interfaces with React and Tailwind CSS." },
  { icon: Server, title: "Backend Web Development", desc: "Robust APIs and services with Python, FastAPI, Flask, and Django REST." },
  { icon: Code, title: "UI/UX Design", desc: "Intuitive, user-centered interfaces designed for clarity and conversion." },
  { icon: Palette, title: "Graphics Design", desc: "Brand identities, posters, and digital assets with editorial polish." },
  { icon: Megaphone, title: "Social Media Management", desc: "Content strategy, calendars, and community engagement that grow audiences." },
  { icon: TrendingUp, title: "Social Media Marketing", desc: "Paid and organic campaigns optimized for reach, leads, and conversions." },
  { icon: ShieldCheck, title: "Cybersecurity Audits", desc: "Vulnerability assessments and security fundamentals for safer products." },
  { icon: Headphones, title: "IT Support", desc: "Hands-on technical support, troubleshooting, and systems maintenance." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Wrench size={16} /> Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What <span className="gradient-text">I do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight focused services across development, design, marketing, and security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group p-6 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-bounce animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-bounce shadow-glow">
                <s.icon size={26} />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
