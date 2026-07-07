import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const navigate = useNavigate();

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const user = JSON.parse(localStorage.getItem("user"));

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("👋 Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="w-full bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-violet-400"
        >
          🎁 GiftGenie AI
        </Link>

        <div className="hidden md:flex items-center gap-6">

          <Link to="/" className="hover:text-violet-400">
            Home
          </Link>

          <Link to="/wishlist" className="hover:text-pink-400">
            ❤️ {wishlist.length}
          </Link>

          <Link to="/cart" className="hover:text-green-400">
            🛒 {cartCount}
          </Link>

          <Link to="/checkout">
            Checkout
          </Link>

          <Link to="/orders">
            Orders
          </Link>

          {/* Seller Dashboard */}
          {user?.role === "seller" && (
            <Link
              to="/seller"
              className="text-yellow-400 font-semibold"
            >
              🏪 Seller
            </Link>
          )}

          {/* Admin Dashboard */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="text-red-400 font-semibold"
            >
              ⚙️ Admin
            </Link>
          )}

          {/* User Name */}
          {user && (
            <span className="text-violet-300 font-semibold">
              👋 {user.name}
            </span>
          )}

          {/* Login/Register or Logout */}
          {!user ? (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;