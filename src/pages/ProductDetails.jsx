import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center text-3xl mt-20">
          Product Not Found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}

          <div className="bg-white rounded-3xl shadow-xl p-10 flex items-center justify-center">

            {product.image.startsWith("http") ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md"
              />
            ) : (
              <div className="text-9xl">
                {product.image}
              </div>
            )}

          </div>

          {/* Product Info */}

          <div>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
              ⭐ 4.8 Rating
            </span>

            <h1 className="text-5xl font-bold mt-6 text-white">
              {product.name}
            </h1>

            <div className="flex items-center gap-5 mt-6">

              <h2 className="text-4xl text-violet-400 font-bold">
                ₹{product.price}
              </h2>

              <span className="line-through text-gray-400 text-2xl">
                ₹{Math.round(product.price * 1.25)}
              </span>

              <span className="text-green-400 font-bold">
                20% OFF
              </span>

            </div>

            <div className="mt-8 space-y-3 text-gray-300">

              <p>🚚 Free Delivery</p>

              <p>🔄 7 Days Easy Return</p>

              <p>🛡️ Secure Payment</p>

              <p>📦 In Stock</p>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => addToCart(product)}
                className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl text-white font-bold"
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(product)}
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-white font-bold"
              >
                ❤️ Wishlist
              </button>

              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white font-bold">
                ⚡ Buy Now
              </button>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6 mt-10">

              <h3 className="text-2xl font-bold text-violet-400 mb-3">
                🤖 Ask Aira
              </h3>

              <p className="text-gray-300">
                Ask if this gift is suitable for birthdays,
                anniversaries, weddings, or festivals.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default ProductDetails;