import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <p>
          &copy; {new Date().getFullYear()} Noah Balzan. Alle Rechte
          vorbehalten.
        </p>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold mb-2">Soziale Medien</h3>
          <a
            href="https://github.com/NoBa28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/nooah28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Kontakt</h3>
          <p>E-Mail: noah.balzan@bluewin.ch</p>
        </div>
      </div>
    </footer>
  );
}
