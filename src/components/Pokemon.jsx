import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { SearchPokemon } from "./SearchPokemon";
import { FetchPokemonList, FetchPokemonByName } from "../api/pokemonApi";
import { Pagination } from "./Pagination";
import { PokemonDetail } from "./PokemonDetail";

export const Pokemon = ({ favorites, setFavorites }) => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]); // detailed data for page
  const [searchResult, setSearchResult] = useState(null); // single Pokémon search
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const limit = 30;

  // fetch paginated Pokémon details
  const fetchPage = async (pageNum) => {
    setLoading(true);
    setSearchResult(null); // clear search
    try {
      const offset = (pageNum - 1) * limit;
      const results = await FetchPokemonList(limit, offset);

      // fetch detailed data for only this page
      const detailed = await Promise.all(
        results.map((p) => fetch(p.url).then((res) => res.json()))
      );

      setPokemonList(detailed);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  // search full Pokémon by name
  const handleSearch = async (name) => {
    setLoading(true);
    try {
      const data = await FetchPokemonByName(name);
      setSearchResult(data); // single detailed Pokémon
    } finally {
      setLoading(false);
    }
  };

  const displayList = searchResult ? [searchResult] : pokemonList;

  return (
    <div className="p-4">
      <SearchPokemon onSearch={handleSearch} />

      {!searchResult && (
        <Pagination page={page} setPage={setPage} totalPokemon={1000} />
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 my-18 justify-items-center">
        {displayList.length > 0 ? (
          displayList.map((poke) => (
            <PokemonCard
              key={poke.name}
              pokemonData={poke}
              favorites={favorites}
              setFavorites={setFavorites}
              onClick={() => setSelectedPokemon(poke)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No Pokémon found</p>
        )}
      </div>

      {/* Pokemon Detail View */}
      {selectedPokemon && (
        <PokemonDetail
          pokemonData={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      {!searchResult && (
        <Pagination page={page} setPage={setPage} totalPokemon={1000} />
      )}

      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};
