import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function SellerDashboard() {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/api/products");
    setProducts(res.data);
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async () => {
    try {
      await api.post("/api/products", product);

      alert("✅ Product Added");

      setProduct({
        name: "",
        description: "",
        category: "",
        image: "",
        price: "",
        stock: "",
      });

      fetchProducts();

    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await api.delete(`/api/products/${id}`);

    fetchProducts();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white p-10">

        <h1 className="text-4xl font-bold mb-10">
          🏪 Seller Dashboard
        </h1>

        {/* Add Product Form */}

        <div className="bg-slate-800 p-8 rounded-xl">

          <input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 rounded mb-3 text-black"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-3 rounded mb-3 text-black"
          />

          <input
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-3 rounded mb-3 text-black"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full p-3 rounded mb-3 text-black"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 rounded mb-3 text-black"
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full p-3 rounded mb-5 text-black"
          />

          <button
            onClick={addProduct}
            className="bg-green-600 w-full py-3 rounded-xl font-bold"
          >
            ➕ Add Product
          </button>

        </div>

        {/* My Products */}

        <h2 className="text-3xl font-bold mt-12 mb-6">
          📦 My Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((item) => (

            <div
              key={item._id}
              className="bg-slate-800 rounded-xl overflow-hidden"
            >

              <img
                src={item.image}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p>{item.category}</p>

                <p className="mt-2">
                  ₹{item.price}
                </p>

                <p>
                  Stock : {item.stock}
                </p>

                <button
                  onClick={() => deleteProduct(item._id)}
                  className="bg-red-600 mt-4 px-5 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default SellerDashboard;