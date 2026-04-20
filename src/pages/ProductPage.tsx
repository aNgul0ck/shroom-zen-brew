import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getProductBySlug } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductBenefits from "@/components/product/ProductBenefits";
import ProductIngredients from "@/components/product/ProductIngredients";
import ProductRoutine from "@/components/product/ProductRoutine";
import ProductReviews from "@/components/product/ProductReviews";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductCrossSell from "@/components/product/ProductCrossSell";
import RecentPurchases from "@/components/RecentPurchases";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Shroom`;
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={product.isDiva ? "bg-diva-dark" : "bg-background"}>
      <Header />
      <ProductHero product={product} />
      {/* Reordered per Thorium framework: Benefits → Cross-sell → Reviews (validation early) → Ingredients → Routine → FAQ */}
      <ProductBenefits product={product} />
      <ProductCrossSell currentSlug={product.slug} isDiva={product.isDiva} />
      <ProductReviews product={product} />
      <ProductIngredients product={product} />
      <ProductRoutine product={product} />
      <ProductFAQ product={product} />
      <Footer />
      <RecentPurchases />
    </div>
  );
};

export default ProductPage;
