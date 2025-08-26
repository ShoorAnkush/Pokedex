import { useState } from "react";
import { FaPlus, FaMinus, FaP } from "react-icons/fa6";

export const PokemonCard = ({
  pokemonData,
  favorites,
  setFavorites,
  onClick,
}) => {
  const [sparkle, setSparkle] = useState(false);

  const toggleFavorite = () => {
    const alreadyFav = favorites.some((p) => p.name === pokemonData.name);
    if (alreadyFav) {
      setFavorites(favorites.filter((p) => p.name !== pokemonData.name));
    } else {
      setFavorites((prev) => [...prev, pokemonData]);
      setSparkle(true);
      setTimeout(() => setSparkle(false), 500);
    }
  };

  const image =
    pokemonData?.sprites.other.dream_world.front_default ||
    pokemonData?.sprites.other["official-artwork"].front_default;

  const typeColors = {
    fire: "#F87171",
    water: "#60A5FA",
    grass: "#34D399",
    electric: "#FBBF24",
    bug: "#A3E635",
    normal: "#D1D5DB",
    poison: "#A78BFA",
    ground: "#F59E0B",
    fairy: "#F9A8D4",
    fighting: "#F87171",
    psychic: "#F472B6",
    rock: "#D1D5DB",
    ghost: "#6B7280",
    ice: "#93C5FD",
    dragon: "#7C3AED",
    dark: "#374151",
    steel: "#9CA3AF",
    flying: "#60A5FA",
  };

  const type1 = pokemonData.types[0].type.name;
  const type2 = pokemonData.types[1]?.type.name;

  return (
    <div
      className="w-86 flex flex-col m-8 p-6 rounded-3xl shadow-2xl capitalize relative hover:scale-110 cursor-pointer transition-transform"
      style={{
        background: `linear-gradient(to bottom, #1A1A1A, ${typeColors[type1]})`,
      }}
      onClick={onClick}
    >
      <div className="flex justify-end text-amber-50 cursor-pointer">
        {favorites.some((p) => p.name === pokemonData.name) ? (
          <FaMinus
            onClick={toggleFavorite}
            className="active:scale-180 active:text-red-300 active:animate-ping transition-transform duration-800"
          />
        ) : (
          <FaPlus
            onClick={toggleFavorite}
            className="active:scale-180 active:text-green-300 active:animate-ping transition-transform duration-800"
          />
        )}
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center p-4">
        <img
          src={image}
          alt={pokemonData.name}
          className="absolute -top-25 w-42 h-42 md:w-56 md:h-56 object-contain drop-shadow-xl"
        />
      </div>

      {/* Info Section */}
      <div className="md:pt-30 pt-16 p-4 flex-1 flex flex-col justify-between">
        <h2 className="font-bold text-gray-100 text-3xl tracking-wide border-b-2 pb-2 border-amber-400 uppercase flex justify-center">
          {pokemonData.name}
        </h2>

        {/* Types */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {pokemonData.types.map((t) => (
            <p
              key={t.slot}
              className="text-white my-2 font-semibold shadow-md rounded-full px-3 py-1"
              style={{ backgroundColor: typeColors[t.type.name] || "#F59E0B" }}
            >
              {t.type.name}
            </p>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center mt-4 text-gray-100">
          <p className="font-mono text-lg">
            {pokemonData.weight / 10} KG
            <br />
            <span className="text-sm text-gray-200">Weight</span>
          </p>
          <p className="font-mono text-lg">
            {pokemonData.height / 10} M
            <br />
            <span className="text-sm text-gray-200">Height</span>
          </p>
          <p className="font-mono text-lg">
            {pokemonData.stats[5].base_stat}
            <br />
            <span className="text-sm text-gray-200">Speed</span>
          </p>
        </div>
      </div>
    </div>
  );
};
