import { useEffect, useState } from "react";

export const RandomPokemonImage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      const randomId = Math.floor(Math.random() * 1025) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await res.json();
      setImage(data.sprites.other["showdown"].front_default);
      setName(data.name);
    };

    fetchPokemon();
  }, []);

  const handleCopy = () => {
    if (name) {
      navigator.clipboard.writeText(name);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="relative w-40 h-40 flex items-center justify-center rounded-xl group cursor-pointer"
      onClick={handleCopy}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
          {/* Tooltip on hover */}
          <span className="absolute capitalize bottom-2 px-2 py-1 text-sm font-semibold bg-white/70 text-secondary rounded opacity-0 group-hover:opacity-100 transition">
            {name}
          </span>

          {/* Toast message */}
          {copied && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-fadeInOut">
              Copied!
            </div>
          )}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
