import { useState } from "react";
import HeaderIconCode from "./icons/HeaderIconCode";
import ButtonHamburger from "./ButtonHamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-green-950 text-white shadow-md w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Logo + Titel */}
          <div className="flex items-center space-x-2">
            <HeaderIconCode className="inline align-middle w-5 h-5 text-white" />
            <h1 className="text-2xl font-bold">Noah Balzan</h1>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#about"
                className="hover:text-green-500 transition-colors"
              >
                Über mich
              </a>
            </li>
            <li>
              <a href="#cv" className="hover:text-green-500 transition-colors">
                Lebenslauf
              </a>
            </li>
            <li>
              <a
                href="#languages"
                className="hover:text-green-500 transition-colors"
              >
                Programmiersprachen
              </a>
            </li>
          </ul>

          {/* Hamburger Button for Mobile */}
          <ButtonHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        {isOpen && (
          <ul className="bg-green-950 px-4 py-2 space-y-2 md:hidden">
            <li>
              <a
                href="#about"
                className="hover:text-green-500 transition-colors"
              >
                Über mich
              </a>
            </li>
            <li>
              <a href="#cv" className="hover:text-green-500 transition-colors">
                Lebenslauf
              </a>
            </li>
            <li>
              <a
                href="#languages"
                className="hover:text-green-500 transition-colors"
              >
                Programmiersprachen
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
