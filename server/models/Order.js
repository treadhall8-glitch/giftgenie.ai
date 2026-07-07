import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    address: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      pincode: String,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    orderStatus: {
      type: String,
      default: "Processing",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);