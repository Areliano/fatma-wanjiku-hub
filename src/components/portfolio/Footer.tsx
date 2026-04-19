import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 px-6 md:px-12">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-black">F</span>
          <span className="font-bold">Fatma Wanjiku Hussein</span>
        </div>
        <p className="text-secondary-foreground/70 flex items-center gap-1.5">
          Built with <Heart size={14} className="text-primary fill-primary" /> in Nairobi · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
