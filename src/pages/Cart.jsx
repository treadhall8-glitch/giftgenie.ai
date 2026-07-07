import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-10">

        <h1 className="text-4xl font-bold mb-8">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-3xl mb-5">
              Your cart is empty 😔
            </h2>

            <button
              onClick={() => navigate("/")}
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}

            <div className="lg:col-span-2">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800 rounded-xl p-5 mb-5 flex gap-5 items-center"
                >

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                  )}

                  <div className="flex-1">

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-green-400 font-bold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-red-600 px-3 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-green-600 px-3 py-1 rounded"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg"
                  >
                    🗑 Remove
                  </button>

                </div>
              ))}

            </div>

            {/* Order Summary */}

            <div className="bg-slate-800 rounded-xl p-6 h-fit">

              <h2 className="text-2xl font-bold mb-6">
                📦 Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-400">
                    FREE
                  </span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>

              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg mt-8 font-bold"
              >
                💳 Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg mt-4"
              >
                🗑 Clear Cart
              </button>

            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default Cart;