function SearchBox() {
  return (
    <section className="search-section">

      <h2>🤖 Ask GiftGenie AI</h2>

      <p>
        Describe the person, occasion and budget.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Example: Birthday gift for my sister under ₹2000"
        />

        <button>
          Ask AI
        </button>

      </div>

    </section>
  );
}

export default SearchBox;