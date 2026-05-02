import Link from "next/link";
import Image from "next/image";
import products from "./data/products.json";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <section className="py-10 space-y-14">
      {/* Hero Section */}
      <div className="hero rounded-3xl bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-white animate__animated animate__fadeIn min-h-80">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Summer Sale 50% OFF
            </h1>
            <p className="py-6 text-base sm:text-lg">
              Discover sunglasses, outfits, skincare and beach essentials.
            </p>

            <Link href="/products" className="btn btn-warning text-black">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hot Deals */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Hot Deals 🔥</h2>
        <p className="mt-2 text-gray-500">
          Best summer collections just for you.
        </p>
      </div>

      {/* Popular Products */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-center">
          Popular Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-xl animate__animated animate__fadeInUp"
            >
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={320}
                  unoptimized
                  className="h-64 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p>⭐ {product.rating}</p>
                <p className="font-bold text-primary">${product.price}</p>

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
      </div>

      {/* Summer Care Tips */}
      <div className="py-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="font-bold text-xl">💧 Stay Hydrated</h3>
            <p className="mt-2 text-gray-500">
              Drink enough water daily to stay fresh.
            </p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="font-bold text-xl">🧴 Use Sunscreen</h3>
            <p className="mt-2 text-gray-500">
              Protect your skin from harmful UV rays.
            </p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="font-bold text-xl">😎 Wear Sunglasses</h3>
            <p className="mt-2 text-gray-500">
              Keep your eyes safe during hot days.
            </p>
          </div>
        </div>
      </div>

      {/* Top Brands */}
      <div className="pb-10">
        <h2 className="text-4xl font-bold text-center mb-8">Top Brands</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="card bg-base-100 shadow-md p-8 font-bold">
            SunShade
          </div>

          <div className="card bg-base-100 shadow-md p-8 font-bold">
            GlowSkin
          </div>

          <div className="card bg-base-100 shadow-md p-8 font-bold">
            CoolFit
          </div>

          <div className="card bg-base-100 shadow-md p-8 font-bold">
            HydroGo
          </div>
        </div>
      </div>
    </section>
  );
}
