import { useSearch } from "../context/SearchContext";
import AiraAssistant from "./AiraAssistant";
import aira from "../assets/aira.png";

function Hero() {
  const { search, setSearch } = useSearch();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-8">

        <div>

          <p className="text-violet-400 font-bold mb-4">
            ✨ AI Powered Shopping
          </p>

          <h1 className="text-6xl font-black leading-tight text-white">
            Find the Perfect
            <br />
            Gift with
            <span className="text-violet-400"> Aira AI</span>
          </h1>

          <p className="text-gray-300 mt-8 text-xl leading-8">
            Ask Aira anything.
            She recommends gifts,
            compares products,
            and helps customers shop faster.
          </p>

          <div className="flex gap-5 mt-10">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-xl p-4 text-black"
              placeholder="Search gifts..."
            />

            <button className="bg-violet-600 hover:bg-violet-700 px-8 rounded-xl text-white">
              Search
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src={aira}
            alt="Aira"
            className="w-[450px] animate-pulse"
          />

        </div>

      </div>

      <AiraAssistant />

    </section>
  );
}

export default Hero;