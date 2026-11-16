import { toast } from "react-toastify";

function Cart({ cartCount, setCartCount }) {
  const total = cartCount.reduce(
    (total, product) => total + product.price,
    0
  );

  // Delete Product
  const handleDelete = (deleteProduct) => {
    const remainingProducts = cartCount.filter(
      (product) => product.id !== deleteProduct.id

    );
    toast.success(`${deleteProduct.title} removed from cart`)
        
    setCartCount(remainingProducts);
  };
  const handleCheckout = () =>{
    setCartCount([]);
    toast.success(`check out successfull`)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          My Shopping Cart
        </h1>

        <p className="text-gray-500 mb-8">
          You have {cartCount.length} items in your cart.
        </p>

        {cartCount.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-bold text-gray-800">
              Your cart is empty!
            </h2>
            <p className="text-gray-500 mt-2">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Cart Products */}
            <div className="md:col-span-2 space-y-4">
              {cartCount.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-5"
                >
                  <div className="bg-gray-50 rounded-lg p-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="text-yellow-600 font-bold mt-2">
                      ${product.price}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Total Items</span>
                <span>{cartCount.length}</span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-yellow-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-6 hover:bg-yellow-500 hover:text-gray-900 transition font-semibold"
              
              onClick={handleCheckout}>
                Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
