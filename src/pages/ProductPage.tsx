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
    <div className={product.isDiva ? "bg-[#1a0a12]" : "bg-background"}>
      <Header />
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <ProductIngredients product={product} />
      <ProductRoutine product={product} />
      <ProductReviews product={product} />
      <ProductFAQ product={product} />
      <ProductCrossSell currentSlug={product.slug} isDiva={product.isDiva} />
      <Footer />
    </div>
  );
};

export default ProductPage;
