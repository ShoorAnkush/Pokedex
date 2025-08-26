const BASE_URL = "https://pokeapi.co/api/v2";

// Generic fetch wrapper to handle errors
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Fetch paginated Pokémon list (basic info: name + url)
export const FetchPokemonList = async (limit = 30, offset = 0) => {
  const url = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
  const data = await fetchData(url);
  return data?.results || [];
};

// Fetch full Pokémon details by name
export const FetchPokemonByName = async (name) => {
  if (!name) return null;
  const url = `${BASE_URL}/pokemon/${name.toLowerCase()}`;
  return await fetchData(url);
};
