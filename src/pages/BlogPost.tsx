import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Quote } from "lucide-react";

import esteraRelax from "@/assets/blog/estera-relax.jpg";
import esteraPower from "@/assets/blog/estera-power.jpg";
import esteraBeach from "@/assets/blog/estera-beach.jpg";

interface BlogPostData {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: React.ReactNode;
}

const blogPostsData: Record<string, BlogPostData> = {
  "estera-mrowka-balans-i-sztuka-zycia": {
    slug: "estera-mrowka-balans-i-sztuka-zycia",
    title: "Estera Mrówka: O balansie, sporcie i sztuce życia",
    subtitle: "Artystka wizualna, skaterka i nauczycielka o tym, jak odnaleźć równowagę w pędzącym świecie",
    image: esteraRelax,
    date: "30 grudnia 2024",
    readTime: "8 min",
    category: "Wywiad",
    author: "Kamila Knap",
    content: (
      <>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Estera Mrówka to artystka wizualna, skaterka i nauczycielka akademicka. Rozmawiamy o tym, 
          jak łączy wiele pasji, dlaczego prostota daje jej spokój i co oznacza dla niej dbanie o siebie.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">Wiele pasji, jeden człowiek</h2>
          
          <p>
            <strong>Kamila Knap:</strong> Estera, jak najlepiej Cię przedstawić? Bo masz wiele pasji i zajawek.
          </p>
          
          <p>
            <strong>Estera Mrówka:</strong> Cześć, jestem Estera Mrówka. Zajmuję się sztuką wizualną, a oprócz tego 
            pasjonuję się sportami deskowymi. Teraz pewnie bardziej snowboard – taka fajna forma przewietrzenia głowy 
            i moje miejsce w rzeczywistości.
          </p>

          <figure className="my-12">
            <img 
              src={esteraPower} 
              alt="Estera z butelką Shroom Power" 
              className="w-full rounded-2xl"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-3">
              Estera w słoneczny dzień z Shroom Power
            </figcaption>
          </figure>

          <p>
            <strong>KK:</strong> Jesteś osobą łączącą wiele pasji: sztukę, sport i ludzi. Bo ty przecież lubisz ludzi.
          </p>

          <p>
            <strong>EM:</strong> Lubię ludzi, tak. Myślę, że dlatego odnajduję się w pracy nauczyciela. 
            W nadmiarze muszę to regulować i też lubię być sama ze sobą. Staram się to balansować. 
            Kiedy to reguluję, mam taką wyrozumiałość do człowieka. Człowiek, który porobi błędy, 
            cieplej spogląda na błędy innych.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">O szukaniu równowagi</h2>

          <p>
            <strong>KK:</strong> Jak, mając pasję, aktywne życie towarzyskie i pracę, odnajdujesz równowagę?
          </p>

          <p>
            <strong>EM:</strong> To nie jest proste. Bardzo ważny jest dla mnie sport oraz regularne wyjazdy poza miasto. 
            Głównie snowboard – takie wyjazdy mentalnie mnie resetują. Proste rzeczy: głupie żarty, lekkość, swoboda, 
            bardzo mnie relaksują. Do tego dochodzi pełne skupienie podczas sportu.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
            "Mam wrażenie, że każdy może znaleźć formę ruchu, która będzie odpowiadała jego potrzebom i możliwościom."
          </blockquote>

          <p>
            <strong>KK:</strong> Co masz na myśli mówiąc „dobre jedzenie"?
          </p>

          <p>
            <strong>EM:</strong> Staram się gotować, bo to jest zdrowsze. Reguluję się też przyjemnością jedzenia – 
            dobrymi smakami, przyprawami. Szczególnie ważne są dla mnie śniadania i długie poranki, kiedy mogę spokojnie 
            zjeść, wypić wodę z cytryną. To jest dla mnie prawdziwa jakość życia. Potem druga runda – kawka, 
            a czasem nawet Shroomik Power.
          </p>

          <figure className="my-12">
            <img 
              src={esteraBeach} 
              alt="Estera na plaży z Shroom Relax" 
              className="w-full rounded-2xl"
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-3">
              Chwila relaksu na plaży
            </figcaption>
          </figure>

          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">Siła pozytywnego dialogu</h2>

          <p>
            <strong>KK:</strong> Gdy potrzebujesz sobie dodać energii – co robisz?
          </p>

          <p>
            <strong>EM:</strong> Na pewno dużo mówię do siebie. Staram się mówić do siebie dobrze. 
            Myślę o tym, ile rzeczy już mi się udało, przypominam sobie sukcesy. Mówię sobie: skoro wtedy się udało, 
            to może teraz też. Świadomie buduję wobec siebie wspierającą narrację i to mnie naprawdę wzmacnia.
          </p>

          <p>
            Zmiana narracji w głowie przyniosła mi bardzo dobre efekty – nie tylko mentalnie, ale w ogóle w życiu. 
            To była duża zmiana.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">Prostota jako strategia</h2>

          <p>
            <strong>EM:</strong> Zbierałam różne doświadczenia. Najpierw te związane z jogą, później z medytacją. 
            Odosobnienie bardzo dobrze na mnie działa. Wyciszenie i obniżenie liczby bodźców są mi bardzo potrzebne.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
            "Tak jak Steve Jobs nosił codziennie to samo, tak ja – czy w sztuce, czy w życiu – staram się 
            upraszczać rytuały i decyzje. Lubię ograniczenie, syntezę, czystość. To mnie uspokaja."
          </blockquote>

          <p>
            Jakiś czas temu dostałam profesjonalną diagnozę ADHD i wiele rzeczy po prostu się wyjaśniło. 
            Porządek to nie jest u mnie estetyczna fanaberia, tylko realna potrzeba mojego mózgu.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">Nadzieja i dobre przykłady</h2>

          <p>
            <strong>KK:</strong> Czy świat zmierza w dobrą czy złą stronę?
          </p>

          <p>
            <strong>EM:</strong> Żyję nadzieją. Jestem osobą, która naprawdę ma w sobie dużo nadziei. 
            Widzę wokół siebie wiele dobrych przykładów i wartościowych ludzi. Z jednej strony docierają 
            do mnie trudne informacje, z drugiej – wierzę, że będzie dobrze.
          </p>

          <p>
            Widzę, że wiele osób zyskało głos, a wielu grupom realnie żyje się dziś lepiej. I to mnie szczerze cieszy.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6">Wiadomość dla grzybarzy</h2>

          <p>
            <strong>KK:</strong> Jest jakaś wiadomość od Estery dla czytelników Shrooma?
          </p>

          <div className="bg-secondary/50 rounded-2xl p-8 my-8">
            <Quote className="w-8 h-8 text-primary mb-4" />
            <p className="text-xl font-medium text-foreground mb-4">
              "Ja totalnie kocham Shrooma. Kocham to, że to jest fancy napój, który można pić bez alkoholu. 
              To naprawdę wspaniała alternatywa. Niech grzyb robi Wam dobrze w głowie. 
              To jest piękne, że możemy dbać o siebie w przyjemny sposób."
            </p>
            <p className="text-muted-foreground">— Estera Mrówka</p>
          </div>
        </div>
      </>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{post.title} - Shroom Blog</title>
        <meta name="description" content={post.subtitle} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-28 pb-24">
          {/* Back link */}
          <div className="container mx-auto px-6 lg:px-12 mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do bloga
            </Link>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-6 lg:px-12 mb-12"
          >
            <div className="aspect-[21/9] rounded-3xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container mx-auto px-6 lg:px-12"
          >
            <div className="max-w-3xl mx-auto">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {post.subtitle}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Shroom Team</p>
                </div>
              </div>

              {/* Content */}
              {post.content}
            </div>
          </motion.article>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default BlogPost;
