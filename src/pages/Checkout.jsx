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
    try {
      const order = {
        user: user.id,

        products: cart.map((item) => ({
          product: item._id || item.id,
          quantity: item.quantity,
          price: item.price,
        })),

        shippingAddress: address,

        totalAmount: totalPrice,

        paymentMethod: "Cash on Delivery",

        paymentStatus: "Pending",
      };

      await api.post("/api/orders", order);

      alert("✅ Order Placed Successfully!");

      clearCart();

      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Order Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-10">

        <h1 className="text-4xl font-bold mb-8">
          📦 Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

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

            {cart.map((item) => (
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
            ))}

            <hr className="my-5" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg mt-8 font-bold"
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