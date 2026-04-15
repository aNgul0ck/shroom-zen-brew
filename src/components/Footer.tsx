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
    "bg-[hsl(150,50%,80%)]",
    "bg-[hsl(150,45%,83%)]",
    "bg-[hsl(150,40%,86%)]",
    "bg-[hsl(150,35%,89%)]",
    "bg-[hsl(150,30%,92%)]",
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - Thank you */}
        <div className="bg-[hsl(100,35%,83%)] flex items-center p-12 md:p-16 min-h-[400px]">
          <div>
            <p className="font-display text-xl font-bold text-foreground mb-8">:shroom</p>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Thank you!
            </h3>
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
              className={`flex-1 flex items-center px-8 md:px-12 ${bandColors[i]} border-b border-foreground/8 hover:opacity-80 transition-opacity`}
            >
              <span className="font-display text-xl md:text-3xl font-bold text-foreground">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-5">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © {currentYear} shroom. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 hover:bg-background/10 transition-colors">
                <Icon className="w-4 h-4 text-background/60" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <Link to="/blog" className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Blog</Link>
            <a href="#" className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-background/40 hover:text-background/70 transition-colors">Regulations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
