const placeOrder = async () => {
  try {
    await api.post("/api/orders", {
      customer: user?.name || address.fullName,

      email: user?.email || "",

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
    alert(err.response?.data?.message || "Order Failed");
  }
};