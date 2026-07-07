import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

function Products() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>🛍️ All Products</h1>
        <p>Browse all available gifts.</p>

        <ProductGrid />
      </div>
    </>
  );
}

export default Products;