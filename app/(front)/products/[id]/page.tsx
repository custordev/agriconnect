/* eslint-disable @typescript-eslint/no-unused-vars */

import { ProductDetail } from "@/components/(front)/product/product";
import { ProductReviews } from "@/components/(front)/product/productReview";
import { ProductSpecifications } from "@/components/(front)/product/productSpecifications";
import { products } from "@/components/(front)/product/productsSection";
import { SimilarProducts } from "@/components/(front)/similarProsucts";
import { Breadcrumb } from "@/components/ui/breadcrumb";

type Product = {
  id: string;
  title: string;
  image: string;
  categoryId: string;
  price: number;
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = products.find((prod) => prod.id === id);
  // console.log(product);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold text-red-500">
          Product not found. Please check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:max-w-[90rem] lg:p-4 lg:space-y-12 space-y-8 p-1">
      <div className="flex items-center gap-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }]} />
        <h1 className="text-4xl font-bold">{product.title}</h1>
      </div>
      <ProductDetail product={product} />
      <ProductSpecifications />
      <ProductReviews />
      <SimilarProducts
        category={product.categoryId}
        currentProductId={product.id}
      />
    </div>
  );
}
