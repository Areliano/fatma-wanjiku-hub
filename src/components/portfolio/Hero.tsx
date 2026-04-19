import { ArrowRight, Download, Mail, Code2, Shield, Megaphone, Palette } from "lucide-react";
import profileImg from "@/assets/profile-fatma.jpg";

const highlights = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Palette, label: "UI/UX & Graphics" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container-narrow relative grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6">
            Hi, I'm <span className="gradient-text">Fatma Wanjiku Hussein</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/70 mb-3 font-semibold">
            Full Stack Developer · Cybersecurity Analyst · Digital Marketer · Designer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I build secure, scalable, and user-focused digital solutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-bounce"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#cv"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-smooth"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl glass-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-accent text-accent-foreground grid place-items-center">
                  <h.icon size={20} />
                </span>
                <span className="text-xs font-semibold text-foreground/80 leading-tight">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 bg-gradient-accent rounded-[2.5rem] blur-2xl opacity-30" />
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elegant border-4 border-card animate-float">
            <img
              src={profileImg}
              alt="Fatma Wanjiku Hussein — Full Stack Developer & Cybersecurity Analyst"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-elegant max-w-[200px]">
            <p className="text-xs text-muted-foreground font-semibold mb-1">Based in</p>
            <p className="font-bold text-foreground">Nairobi, Kenya 🇰🇪</p>
          </div>
          <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-elegant">
            <p className="text-2xl font-black gradient-text">5+</p>
            <p className="text-xs text-muted-foreground font-semibold">Skill domains</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
