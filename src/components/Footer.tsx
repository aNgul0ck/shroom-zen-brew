import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quickLinks: [
      { name: "About shroom", href: "#o-nas" },
      { name: "Shroom for B2B", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Where to buy?", href: "#" },
      { name: "Contact", href: "#kontakt" },
      { name: "Blog", href: "/blog" },
    ],
    shop: [
      { name: "Functional drinks", href: "#produkty" },
      { name: "Shroom Livin'", href: "#" },
      { name: "Clothing", href: "#" },
      { name: "Daily rituals", href: "#" },
      { name: "Shroomscriptions", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
    regulations: [
      { name: "My account", href: "#" },
      { name: "Subscriptions portal", href: "#" },
      { name: "Register", href: "#" },
      { name: "Wishlist", href: "#" },
      { name: "Store regulations", href: "#" },
      { name: "Refunds policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-bold mb-4">shroom</p>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Shroom — wellness drink with medicinal mushrooms. Functional drink with 
              adaptogens and botanicals in delicious, fruity drinks. Not kombucha, not beer.
            </p>
            <p className="font-body text-xs text-primary-foreground/50 mt-4">
              VATEU 7162830959
            </p>
            <a href="mailto:hii@shroom4you.com" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground">
              hii@shroom4you.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground/50 text-sm uppercase tracking-wider mb-4">
              Quick links
            </h4>
            <ul className="space-y-2">
              {links.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground/50 text-sm uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {links.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulations */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground/50 text-sm uppercase tracking-wider mb-4">
              Regulations
            </h4>
            <ul className="space-y-2">
              {links.regulations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest articles placeholder */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground/50 text-sm uppercase tracking-wider mb-4">
              Latest articles
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Read our blog →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-sm text-primary-foreground/50 text-center mb-6">
            Let's connect!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Icon className="w-5 h-5 text-primary-foreground/70" />
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {currentYear} shroom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
