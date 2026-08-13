const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load orders data
const ordersPath = path.join(__dirname, "orders.json");
const orders = JSON.parse(fs.readFileSync(ordersPath, "utf-8"));

// -----------------------------------------------
// GET /api/orders/:orderId  — Order lookup endpoint
// -----------------------------------------------
app.get("/api/orders/:orderId", (req, res) => {
  const { orderId } = req.params;

  // Case-insensitive search
  const order = orders.find(
    (o) => o.orderId.toLowerCase() === orderId.toLowerCase()
  );

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order number not found.",
    });
  }

  return res.status(200).json({
    success: true,
    order: {
      orderId: order.orderId,
      orderStatus: order.orderStatus,
      shippingStatus: order.shippingStatus,
      carrier: order.carrier,
      estimatedDeliveryDate: order.estimatedDeliveryDate,
    },
  });
});

// -----------------------------------------------
// GET /api/orders  — List all orders (handy for testing)
// -----------------------------------------------
app.get("/api/orders", (req, res) => {
  return res.status(200).json({
    success: true,
    count: orders.length,
    orders,
  });
});

// -----------------------------------------------
// 404 fallback
// -----------------------------------------------
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Northstar Order API running at http://localhost:${PORT}`);
  console.log(`Try: GET http://localhost:${PORT}/api/orders/NSR-1001`);
});
