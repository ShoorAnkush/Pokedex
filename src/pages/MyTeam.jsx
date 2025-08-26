import { PokemonCard } from "../components/PokemonCard";

export const MyTeam = ({ favorites, setFavorites }) => {
  return (
    <div className="p-6">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-200">
            Your Team is Empty
          </h2>
          <p className="text-gray-400 mt-2">
            Catch some Pokémon to build your dream team!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {favorites.map((pokemonData) => (
            <PokemonCard
              key={pokemonData.name}
              pokemonData={pokemonData}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};
