import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Napoje", href: "#produkty" },
    { name: "O nas", href: "#o-nas" },
    { name: "Adaptogeny", href: "#adaptogeny" },
    { name: "Brief", href: "/brief" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold text-primary tracking-tight">
            shroom
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#produkty"
              className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-soft"
            >
              <ShoppingBag className="w-4 h-4" />
              Zamów teraz
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-body text-lg font-medium text-foreground/70 hover:text-primary transition-colors duration-200 py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-body text-lg font-medium text-foreground/70 hover:text-primary transition-colors duration-200 py-2"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="#produkty"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold text-sm mt-4"
              >
                <ShoppingBag className="w-4 h-4" />
                Zamów teraz
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
