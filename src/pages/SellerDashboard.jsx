import { useState, useEffect } from "react";
import api from "../services/api";

function SellerDashboard() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    price: "",
    stock: "",
  });

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await api.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add / Update Product
  const addProduct = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/api/products/${editingId}`, {
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
        });

        alert("✅ Product Updated Successfully!");
      } else {
        await api.post("/api/products", {
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
        });

        alert("✅ Product Added Successfully!");
      }

      setForm({
        name: "",
        description: "",
        category: "",
        image: "",
        price: "",
        stock: "",
      });

      setEditingId(null);

      fetchProducts();

    } catch (err) {
      alert(err.response?.data?.message || "Operation Failed");
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/api/products/${id}`);

      alert("🗑 Product Deleted");

      fetchProducts();

    } catch (err) {
      alert("Delete Failed");
    }
  };

  // Edit Product
  const editProduct = (product) => {
    setEditingId(product._id);

    setForm({
      name: product.name,
      description: product.description,
      category: product.category,
      image: product.image,
      price: product.price,
      stock: product.stock,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        🏪 Seller Dashboard
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Form */}

        <form
          onSubmit={addProduct}
          className="bg-slate-800 p-8 rounded-2xl shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-6">
            {editingId ? "✏️ Edit Product" : "➕ Add Product"}
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded mb-4 text-black"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 rounded mb-4 text-black"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 rounded mb-4 text-black"
          />

          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];

              const formData = new FormData();
              formData.append("image", file);

              const res = await api.post("/api/upload", formData);

              setForm({
               ...form,
              image: res.data.imageUrl,
              });
            }}
             className="w-full p-3 rounded mb-4 text-white"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-3 rounded mb-4 text-black"
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full p-3 rounded mb-6 text-black"
          />

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg font-bold"
          >
            {editingId ? "💾 Update Product" : "➕ Add Product"}
          </button>

        </form>

        {/* Product List */}

        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-6">
            📦 My Products
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-400">
              No products added yet.
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-slate-700 rounded-xl p-4 mb-5"
              >

                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                )}

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p>{product.description}</p>

                <p className="mt-2">
                  📂 {product.category}
                </p>

                <p className="text-green-400 font-bold">
                  ₹{product.price}
                </p>

                <p className="mb-4">
                  Stock: {product.stock}
                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() => editProduct(product)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default SellerDashboard;