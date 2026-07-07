import { useState } from "react";
import api from "../services/api";

function AdminDashboard() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    try {
      await api.post("/api/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      alert("✅ Product Added!");

      setForm({
        name: "",
        description: "",
        category: "",
        image: "",
        price: "",
        stock: "",
      });
    } catch (err) {
      alert("❌ Failed to add product");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        📦 Admin Dashboard
      </h1>

      <div className="grid gap-4">

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          onClick={addProduct}
          className="bg-violet-600 text-white py-3 rounded hover:bg-violet-700"
        >
          ➕ Add Product
        </button>

      </div>
    </div>
  );
}

export default AdminDashboard;