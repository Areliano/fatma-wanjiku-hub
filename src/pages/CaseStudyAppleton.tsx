import { ArrowLeft, TrendingUp, Users, MessageCircle, Calendar, Target, Lightbulb, CheckCircle2, ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import appletonSchoolImg from "@/assets/projects/appleton-school.png";

const metrics = [
  { icon: Users, value: "4K → 4.9K", label: "Follower growth", sub: "Across 3 platforms" },
  { icon: TrendingUp, value: "+100%", label: "Engagement rate", sub: "Month-over-month" },
  { icon: MessageCircle, value: "10+", label: "Direct inquiries", sub: "From social channels" },
  { icon: Calendar, value: "Daily", label: "Posting cadence", sub: "Consistent for 5+ months" },
];

const challenges = [
  "Inconsistent posting with no clear schedule",
  "Low engagement across all platforms",
  "No clear content direction for admissions campaigns",
  "Weak connection between school activities and marketing",
];

const strategyPillars = [
  {
    title: "Student-led storytelling",
    desc: "Audience analytics revealed students were the highest-performing content. I built the content calendar around their daily life — Taekwondo training, classroom moments, and school events.",
  },
  {
    title: "School culture & environment",
    desc: "Showcasing the campus, teachers, and atmosphere to give parents a transparent window into what their children would experience.",
  },
  {
    title: "Educational value + co-curricular balance",
    desc: "Positioning Appleton as a place where academic excellence and extracurricular development go hand in hand — directly addressing parent decision-making criteria.",
  },
];

const formatMix = [
  { label: "Carousels", desc: "Multi-image storytelling for events and recaps" },
  { label: "Reels", desc: "Short-form video for high reach and discovery" },
  { label: "Single posts", desc: "Quick wins, announcements, milestones" },
  { label: "Posters", desc: "Branded admissions and event campaigns" },
];

const platforms = [
  { icon: Facebook, name: "Facebook", note: "Primary parent audience" },
  { icon: Instagram, name: "Instagram", note: "Visual storytelling & reels" },
  { icon: Linkedin, name: "LinkedIn", note: "Institutional credibility" },
];

const CaseStudyAppleton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Appleton Schools Case Study | Fatma Hussein";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-card border-b border-border/50">
        <div className="container-narrow flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-smooth"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <Link
            to="/#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-elegant hover:scale-105 transition-bounce"
          >
            Hire Me
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-narrow px-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-primary text-sm font-semibold mb-6 shadow-soft">
            <Target size={16} /> Case Study · Social Media & Marketing
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Growing Appleton Schools' <span className="text-primary">social presence</span> with student-first storytelling
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            How a daily content rhythm, audience-led strategy, and a consistent visual mix took Appleton Schools from
            inconsistent posting to a 100%+ engagement lift in under five months.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <span className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-semibold">
              Role · Social Media & Marketing Intern
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-semibold">
              Nov 2025 – Present
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-semibold">
              Appleton Schools, Nairobi
            </span>
          </div>

          <a
            href="https://www.appletonschool.ac.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl overflow-hidden shadow-elegant border border-border/50 hover:scale-[1.01] transition-smooth"
          >
            <img
              src={appletonSchoolImg}
              alt="Appleton Schools website preview"
              className="w-full h-auto"
            />
          </a>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding">
        <div className="container-narrow px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Results at a <span className="text-primary">glance</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Hard numbers from the first months of taking over Appleton's social channels.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-smooth"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 grid place-items-center text-primary mb-4">
                  <m.icon size={22} />
                </div>
                <p className="text-3xl font-black text-primary mb-1">{m.value}</p>
                <p className="text-sm font-bold text-foreground">{m.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-narrow px-6 grid md:grid-cols-3 gap-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-soft">
              01 · The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Where <span className="text-primary">Appleton</span> was when I joined
            </h2>
          </div>
          <div className="md:col-span-2 space-y-3">
            {challenges.map((c) => (
              <div
                key={c}
                className="p-5 rounded-2xl bg-card border border-border/50 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive grid place-items-center text-xs font-black flex-shrink-0 mt-0.5">
                  !
                </span>
                <p className="text-foreground/80 leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="section-padding">
        <div className="container-narrow px-6">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Lightbulb size={14} /> 02 · The Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Daily posting, anchored in what the <span className="text-primary">audience already loved</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Instead of guessing, I let the analytics lead. Student-focused content was outperforming everything else,
              so I built three content pillars around it and committed to a daily cadence with a varied format mix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {strategyPillars.map((p, i) => (
              <div
                key={p.title}
                className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-smooth"
              >
                <span className="text-5xl font-black text-primary/15 leading-none">0{i + 1}</span>
                <h3 className="text-lg font-bold mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-soft border border-border/50 p-8 md:p-10">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-primary text-primary-foreground grid place-items-center text-xs font-black">
                ★
              </span>
              The format mix
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {formatMix.map((f) => (
                <div key={f.label} className="p-4 rounded-2xl bg-card border border-border/50">
                  <p className="font-bold text-primary mb-1">{f.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-narrow px-6">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-soft">
              03 · Platforms managed
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Three channels, <span className="text-primary">one consistent voice</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center mx-auto mb-4 shadow-elegant">
                  <p.icon size={26} />
                </div>
                <p className="font-bold text-lg mb-1">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-narrow px-6">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-primary text-xs font-bold uppercase tracking-wider mb-4">
              04 · The Outcome
            </span>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              From quiet feed to a <span className="text-primary">discovery engine</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Follower count grew from 4,000 to 4,900+ across managed platforms.",
              "Engagement rate more than doubled — a 100%+ lift compared to baseline.",
              "Generated 10+ direct admissions inquiries through DMs and comments.",
              "Established a repeatable daily posting system the team can sustain long-term.",
              "Built a recognisable visual style tying every post back to the Appleton brand.",
              "Turned student activities (Taekwondo, events, school culture) into the highest-performing content category.",
            ].map((o) => (
              <div key={o} className="p-5 rounded-2xl bg-card border border-border/50 flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="text-foreground/80 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-narrow px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Want results like these for <span className="text-primary">your brand?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I help schools, small businesses, and personal brands build social presences that actually convert.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-bounce"
            >
              Get in touch
            </Link>
            <a
              href="https://www.appletonschool.ac.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-semibold hover:text-primary transition-smooth"
            >
              <ExternalLink size={16} /> Visit Appleton Schools
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyAppleton;