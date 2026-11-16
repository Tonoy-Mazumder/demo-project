
import ProductCard from "../components/ProductCard";

function Home({ products, cartCount, setCartCount }) {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="max-w-xl">
            <p className="text-yellow-400 font-semibold mb-4">
              WELCOME TO SHOPZONE
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Your
              <span className="text-yellow-400"> Favorite </span>
              Products
            </h1>

            <p className="text-gray-300 mt-5 text-lg">
              Explore our latest collection and find
              everything you need at amazing prices.
            </p>

            <a
              href="#products"
              className="inline-block mt-8 bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Shop Now →
            </a>
          </div>

          <div className="text-[140px] md:text-[200px]">
            🛍️
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-yellow-600 font-semibold">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Featured Products
            </h2>
          </div>

          <p className="text-gray-500 hidden sm:block">
            {products.length} Products Available
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-center py-16 text-gray-500">
            Loading products...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>
          © 2026 ShopZone. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

export default Home;
