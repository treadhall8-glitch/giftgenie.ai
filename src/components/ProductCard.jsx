import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({
  id,
  image,
  title,
  price,
  category,
  stock,
}) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = {
    _id: id,
    id: id,
    image,
    name: title,
    price,
    category,
    stock,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">

      <Link to={`/product/${id}`}>

        <div className="relative">

          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover"
          />

          <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-lg text-sm font-bold">
            ⭐ 4.8
          </div>

          <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-lg text-sm">
            ❤️
          </div>

        </div>

      </Link>

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📂 {category}
        </p>

        <div className="flex items-center gap-3 mt-3">

          <span className="text-2xl font-bold text-violet-600">
            ₹{price}
          </span>

          <span className="line-through text-gray-400">
            ₹{Math.round(price * 1.25)}
          </span>

        </div>

        <p className="text-green-600 font-semibold mt-2">
          🚚 Free Delivery
        </p>

        <p className="text-blue-600 font-semibold">
          Stock: {stock}
        </p>

        <div className="flex flex-col gap-3 mt-5">

          <button
            onClick={() => addToCart(product)}
            className="bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-bold"
          >
            🛒 Add to Cart
          </button>

          <button
            onClick={() => addToWishlist(product)}
            className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold"
          >
            ❤️ Wishlist
          </button>

          <button
            className="bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-xl font-bold"
          >
            🤖 Ask Aira
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;