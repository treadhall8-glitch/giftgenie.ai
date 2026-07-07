import { useSearch } from "../context/SearchContext";

function Categories() {
  const { setSearch } = useSearch();

  const categories = [
    "All",
    "Flowers",
    "Chocolate",
    "Toys",
    "Electronics",
    "Beauty",
    "Jewelry",
    "Celebration",
    "Fashion",
    "Personalized",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-10">

      <h2 className="text-3xl font-bold text-white mb-6">
        Shop by Category
      </h2>

      <div className="flex flex-wrap gap-4">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSearch(category === "All" ? "" : category)
            }
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full transition"
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}

export default Categories;