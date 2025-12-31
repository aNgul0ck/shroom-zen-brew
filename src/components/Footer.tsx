import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    produkty: [
      { name: "Shroom Power", href: "#produkty" },
      { name: "Shroom Relax", href: "#produkty" },
      { name: "Diva Social Elixir", href: "#produkty" },
    ],
    informacje: [
      { name: "Blog", href: "/blog" },
      { name: "O nas", href: "#o-nas" },
      { name: "Kontakt", href: "#kontakt" },
    ],
    legal: [
      { name: "Polityka prywatności", href: "#" },
      { name: "Regulamin", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-2xl font-bold tracking-tight">
              shroom
            </a>
            <p className="font-body text-sm text-primary-foreground/70 mt-4 max-w-xs">
              Napoje funkcjonalne z adaptogenami. Pierwszy taki produkt w Polsce i Europie.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:kontakt@shroom4you.com"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-shroom-sage mb-4">Napoje</h4>
            <ul className="space-y-3">
              {links.produkty.map((link) => (
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

          {/* Info */}
          <div>
            <h4 className="font-display font-bold text-shroom-sage mb-4">Informacje</h4>
            <ul className="space-y-3">
              {links.informacje.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-shroom-sage mb-4">Prawne</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/60">
            © {currentYear} Shroom. Wszystkie prawa zastrzeżone.
          </p>
          <p className="font-body text-sm text-primary-foreground/60">
            Made with 🍄 in Poland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
