import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";
import api from "../services/api";

function ProductGrid() {
  const { search } = useSearch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        🔥 Trending Gifts
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="text-center text-white text-2xl">
          😔 No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.name}
              price={item.price}
              category={item.category}
              stock={item.stock}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductGrid;