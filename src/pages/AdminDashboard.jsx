import { useState, useEffect } from "react";
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

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const res = await api.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

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

      loadProducts();
    } catch (err) {
      alert("❌ Failed to add product");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1>📦 Admin Dashboard</h1>

      <input
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
        value={form.name}
      />
      <br />
      <br />

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={form.description}
      />
      <br />
      <br />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
        value={form.category}
      />
      <br />
      <br />

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        value={form.image}
      />
      <br />
      <br />

      <input
        name="price"
        placeholder="Price"
        type="number"
        onChange={handleChange}
        value={form.price}
      />
      <br />
      <br />

      <input
        name="stock"
        placeholder="Stock"
        type="number"
        onChange={handleChange}
        value={form.stock}
      />
      <br />
      <br />

      <button onClick={addProduct}>
        ➕ Add Product
      </button>

      <hr style={{ margin: "40px 0" }} />

      <h2>📦 All Products ({products.length})</h2>

      {products.map((item) => (
        <div
          key={item._id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="80"
            height="80"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>

            <p>
              <strong>Stock:</strong> {item.stock}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;