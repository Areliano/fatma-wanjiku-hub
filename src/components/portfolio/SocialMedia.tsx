import { Facebook, Instagram, Linkedin, ExternalLink, Megaphone } from "lucide-react";

const managedPages = [
  {
    brand: "Appleton Schools",
    role: "Social Media & Communications",
    description:
      "Grew engagement by 100%+ and followers from 4K to 4.9K through daily student-first content across Facebook, Instagram and LinkedIn.",
    website: "https://www.appletonschool.ac.ke/",
    socials: [
      { platform: "Facebook", icon: Facebook, url: "https://www.facebook.com/appletonschools" },
      { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/appletonschools" },
      { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/school/appleton-schools" },
    ],
  },
];

const SocialMedia = () => {
  return (
    <section id="social-media" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-semibold mb-4">
            <Megaphone size={16} /> Managed Pages
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Social media <span className="text-primary">I manage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brands and communities I've grown through content strategy and engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managedPages.map((page) => (
            <article
              key={page.brand}
              className="group p-6 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">{page.brand}</h3>
                  <p className="text-sm text-primary font-semibold">{page.role}</p>
                </div>
                <a
                  href={page.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label={`Visit ${page.brand} website`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{page.description}</p>
              <div className="flex flex-wrap gap-2">
                {page.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-muted text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <social.icon size={16} />
                    {social.platform}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
