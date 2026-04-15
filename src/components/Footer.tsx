import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { label: "hii@shroom4you.com", href: "mailto:hii@shroom4you.com" },
    { label: "(+48) 510 866 906", href: "tel:+48510866906" },
    { label: "IG: @shroom.drink", href: "https://instagram.com/shroom.drink" },
    { label: "FB: fb.com/shroom4you", href: "https://facebook.com/shroom4you" },
    { label: "shroom4you.com", href: "https://shroom4you.com" },
  ];

  const bandColors = [
    "bg-shroom-green",
    "bg-shroom-sage",
    "bg-shroom-peach",
    "bg-shroom-blush",
    "bg-shroom-sky",
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="bg-shroom-sage flex items-center p-10 md:p-14 min-h-[300px]">
          <div>
            <p className="font-display text-lg font-bold text-foreground mb-4">:shroom</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Thank you!</h3>
          </div>
        </div>

        {/* Right - contact bands */}
        <div className="flex flex-col">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex-1 flex items-center px-6 md:px-10 ${bandColors[i]} border-b border-foreground/5 hover:opacity-80 transition-opacity min-h-[60px]`}
            >
              <span className="font-display text-base md:text-xl font-bold text-foreground">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-4">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-background/40">
            © {currentYear} shroom. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-1.5 hover:bg-background/10 transition-colors">
                <Icon className="w-3.5 h-3.5 text-background/50" />
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <Link to="/blog" className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">Blog</Link>
            <a href="#" className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">Regulations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
