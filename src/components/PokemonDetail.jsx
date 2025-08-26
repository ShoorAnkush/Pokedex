import { useEffect, useState } from "react";

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

export const PokemonDetail = ({ pokemonData, onClose }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const type1 = pokemonData.types[0].type.name;

  useEffect(() => {
    let mounted = true;

    const fetchEvolution = async () => {
      try {
        const species = await (await fetch(pokemonData.species.url)).json();
        const evoChain = await (
          await fetch(species.evolution_chain.url)
        ).json();

        const chainNames = [];
        let current = evoChain.chain;
        while (current) {
          chainNames.push(current.species.name);
          current = current.evolves_to[0];
        }

        const evoWithImages = await Promise.all(
          chainNames.map(async (name) => {
            const data = await (
              await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            ).json();
            return { name, image: data.sprites.front_default };
          })
        );

        if (mounted) setEvolutionChain(evoWithImages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvolution();
    return () => (mounted = false);
  }, [pokemonData]);

  const image =
    pokemonData.sprites.other["official-artwork"].front_default ||
    pokemonData.sprites.other.dream_world.front_default;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-3xl p-6 w-11/12 md:w-3/4 lg:w-1/2 relative shadow-2xl overflow-y-auto max-h-[90vh]"
        style={{
          background: `linear-gradient(to bottom, #000000AA, ${typeColors[type1]})`,
        }}
      >
        <button
          className="absolute top-4 right-4 text-red-500 text-2xl font-bold cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={pokemonData.name}
            className="w-48 h-48 object-contain drop-shadow-xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-4 capitalize">
          {pokemonData.name}
        </h1>

        <div className="flex justify-center gap-2 mb-4">
          {pokemonData.types.map((t) => (
            <span
              key={t.slot}
              className="text-white px-3 py-1 rounded-full font-semibold shadow-md"
              style={{ backgroundColor: typeColors[t.type.name] || "#999" }}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-white">Stats</h2>
          {pokemonData.stats.map((stat) => (
            <div key={stat.stat.name} className="mb-1">
              <div className="flex justify-between text-sm text-white capitalize mb-1">
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span> {/* numeric value */}
              </div>
              <div className="w-full h-4 bg-gray-300 rounded-full">
                <div
                  className="h-4 rounded-full"
                  style={{
                    width: `${Math.min(stat.base_stat, 100)}%`,
                    backgroundColor: typeColors[type1],
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-white">Abilities</h2>
          <ul className="list-disc list-inside text-white capitalize">
            {pokemonData.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </div>

        {evolutionChain.length > 0 && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-white">Evolution</h2>
            <div className="flex gap-4">
              {evolutionChain.map((e) => (
                <div
                  key={e.name}
                  className="flex flex-col items-center text-white"
                >
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="capitalize">{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
