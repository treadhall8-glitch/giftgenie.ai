import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    totalPrice,
    clearCart,
  } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (!user) {
      alert("Please login before placing an order.");
      navigate("/login");
      return;
    }

    if (!cart || cart.length === 0) {
      alert("Your cart is empty.");
      navigate("/cart");
      return;
    }

    if (
      !address.fullName ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      alert("Please fill in all shipping details.");
      return;
    }

    try {
      await api.post("/api/orders", {
        customer: user.name || address.fullName,

        email: user.email || "",

        items: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        address: {
          fullName: address.fullName,
          phone: address.phone,
          address: address.address,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
        },

        totalAmount: totalPrice,

        paymentStatus: "Pending",

        orderStatus: "Processing",
      });

      alert("✅ Order Placed Successfully!");

      clearCart();

      navigate("/orders");
    } catch (err) {
      console.error("Order Error:", err);

      alert(
        err.response?.data?.message ||
        "Order Failed. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-10">
        <h1 className="text-4xl font-bold mb-8">
          📦 Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

          {/* Shipping Address */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">
              Shipping Address
            </h2>

            <input
              name="fullName"
              placeholder="Full Name"
              value={address.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded mb-4 text-black"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              className="w-full p-3 rounded mb-4 text-black"
            />

            <textarea
              name="address"
              placeholder="Address"
              value={address.address}
              onChange={handleChange}
              className="w-full p-3 rounded mb-4 text-black"
            />

            <input
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="w-full p-3 rounded mb-4 text-black"
            />

            <input
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              className="w-full p-3 rounded mb-4 text-black"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              className="w-full p-3 rounded text-black"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-300">
                Your cart is empty.
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item._id || item.id}
                  className="flex justify-between mb-3"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))
            )}

            <hr className="my-5 border-gray-600" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>

              <span>
                ₹{totalPrice}
              </span>
            </div>

            <button
              onClick={placeOrder}
              disabled={cart.length === 0}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-500 disabled:cursor-not-allowed py-3 rounded-lg mt-8 font-bold"
            >
              📦 Place Order
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Checkout;