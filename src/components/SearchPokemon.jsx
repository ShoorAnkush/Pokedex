import { useState } from "react";

export const SearchPokemon = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim().toLowerCase());
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-0 focus:outline-none p-2 rounded w-64 text-secondary font-semibold bg-[#e8e4d5]"
      />
      <button
        type="submit"
        className="ml-2 p-2 font-semibold bg-accent/70 text-secondary rounded hover:cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};
