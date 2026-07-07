import express from "express";
import {
  createOrder,
  getOrders,
  getOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getOrders);

// Get Single Order
router.get("/:id", getOrder);

// Update Order Status
router.put("/:id", updateOrderStatus);

export default router;