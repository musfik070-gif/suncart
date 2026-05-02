import Link from "next/link";
import products from "../data/products.json";

export default function ProductsPage() {
  return (
    <section className="py-10">
      <h1 className="text-5xl font-bold text-center mb-10">All Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>

              <p className="text-sm text-gray-500">Brand: {product.brand}</p>

              <p>⭐ {product.rating}</p>

              <p className="font-bold text-primary">${product.price}</p>

              <p className="text-sm">Stock: {product.stock}</p>

              <Link
                href={`/products/${product.id}`}
                className="btn btn-primary mt-3"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
