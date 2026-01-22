import HeaderIconCode from "./icons/HeaderIconCode";
import ButtonHamburger from "./ButtonHamburger";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation(); // current path

  // close mobile menu on outside click
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
      <nav className="bg-slate-950/95 backdrop-blur-md text-slate-200 border-b border-slate-800/50 w-full fixed top-0 left-0 z-50 shadow-lg shadow-slate-900/20">
        <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center">
          {/* logo + title */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors">
              <HeaderIconCode className="w-5 h-5 text-cyan-400" />
            </div>
            <h1 className="text-xl font-bold text-white hover:text-cyan-300 transition-colors">Noah Balzan</h1>
          </Link>

          {/* desktop navigation links */}
          <ul className="hidden md:flex space-x-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`${getLinkClass(to)} px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 relative group`}
                >
                  {/* gray "//" like comment */}
                  <span className="text-slate-500">// </span>
                  {label}
                  {/* Active indicator */}
                  {location.pathname === to && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* hamburger button for mobile */}
          <ButtonHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* mobile navigation links */}
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
