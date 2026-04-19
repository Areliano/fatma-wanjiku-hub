import { FileText, Download, Eye } from "lucide-react";

const CV = () => {
  return (
    <section id="cv" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
              <FileText size={16} /> Curriculum Vitae
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              View or download my <span className="gradient-text">CV</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A detailed summary of my education, experience, technical stack, certifications, and professional achievements.
            </p>
            <div className="flex flex-wrap gap-3">
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

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-accent rounded-3xl blur-3xl opacity-20" />
            <div className="relative aspect-[3/4] rounded-3xl bg-card shadow-elegant border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary" />
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-black text-lg">
                    F
                  </div>
                  <div>
                    <p className="font-black text-lg">Fatma W. Hussein</p>
                    <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  {["Profile", "Experience", "Education", "Skills", "Certifications", "Projects"].map((s, i) => (
                    <div key={s}>
                      <p className="text-xs font-bold text-primary mb-1.5">{s.toUpperCase()}</p>
                      <div className="h-1.5 rounded-full bg-muted mb-1" style={{ width: `${90 - i * 7}%` }} />
                      <div className="h-1.5 rounded-full bg-muted/70" style={{ width: `${75 - i * 5}%` }} />
                    </div>
                  ))}
                </div>
                <div className="text-center text-xs text-muted-foreground mt-6 pt-4 border-t border-border">
                  CV Preview · Upload to replace
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
