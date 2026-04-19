import { Award, Eye, Download } from "lucide-react";
import googleIt from "@/assets/certs/google-it-support.jpg";
import tech4dev from "@/assets/certs/tech4dev.jpg";
import emobilis from "@/assets/certs/emobilis.jpg";
import lita from "@/assets/certs/lita.jpg";
import googleCyber from "@/assets/certs/google-cybersecurity.png";
import internetSociety from "@/assets/certs/internet-society.jpg";
import csaPython from "@/assets/certs/csa-python.jpg";
import cybershujaa from "@/assets/certs/cybershujaa.jpg";
import dsaGraphics from "@/assets/certs/dsa-graphics-design.jpg";

const certs = [
  { title: "Google IT Support Certificate", issuer: "Coursera", year: "2022", image: googleIt },
  { title: "Web Development", issuer: "Tech4Dev", year: "2024", image: tech4dev },
  { title: "Full Stack Web Development", issuer: "eMobilis Technical Training Institute", year: "2024", image: emobilis },
  { title: "LITA Cybersecurity Training", issuer: "Ladies in Tech Association", year: "2024", image: lita },
  { title: "Google Cybersecurity Specialization", issuer: "Coursera", year: "2025", image: googleCyber },
  { title: "Fundamentals of Designing and Deploying Networks", issuer: "Internet Society Foundation", year: "2025", image: internetSociety },
  { title: "Python for Software Engineering", issuer: "Computer Science Academy Africa", year: "2025", image: csaPython },
  { title: "Security Analyst Training", issuer: "CyberShujaa", year: "2025", image: cybershujaa },
  { title: "Graphics Design", issuer: "Digital Skillup Africa", year: "2025", image: dsaGraphics },
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
            Verified credentials across development, cybersecurity, and networking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="relative rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-smooth overflow-hidden group animate-fade-in flex flex-col"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <a
                href={c.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] overflow-hidden bg-muted"
              >
                <img
                  src={c.image}
                  alt={`${c.title} certificate from ${c.issuer}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth grid place-items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/95 text-primary text-xs font-semibold shadow-elegant">
                    <Eye size={14} /> View full size
                  </span>
                </div>
              </a>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
                    <Award size={18} />
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-muted text-primary">{c.year}</span>
                </div>
                <h3 className="font-bold text-base leading-snug mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{c.issuer}</p>
                <div className="flex gap-2">
                  <a
                    href={c.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-muted hover:bg-muted/70 text-xs font-semibold text-primary transition-smooth"
                  >
                    <Eye size={12} /> View
                  </a>
                  <a
                    href={c.image}
                    download
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold hover:scale-105 transition-bounce"
                  >
                    <Download size={12} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
