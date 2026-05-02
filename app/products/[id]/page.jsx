"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import products from "@/app/data/products.json";
import { authClient } from "@/lib/auth-client";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id?.toString();

  const [checking, setChecking] = useState(true);
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      const session = await authClient.getSession().catch(() => null);

      if (!session?.data?.user) {
        router.replace(
          `/login?redirect=${encodeURIComponent(`/products/${productId}`)}`
        );
        return;
      }

      setChecking(false);
    };

    if (productId) checkLogin();
  }, [productId, router]);

  const product = products.find((item) => item.id.toString() === productId);

  if (checking) {
    return (
      <section className="py-20 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </section>
    );
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          unoptimized
          className="rounded-xl w-full h-72 sm:h-96 md:h-[500px] object-cover"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

          <div className="flex flex-wrap gap-3 mb-5">
            <span className="badge badge-outline">{product.brand}</span>
            <span className="badge badge-outline">{product.category}</span>
            <span className="badge badge-outline">Stock: {product.stock}</span>
          </div>

          <p className="text-xl mb-4">⭐ Rating: {product.rating}</p>

          <p className="text-3xl font-bold text-primary mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 leading-8 mb-8">{product.description}</p>

          {orderMessage && (
            <p className="text-green-600 font-semibold mb-4">{orderMessage}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setOrderMessage("Order placed successfully.")}
            >
              Place Order
            </button>

            <button
              className="btn btn-outline btn-lg"
              onClick={() => router.push("/products")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
