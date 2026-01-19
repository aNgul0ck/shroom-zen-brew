import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, User, Search, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Shop", href: "#produkty" },
  { name: "Our story", href: "#o-nas" },
  { name: "B2B", href: "#" },
  { name: "Where to buy?", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-bold text-foreground tracking-tight">
            :shroom
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button className="relative p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="hidden md:flex p-2 hover:bg-secondary rounded-full transition-colors">
              <Moon className="w-5 h-5 text-foreground" />
            </button>

            {/* Language */}
            <button className="hidden md:flex items-center gap-1 px-3 py-1.5 border border-border rounded-full text-sm">
              🇬🇧 EN
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-body text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-body text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
