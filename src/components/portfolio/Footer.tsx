import { Heart, Linkedin, Github, Instagram } from "lucide-react";

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/fatma-h-7a584421a", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/Areliano", label: "GitHub" },
  { Icon: Instagram, href: "https://www.instagram.com/_.african_wanjiku/", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 px-6 md:px-12">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-black">F</span>
          <span className="font-bold">Fatma Wanjiku Hussein</span>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg bg-secondary-foreground/10 grid place-items-center hover:bg-secondary-foreground/20 transition-smooth"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-secondary-foreground/70 flex items-center gap-1.5">
          Built with <Heart size={14} className="text-primary fill-primary" /> in Nairobi · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
