function Trending() {

  const products = [
    {
      name: "Wireless Earbuds",
      price: "₹1,999",
      image: "🎧"
    },
    {
      name: "Smart Watch",
      price: "₹3,499",
      image: "⌚"
    },
    {
      name: "Coffee Mug",
      price: "₹499",
      image: "☕"
    },
    {
      name: "Gaming Mouse",
      price: "₹1,299",
      image: "🖱️"
    }
  ];

  return (
    <section className="trending">

      <h2>🔥 Trending Gifts</h2>

      <div className="product-grid">

        {products.map((product,index)=>(
          <div className="product-card" key={index}>

            <div className="product-image">
              {product.image}
            </div>

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>View Details</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Trending;