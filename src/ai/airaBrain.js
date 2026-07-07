import products from "../data/products";

export function getAiraResponse(message) {
  const text = message.toLowerCase();

  let filtered = [...products];

  // Budget
  const budget = text.match(/\d+/);
  if (budget) {
    filtered = filtered.filter(
      (p) => p.price <= Number(budget[0])
    );
  }

  // Categories
  if (text.includes("flower"))
    filtered = filtered.filter((p) => p.category === "Flowers");

  if (text.includes("chocolate"))
    filtered = filtered.filter((p) => p.category === "Chocolate");

  if (text.includes("watch"))
    filtered = filtered.filter((p) => p.category === "Electronics");

  if (text.includes("jewelry"))
    filtered = filtered.filter((p) => p.category === "Jewelry");

  if (filtered.length === 0) {
    return {
      text: "Sorry 😔 I couldn't find a matching gift.",
      products: [],
    };
  }

  return {
    text: "Here are some gifts I recommend 🎁",
    products: filtered.slice(0, 5),
  };
}