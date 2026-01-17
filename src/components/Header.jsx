import HeaderIconCode from "./icons/HeaderIconCode";
import ButtonHamburger from "./ButtonHamburger";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation(); // aktueller Pfad

  // Close mobile menu on outside click
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

  const navLinks = [
    { to: "/", label: "Startseite" },
    { to: "/about", label: "Über mich" },
    { to: "/cv", label: "Lebenslauf" },
    { to: "/skills", label: "Fähigkeiten" },
  ];

  const getLinkClass = (path) =>
    `transition-colors ${
      location.pathname === path
        ? "text-cyan-400 font-semibold"
        : "text-slate-200 hover:text-cyan-400"
    }`;

  return (
    <header>
      <nav className="bg-slate-950 text-slate-200 border-b border-slate-800 w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Logo + Titel */}
          <div className="flex items-center space-x-2">
            <HeaderIconCode className="inline align-middle w-5 h-5 text-white" />
            <h1 className="text-2xl font-bold">Noah Balzan</h1>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={getLinkClass(to)}>
                  {/* Graues "//" wie Kommentar */}
                  <span className="text-slate-500">// </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button for Mobile */}
          <ButtonHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Mobile Navigation Links */}
        {isOpen && (
          <ul
            ref={mobileMenuRef}
            className="bg-slate-950 border-t border-slate-800 px-4 py-3 space-y-2 md:hidden"
          >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={getLinkClass(to)}
                >
                  <span className="text-slate-500">// </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
