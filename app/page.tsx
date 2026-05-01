export default function Home() {
  return (
    <section className="py-10 space-y-10">
      {/* Hero Section */}
      <div className="hero rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-[420px]">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold">Summer Sale 50% OFF</h1>
            <p className="py-6 text-lg">
              Discover sunglasses, outfits, skincare and beach essentials.
            </p>

            <button className="btn btn-warning text-black">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Small Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Hot Deals 🔥</h2>
        <p className="mt-2 text-gray-500">
          Best summer collections just for you.
        </p>
      </div>
    </section>
  );
}
