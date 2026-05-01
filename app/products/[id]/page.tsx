import products from "../../data/products.json";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="text-4xl py-10">Product Not Found</h1>;
  }

  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>

          <p className="mb-2 text-gray-500">Brand: {product.brand}</p>

          <p className="mb-2">⭐ {product.rating}</p>

          <p className="text-3xl font-bold text-primary mb-4">
            ${product.price}
          </p>

          <p className="mb-4">{product.description}</p>

          <p className="mb-6">Stock: {product.stock}</p>

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </section>
  );
}
