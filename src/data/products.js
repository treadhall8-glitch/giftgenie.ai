const products = [
  // 🌹 Flowers
  { id: 1, name: "Red Rose Bouquet", category: "Flowers", price: 999, image: "🌹" },
  { id: 2, name: "Mixed Flower Bouquet", category: "Flowers", price: 799, image: "💐" },
  { id: 3, name: "White Lily Bouquet", category: "Flowers", price: 1199, image: "🌸" },
  { id: 4, name: "Sunflower Bouquet", category: "Flowers", price: 699, image: "🌻" },
  { id: 5, name: "Orchid Premium Bouquet", category: "Flowers", price: 1499, image: "🌺" },

  // 🍫 Chocolates
  { id: 6, name: "Ferrero Rocher Box", category: "Chocolate", price: 799, image: "🍫" },
  { id: 7, name: "Cadbury Celebration Box", category: "Chocolate", price: 499, image: "🍬" },
  { id: 8, name: "Lindt Premium Chocolate", category: "Chocolate", price: 1299, image: "🍫" },
  { id: 9, name: "Belgian Chocolate Pack", category: "Chocolate", price: 999, image: "🍫" },
  { id: 10, name: "Handmade Chocolate Box", category: "Chocolate", price: 699, image: "🍪" },

  // 🧸 Toys / Gifts
  { id: 11, name: "Cute Teddy Bear", category: "Toys", price: 599, image: "🧸" },
  { id: 12, name: "Giant Teddy Bear", category: "Toys", price: 1999, image: "🧸" },
  { id: 13, name: "Love Heart Pillow", category: "Toys", price: 499, image: "❤️" },
  { id: 14, name: "Cute Doll Set", category: "Toys", price: 899, image: "🎎" },
  { id: 15, name: "Soft Plush Toy", category: "Toys", price: 699, image: "🧸" },

  // ⌚ Electronics
  { id: 16, name: "Smart Watch", category: "Electronics", price: 1999, image: "⌚" },
  { id: 17, name: "Bluetooth Earbuds", category: "Electronics", price: 1499, image: "🎧" },
  { id: 18, name: "Power Bank 10000mAh", category: "Electronics", price: 999, image: "🔋" },
  { id: 19, name: "Portable Speaker", category: "Electronics", price: 1299, image: "🔊" },
  { id: 20, name: "Smartphone Stand", category: "Electronics", price: 299, image: "📱" },

  // 🌸 Beauty / Perfume
  { id: 21, name: "Luxury Perfume Set", category: "Beauty", price: 1499, image: "🌸" },
  { id: 22, name: "Body Mist Pack", category: "Beauty", price: 799, image: "💨" },
  { id: 23, name: "Skincare Kit", category: "Beauty", price: 1299, image: "🧴" },
  { id: 24, name: "Lipstick Combo Set", category: "Beauty", price: 699, image: "💄" },
  { id: 25, name: "Face Care Gift Box", category: "Beauty", price: 999, image: "✨" },

  // 💍 Jewelry
  { id: 26, name: "Gold Plated Necklace", category: "Jewelry", price: 1999, image: "💍" },
  { id: 27, name: "Diamond Ring", category: "Jewelry", price: 2999, image: "💎" },
  { id: 28, name: "Silver Bracelet", category: "Jewelry", price: 1499, image: "🔗" },
  { id: 29, name: "Pearl Earrings", category: "Jewelry", price: 999, image: "🦪" },
  { id: 30, name: "Charm Pendant", category: "Jewelry", price: 799, image: "💖" },

  // 🎂 Celebration
  { id: 31, name: "Birthday Cake", category: "Celebration", price: 999, image: "🎂" },
  { id: 32, name: "Party Balloon Set", category: "Celebration", price: 299, image: "🎈" },
  { id: 33, name: "Gift Hampers Box", category: "Celebration", price: 1499, image: "🎁" },
  { id: 34, name: "Chocolate Cake", category: "Celebration", price: 899, image: "🍰" },
  { id: 35, name: "Candle Set", category: "Celebration", price: 199, image: "🕯️" },

  // 👕 Fashion
  { id: 36, name: "Casual T-Shirt", category: "Fashion", price: 699, image: "👕" },
  { id: 37, name: "Stylish Hoodie", category: "Fashion", price: 1299, image: "🧥" },
  { id: 38, name: "Leather Wallet", category: "Fashion", price: 899, image: "👛" },
  { id: 39, name: "Sneakers Shoes", category: "Fashion", price: 1999, image: "👟" },
  { id: 40, name: "Sunglasses", category: "Fashion", price: 799, image: "🕶️" },

  // 🎮 Misc / Fun
  { id: 41, name: "Gaming Headset", category: "Gaming", price: 1499, image: "🎮" },
  { id: 42, name: "LED Lamp Gift", category: "Home", price: 999, image: "💡" },
  { id: 43, name: "Coffee Mug Gift", category: "Home", price: 299, image: "☕" },
  { id: 44, name: "Photo Frame Gift", category: "Home", price: 499, image: "🖼️" },
  { id: 45, name: "Mini Desk Plant", category: "Home", price: 399, image: "🪴" },

  // 🎁 Special Gifts
  { id: 46, name: "Personalized Mug", category: "Custom", price: 399, image: "☕" },
  { id: 47, name: "Custom Name Necklace", category: "Custom", price: 1299, image: "💖" },
  { id: 48, name: "Photo Memory Book", category: "Custom", price: 999, image: "📖" },
  { id: 49, name: "Engraved Keychain", category: "Custom", price: 199, image: "🔑" },
  { id: 50, name: "Love Letter Box", category: "Custom", price: 599, image: "💌" },
];

export default products;