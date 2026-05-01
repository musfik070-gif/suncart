"use client";

import { useParams, useRouter } from "next/navigation";
import products from "../../data/products.json";
import { useEffect } from "react";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return <h1 className="text-3xl p-10">Product Not Found</h1>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      <div>
        <h1 className="text-5xl font-bold mb-4">{product.name}</h1>

        <p className="text-xl text-gray-500 mb-3">Brand: {product.brand}</p>

        <p className="text-xl mb-3">⭐ {product.rating}</p>

        <p className="text-5xl font-bold text-primary mb-6">${product.price}</p>

        <p className="text-lg mb-6">{product.description}</p>

        <p className="text-xl mb-8">Stock: {product.stock}</p>

        <button className="btn btn-primary">Buy Now</button>
      </div>
    </section>
  );
}
