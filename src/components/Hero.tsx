import { useState } from "react";
import { hardware } from "../data/data";

export default function Hero() {
  const [searchValue, setSearchValue] = useState("");

  const filterData = hardware.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex flex-col">

      <div className="pt-10 pb-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-wider bg-linear-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
          RED-HAT-SECURITY
        </h1>
      </div>

      <div className="flex justify-center px-4 mb-8">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search something..."
            className="
              w-full px-6 py-4 pl-14 text-lg rounded-2xl
              bg-white/10 backdrop-blur-lg border border-white/20
              shadow-xl outline-none transition-all duration-300
              focus:ring-2 focus:ring-red-500 focus:scale-105
            "
          />

          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 text-xl">
            🔍
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-3.5 custom-scroll">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {filterData.length > 0 ? (
            filterData.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-red-500/30"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-red-400 transition">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {item.body}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 text-sm hover:text-red-300 transition"
                  >
                    🎥 Watch on YouTube
                  </a>

                  <button className="mt-4 w-full bg-linear-to-r from-red-500 to-purple-600 hover:opacity-90 transition py-2 rounded-xl font-semibold shadow-lg">
                    More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-xl mt-10">
              ❌ No results found
            </div>
          )}

        </div>
      </div>
    </section>
  );
}