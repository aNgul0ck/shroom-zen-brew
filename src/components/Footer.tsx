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

  return (
    <footer>
      {/* Editorial split footer like reference */}
      <div className="ed-split min-h-[400px]">
        {/* Left - cream with thank you */}
        <div className="ed-bg-cream flex items-center justify-center p-12">
          <div>
            <p className="font-display text-2xl font-bold text-foreground mb-4">:shroom</p>
            <h3 className="ed-heading text-foreground">Thank you!</h3>
          </div>
        </div>

        {/* Right - sky blue banding with contact info */}
        <div className="flex flex-col">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="ed-band-sky flex items-center px-8 py-6 border-b border-foreground/5 hover:bg-shroom-sky/30 transition-colors"
            >
              <span className="font-display text-lg md:text-2xl font-bold text-foreground">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-foreground py-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © {currentYear} shroom. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-2 hover:bg-background/10 rounded-full transition-colors">
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
