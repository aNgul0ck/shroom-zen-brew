import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

import esteraRelax from "@/assets/blog/estera-relax.jpg";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "estera-mrowka-balans-i-sztuka-zycia",
    title: "Estera Mrówka: O balansie, sporcie i sztuce życia",
    excerpt: "Artystka wizualna i skaterka dzieli się przemyśleniami o równowadze, rutynach i radości z prostych rzeczy.",
    image: esteraRelax,
    date: "30 grudnia 2024",
    readTime: "8 min",
    category: "Wywiad"
  }
];

const Blog = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog - Shroom</title>
        <meta
          name="description"
          content="Historie, wywiady i inspiracje ze świata Shroom. Poznaj ludzi, którzy dbają o balans i dobre samopoczucie."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Hero */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-primary mb-4">
                Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Historie & Inspiracje
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Rozmowy z ciekawymi ludźmi, którzy dbają o swoje dobre samopoczucie.
              </p>
            </motion.div>

            {/* Featured Post */}
            {blogPosts[0] && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <Link 
                  to={`/blog/${blogPosts[0].slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img
                          src={blogPosts[0].image}
                          alt={blogPosts[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="inline-block self-start px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-4">
                          {blogPosts[0].category}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        <p className="font-body text-muted-foreground mb-6">
                          {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {blogPosts[0].date}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {blogPosts[0].readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Czytaj więcej
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* More Posts Grid - placeholder for future */}
            {blogPosts.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Blog;
