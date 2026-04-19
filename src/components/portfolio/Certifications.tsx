import { Award, Upload } from "lucide-react";

const certs = [
  { title: "Certified Security Analyst", issuer: "Cybersecurity Body", year: "2024" },
  { title: "Vulnerability Assessment Fundamentals", issuer: "Issuing Org", year: "2024" },
  { title: "Full Stack Web Development", issuer: "Bootcamp / Institution", year: "2023" },
  { title: "Python for Backend Development", issuer: "Online Academy", year: "2023" },
  { title: "Social Media Marketing", issuer: "Marketing Institute", year: "2023" },
  { title: "Business Information Technology", issuer: "University", year: "2022" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Award size={16} /> Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Continuous <span className="gradient-text">learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified credentials across development, security, and marketing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="relative p-6 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-smooth overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
                    <Award size={22} />
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-muted text-primary">{c.year}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.issuer}</p>
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-70 hover:opacity-100 transition-smooth">
                  <Upload size={12} /> Upload certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 italic">
          Upload your certificates and I'll display the actual files with downloads.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
