import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-10">

        <h1 className="text-4xl font-bold mb-8">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <h2>No Orders Yet</h2>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-slate-800 rounded-xl p-6 mb-6"
            >
              <h2>{order.customer}</h2>

              <p>{order.email}</p>

              <p className="mt-2">
                Total: ₹{order.totalAmount}
              </p>

              <p>
                Payment: {order.paymentStatus}
              </p>

              <p>
                Status: {order.orderStatus}
              </p>
            </div>
          ))
        )}

      </div>
    </>
  );
}

export default Orders;