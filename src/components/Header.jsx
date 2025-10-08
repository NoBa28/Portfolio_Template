import HeaderIconCode from "./icons/HeaderIconCode";
import ButtonHamburger from "./ButtonHamburger";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  {
    /* Close mobile menu on outside click */
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
              <Link to="/" className="hover:text-green-500 transition-colors">
                Über mich
              </Link>
            </li>
            <li>
              <Link to="/cv" className="hover:text-green-500 transition-colors">
                Lebenslauf
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-green-500 transition-colors"
              >
                Fähigkeiten
              </Link>
            </li>
          </ul>

          {/* Hamburger Button for Mobile */}
          <ButtonHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        {isOpen && (
          <ul
            ref={mobileMenuRef}
            className="bg-green-950 px-4 py-2 space-y-2 md:hidden"
          >
            <li>
              <Link
                to="/"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Über mich
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Lebenslauf
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fähigkeiten
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
