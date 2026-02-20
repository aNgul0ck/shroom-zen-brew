import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, User, Search, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "Shop", href: "#produkty" },
  { name: "Our story", href: "#o-nas" },
  { name: "Quiz", href: "/quiz" },
  { name: "Blog", href: "/blog" },
  { name: "B2B", href: "#" },
  { name: "Contact", href: "#kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`font-display text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            :shroom
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-body text-sm transition-colors ${scrolled ? "text-foreground hover:text-muted-foreground" : "text-white/90 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body text-sm transition-colors ${scrolled ? "text-foreground hover:text-muted-foreground" : "text-white/90 hover:text-white"}`}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            </button>
            <button className="hidden md:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            </button>
            <button className="hidden md:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <Heart className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            </button>
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingBag className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="hidden md:flex p-2 hover:bg-white/10 rounded-full transition-colors">
              <Moon className={`w-5 h-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            </button>

            {/* Language */}
            <button className={`hidden md:flex items-center gap-1 px-3 py-1.5 border rounded-full text-sm transition-colors ${scrolled ? "border-border text-foreground" : "border-white/30 text-white"}`}>
              🇬🇧 EN
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 bg-black/80 backdrop-blur-md px-6 -mx-6">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-body text-white hover:text-white/70 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-body text-white hover:text-white/70 transition-colors"
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
