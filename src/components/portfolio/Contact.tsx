import { useState } from "react";
import { Phone, Mail, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Send size={16} /> Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to roles, freelance projects, and collaborations — locally and internationally.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Info card */}
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-black mb-2">Contact Information</h3>
              <p className="opacity-80 mb-8 text-sm">Reach me through any of the channels below.</p>

              <div className="space-y-5">
                <a href="tel:+254792535807" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-xl bg-primary-foreground/15 grid place-items-center group-hover:bg-primary-foreground/25 transition-smooth">
                    <Phone size={20} />
                  </span>
                  <div>
                    <p className="text-xs opacity-70 font-semibold">Phone</p>
                    <p className="font-bold">0792 535 807</p>
                  </div>
                </a>
                <a href="mailto:fatmahussein355@gmail.com" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-xl bg-primary-foreground/15 grid place-items-center group-hover:bg-primary-foreground/25 transition-smooth">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-xs opacity-70 font-semibold">Email</p>
                    <p className="font-bold break-all">fatmahussein355@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-primary-foreground/15 grid place-items-center">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs opacity-70 font-semibold">Location</p>
                    <p className="font-bold">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/20">
                <p className="text-xs opacity-70 font-semibold mb-3">FOLLOW ME</p>
                <div className="flex gap-3">
                  {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social"
                      className="w-11 h-11 rounded-xl bg-primary-foreground/15 grid place-items-center hover:bg-primary-foreground/30 hover:scale-110 transition-bounce"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-xs opacity-60 mt-3 italic">Share your social links to wire these up.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-3xl bg-card p-8 md:p-10 shadow-soft border border-border/50">
            <h3 className="text-2xl font-black mb-6">Send a message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-foreground">Message</label>
                <textarea
                  value={form.message}
                  maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none"
                  placeholder="Tell me about your project or opportunity…"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-[1.02] transition-bounce disabled:opacity-60"
              >
                <Send size={18} />
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
