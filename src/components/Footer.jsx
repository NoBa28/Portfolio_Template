import { FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 text-slate-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Noah Balzan</h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer, der komplexe Probleme in elegante digitale Lösungen verwandelt.
            </p>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Soziale Medien</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/NoBa28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <FaGithub size={18} />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/nooah28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  <FaInstagram size={18} />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-cyan-400">📧</span>
                <span className="text-slate-300">noah.balzan@bluewin.ch</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-cyan-400">📍</span>
                <span className="text-slate-300">Schweiz</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with back to top */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20
              text-cyan-300 rounded-lg transition-all duration-300 hover:scale-105 group border border-cyan-500/20"
            >
              <span>Nach oben</span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
