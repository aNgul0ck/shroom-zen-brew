import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Brief from "./pages/Brief";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import QuizPage from "./pages/QuizPage";
import CartPage from "./pages/Cart";
import CartDrawer from "./components/cart/CartDrawer";
import CuriosityPopup from "./components/CuriosityPopup";
import QaProgressBar from "./pages/QaProgressBar";
import AboutPage from "./pages/AboutPage";
import B2bPage from "./pages/B2bPage";

const queryClient = new QueryClient();

// Routes are defined twice: once with PL slugs (default), once mirrored under
// /en/* with EN slugs. Both render the same page components — the language
// switch happens via i18n based on URL prefix (handled by LanguageSwitcher).
const AppRoutes = () => (
  <Routes>
    {/* PL — default */}
    <Route path="/" element={<Index />} />
    <Route path="/brief" element={<Brief />} />
    <Route path="/badania" element={<Research />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/produkt/:slug" element={<ProductPage />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/koszyk" element={<CartPage />} />
    <Route path="/_qa/progress-bar" element={<QaProgressBar />} />
    <Route path="/o-shroomie" element={<AboutPage />} />
    <Route path="/nasza-historia" element={<AboutPage />} />
    <Route path="/b2b" element={<B2bPage />} />

    {/* EN — translated slugs under /en/* */}
    <Route path="/en" element={<Index />} />
    <Route path="/en/brief" element={<Brief />} />
    <Route path="/en/research" element={<Research />} />
    <Route path="/en/blog" element={<Blog />} />
    <Route path="/en/blog/:slug" element={<BlogPost />} />
    <Route path="/en/product/:slug" element={<ProductPage />} />
    <Route path="/en/quiz" element={<QuizPage />} />
    <Route path="/en/cart" element={<CartPage />} />
    <Route path="/en/about" element={<AboutPage />} />
    <Route path="/en/b2b" element={<B2bPage />} />

    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartDrawer />
        <CuriosityPopup />
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
