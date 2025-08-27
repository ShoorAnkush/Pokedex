import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Pokemon } from "./components/Pokemon";
import { MyTeam } from "./pages/MyTeam";
import { Home } from "./pages/Home";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedTeam = localStorage.getItem("team");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page keeps hero image */}
        <Route
          path="/"
          element={<Home favorites={favorites} setFavorites={setFavorites} />}
        />

        {/* My Team with dark, clean gradient */}
        <Route
          path="/myteam"
          element={
            <div className="bg-gradient-to-b from-primary/80 to-gray-700 min-h-screen">
              <Navbar favorites={favorites} setFavorites={setFavorites} />
              <MyTeam favorites={favorites} setFavorites={setFavorites} />
            </div>
          }
        />

        {/* Pokédex page with neutral gradient */}
        <Route
          path="/pokedex"
          element={
            <div
              className="bg-gradient-to-b from-[#4bd4dc] to-[#0c7c97] min-h-screen"
              style={{}}
            >
              <Navbar favorites={favorites} setFavorites={setFavorites} />
              <Pokemon
                favorites={favorites}
                setFavorites={setFavorites}
                pokemon={pokemon}
                setPokemon={setPokemon}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
