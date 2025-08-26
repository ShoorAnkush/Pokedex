import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbPokeball } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { path: "/pokedex", label: "Pokedex" },
    { path: "/myteam", label: "My Team" },
  ];

  return (
    <div className="flex items-center justify-between w-full p-5">
      <div className="text-4xl hover:text-primary text-secondary">
        <Link to="/">
          <img src="/images/pokeball.png" className="w-10 h-10" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden gap-6 text-lg font-medium ml-auto">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="hover:text-primary bg-accent/70 rounded-2xl text-secondary py-2 px-4"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="relative">
        <TiThMenu
          className="text-4xl cursor-pointer md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        />

        {/* Mobile Dropdown */}
        {showMenu && (
          <ul className="absolute right-0 mt-2 w-40 bg-primary text-secondary rounded-lg shadow-lg z-50">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
