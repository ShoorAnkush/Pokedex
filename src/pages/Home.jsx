import { Navbar } from "../components/NavBar";
import { RandomPokemonImage } from "../components/RandomPokemon";

export const Home = ({ pokemon, favorites, setFavorites }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#ADDFDC] to-[#20a8d2]">
      {/* Hero section */}
      <section className="relative w-full h-screen bg-hero bg-cover bg-center overflow-hidden">
        {/* Navbar overlays hero image */}
        <Navbar
          favorites={favorites}
          setFavorites={setFavorites}
          className="absolute top-0 left-0 w-full z-10"
        />

        {/* Floating image */}
        <img
          src="/images/heroBanner6.png"
          alt="Floating"
          className="absolute w-40 sm:w-52 md:w-72 floating-image z-50"
        />
        <img
          src="/images/pikachu.png"
          alt="Floating"
          className="absolute w-30 sm:w-42 md:w-52 floating-image2 z-50"
        />

        {/* Hero content centered */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-0 -mt-40">
          <h1 className="inline-block px-4 sm:px-10 py-3 sm:py-5 bg-white/50 border-red-500 border-[3px] my-10 sm:my-16 text-2xl sm:text-2xl md:text-3xl lg:text-4xl rounded-3xl font-extrabold shadow-lg shadow-black/30 text-black drop-shadow-sm">
            Welcome to the Pokédex!
          </h1>
          <h2 className="inline-block px-3 sm:px-6 py-2 sm:py-3 bg-white/50 text-base sm:text-xl md:text-xl lg:text-3xl border-blue-500 border-[3px] rounded-3xl font-bold shadow-md shadow-black/20 text-black drop-shadow-sm">
            Ready to Catch ’Em All?
          </h2>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-8 text-center my-12">
        {/* About Pokedex */}
        <div className="bg-gradient-to-br from-red-100 to-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform w-full sm:w-80 mx-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-red-600 drop-shadow-sm">
            📖 Pokédex
          </h3>
          <img
            src="/images/card1.png"
            className="w-36 sm:w-48 h-36 sm:h-42 py-2 mx-auto"
            alt="Pikachu"
          />
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            The Pokédex is your Pokémon encyclopedia! Browse through
            generations, discover their unique stats, abilities, and evolutions.
            Every adventure starts with knowledge!
          </p>
        </div>

        {/* My Team */}
        <div className="bg-gradient-to-br from-blue-100 to-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform w-full sm:w-80 mx-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-blue-600 drop-shadow-sm">
            🧑‍🤝‍🧑 My Team
          </h3>
          <img
            src="/images/card3.png"
            className="w-36 sm:w-48 h-36 sm:h-52 py-2 mx-auto"
            alt="Pikachu"
          />
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Build and manage your dream Pokémon squad! Add your favorites, plan
            strategies, and create the ultimate team to face any challenge.
          </p>
        </div>

        {/* Search Pokémon */}
        <div className="bg-gradient-to-br from-green-100 to-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform w-full sm:w-80 mx-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-green-600 drop-shadow-sm">
            🔍 Search Pokémon
          </h3>
          <img
            src="/images/card2.png"
            className="w-36 sm:w-48 h-36 sm:h-52 py-2 mx-auto"
            alt="Pikachu"
          />
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Looking for something specific? Use the search to instantly find any
            Pokémon by name and explore their abilities, stats, and type
            matchups!
          </p>
        </div>
      </section>

      {/* Interactive Search Section */}
      <section className="w-full py-16 flex flex-col items-center justify-center px-4 sm:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
          Check Out Some Pokémon!
        </h2>

        {/* Random Pokémon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl mb-8">
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center shadow-lg">
            <RandomPokemonImage />
          </div>
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center shadow-lg">
            <RandomPokemonImage />
          </div>
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center shadow-lg">
            <RandomPokemonImage />
          </div>
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center shadow-lg">
            <RandomPokemonImage />
          </div>
        </div>

        {/* See More Button */}
        <a
          href="/pokedex"
          className="px-8 py-4 rounded-2xl bg-white/70 hover:bg-[#030B49]/50 font-bold text-shadow-primary shadow-lg transition-colors"
        >
          See More
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-[#030B49]/80 text-white text-center text-sm sm:text-base">
        Made by Ankush |{" "}
        <a
          href="https://ankushshoor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-400"
        >
          www.ankushshoor.com
        </a>
      </footer>
    </div>
  );
};
