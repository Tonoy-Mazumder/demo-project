import { toast } from "react-toastify";

const ProductCard = ({ product, cartCount, setCartCount }) => {
  const handleAddToCart = (product) => {
    setCartCount([...cartCount, product]);
    toast.success(`${product.title} added to cart`)
  };
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-white p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />

        <span className="absolute left-4 top-4 rounded-full bg-gray-900 px-3 py-1 text-xs capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col gap-3 border-t border-gray-100 p-5">
        <h3 className="line-clamp-2 min-h-12 font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={() => handleAddToCart(product)}
            className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-yellow-500 hover:text-gray-900"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
