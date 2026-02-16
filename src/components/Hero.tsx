import { test } from "../data/data";

export default function Hero() {
    return (
        <>
            <section className="bg-font h-screen overflow-hidden flex items-center justify-center flex-col">
                <h1 className="text-4xl text-white font-black text-center mt-8 mb-2.5">RED-HAT-SECURITY</h1>
                <div className="">
                    <div className="relative w-full max-w-lg">

                        <input
                            type="text"
                            placeholder="Search something..."
                            className="
                                w-full
                                px-6 py-4
                                pl-14
                                text-lg
                                rounded-2xl
                                bg-white
                                shadow-lg
                                border border-gray-200
                                outline-none
                                transition-all duration-300
                                focus:ring-4 focus:ring-blue-200
                                focus:shadow-xl
                              "
                        />

                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                            🔍
                        </div>

                    </div>
                </div>
                <div className="web-container h-full overflow-y-auto">
                    <div className="grid grid-cols-3 gap-6 py-6">
                        {test.map((item) => (
                            <>
                                <div className="relative w-full rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-purple-500/40">

                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt="Card"
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-5 text-white">
                                        <h2 className="text-xl font-bold mb-2">
                                            {item.title}
                                        </h2>

                                        <p className="text-sm text-white/80 mb-4">
                                            {item.body}
                                        </p>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="text-red-400 text-sm underline hover:text-red-300"
                                        >
                                            🎥 Watch on YouTube
                                        </a>

                                        <button className="mt-4 w-full bg-white/20 hover:bg-white/30 transition-all duration-300 py-2 rounded-lg font-semibold backdrop-blur-md">
                                            More
                                        </button>
                                    </div>

                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}