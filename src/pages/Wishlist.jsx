import Navbar from "../components/Navbar";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (
          <h3>No products in wishlist.</h3>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  background: "crimson",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Wishlist;