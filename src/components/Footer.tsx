import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/lib/i18nRoutes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  const contactInfo = [
    { label: t("common.footer.email"), href: "mailto:hii@shroom4you.com" },
    { label: "(+48) 510 866 906", href: "tel:+48510866906" },
    { label: t("common.footer.instagram"), href: "https://instagram.com/shroom.drink" },
    { label: t("common.footer.facebook"), href: "https://facebook.com/shroom4you" },
    { label: t("common.footer.website"), href: "https://shroom4you.com" },
  ];

  return (
    <footer className="pb-16 md:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-foreground/[0.03] flex items-center p-8 md:p-14 min-h-[200px] md:min-h-[300px]">
          <div>
            <p className="font-display text-lg font-bold text-foreground mb-3">{t("common.footer.brand")}</p>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">{t("common.footer.thankYou")}</h3>
          </div>
        </div>

        <div className="flex flex-col">
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex-1 flex items-center px-6 md:px-10 ${
                i % 2 === 0 ? "bg-foreground/[0.03]" : "bg-foreground/[0.06]"
              } border-b border-foreground/5 hover:bg-foreground/10 transition-colors min-h-[52px] md:min-h-[60px]`}
            >
              <span className="font-display text-sm md:text-xl font-bold text-foreground">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-foreground py-4">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-background/40">
            © {currentYear} shroom. {t("common.footer.rights")}
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-1.5 hover:bg-background/10 transition-colors" aria-label="Social">
                <Icon className="w-3.5 h-3.5 text-background/50" />
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <Link to={lp("/blog")} className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">{t("common.header.blog")}</Link>
            <a href="#" className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">{t("common.footer.privacyPolicy")}</a>
            <a href="#" className="font-body text-[11px] text-background/40 hover:text-background/60 transition-colors">{t("common.footer.regulations")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
