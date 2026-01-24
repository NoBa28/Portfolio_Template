import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import {
  FaChevronDown,
  FaChartBar,
  FaCode,
  FaRocket,
  FaReact,
  FaCheckCircle,
  FaPaintBrush,
} from "react-icons/fa";
import {
  TYPE_SPEED_HERO,
  TYPE_SPEED_TEXT,
  TYPE_SPEED_TITLE,
} from "../constants";

const stats = [
  { number: "50+", label: "Projekte abgeschlossen" },
  { number: "3+", label: "Jahre Erfahrung" },
  { number: "100%", label: "Kundenzufriedenheit" },
];

const testimonials = [
  {
    text: "Noah's Arbeit ist außergewöhnlich. Sauberer Code und kreative Lösungen.",
    author: "Projektmanager, TechCorp",
  },
  {
    text: "Professionell, zuverlässig und immer pünktlich. Sehr empfehlenswert!",
    author: "CEO, StartupXYZ",
  },
];

const focusCards = [
  {
    title: "Frontend",
    text: "Moderne React-Anwendungen mit TypeScript, Tailwind CSS und optimierter Performance.",
    icon: <FaReact className=" text-3xl mb-4" />,
  },
  {
    title: "Code Quality",
    text: "Sauberer, wartbarer Code mit Fokus auf Testing, Dokumentation und Best Practices.",
    icon: <FaCheckCircle className=" text-3xl mb-4" />,
  },
  {
    title: "UX & Design",
    text: "Benutzerzentrierte Designs mit intuitiver Navigation und ansprechender Ästhetik.",
    icon: <FaPaintBrush className=" text-3xl mb-4" />,
  },
];

export default function Home() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <SequentialProvider>
      {/* HERO */}
      <section className="bg-slate-900 text-slate-100 relative overflow-hidden min-h-[60vh] md:min-h-[90vh] flex flex-col items-center justify-start md:justify-center px-6 pb-8 md:pb-32 pt-12 md:pt-0">
        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4">
              Willkommen auf meinem Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Hi, ich bin{" "}
            <span className="text-cyan-400">
              <Typewriter
                text="[Noah]"
                className="typewriter-cursor"
                speed={TYPE_SPEED_HERO}
              />
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed line-clamp-3">
            <Typewriter
              text="Full Stack Developer, der komplexe Probleme in elegante digitale Lösungen verwandelt."
              className="typewriter-cursor"
              speed={TYPE_SPEED_TEXT}
            />
          </p>

          <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed line-clamp-4">
            <Typewriter
              text="Spezialisiert auf Entwicklung und Erweiterung von Businessoftware mit Fokus auf ERP-Systeme im Unternehmensumfeld."
              className="typewriter-cursor"
              speed={TYPE_SPEED_TEXT}
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 md:gap-4 justify-center items-center">
            <button
              className="px-4 py-2 md:px-8 md:py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg md:rounded-xl
              text-xs md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Typewriter
                text="Projekte"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TEXT}
              />
            </button>
            <button
              className="px-4 py-2 md:px-8 md:py-4 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10
              font-semibold rounded-lg md:rounded-xl text-xs md:text-base transition-all duration-300 hover:shadow-lg hover:border-cyan-400"
            >
              <Typewriter
                text="Über mich"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TEXT}
              />
            </button>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div
            onClick={scrollToNextSection}
            className="w-8 h-12 border-2 border-cyan-400/30 rounded-full flex justify-center items-start pt-2.5
            hover:border-cyan-400/60 transition-all duration-500 group cursor-pointer opacity-70 hover:opacity-100"
          >
            <FaChevronDown
              size={12}
              className="text-cyan-400/80 group-hover:text-cyan-400 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <PageContainer>
        {/* STATS SECTION */}
        <section className="py-16 md:py-20 relative bg-gradient-to-b from-slate-950/30 via-slate-950/10 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {stats.map(({ number, label }) => (
                <div key={label} className="text-center group py-4 md:py-0">
                  <div className="text-3xl md:text-5xl font-bold text-cyan-400 mb-3 md:mb-2 group-hover:scale-110 transition-transform">
                    <Typewriter
                      text={number}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TITLE}
                    />
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed line-clamp-2">
                    <Typewriter
                      text={label}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TEXT}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKING METHODOLOGY */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <Typewriter
                text="Meine Arbeitsweise"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg md:text-xl mb-12">
              <Typewriter
                text="Ich kombiniere technische Exzellenz mit kreativem Design, um digitale Lösungen zu schaffen, die nicht nur funktionieren, sondern begeistern."
                className="typewriter-cursor"
                speed={TYPE_SPEED_TEXT}
              />
            </p>

            {/* Methodology steps */}
            <div className="grid gap-8 md:grid-cols-3 mt-16">
              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/30 min-h-[160px] md:min-h-[180px] flex flex-col items-center">
                <FaChartBar className=" text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  <Typewriter
                    text="Analyse"
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TITLE}
                  />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 line-clamp-3">
                  <Typewriter
                    text="Verständnis für Ihre Bedürfnisse und Ziele entwickeln."
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TEXT}
                  />
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/30 min-h-[160px] md:min-h-[180px] flex flex-col items-center">
                <FaCode className="text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  <Typewriter
                    text="Entwicklung"
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TITLE}
                  />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 line-clamp-3">
                  <Typewriter
                    text="Saubere, skalierbare Lösungen implementieren."
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TEXT}
                  />
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700/30 min-h-[160px] md:min-h-[180px] flex flex-col items-center">
                <FaRocket className="text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  <Typewriter
                    text="Optimierung"
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TITLE}
                  />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 line-clamp-3">
                  <Typewriter
                    text="Performance und User Experience kontinuierlich verbessern."
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TEXT}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              <Typewriter
                text="Was andere sagen"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map(({ text, author }) => (
                <div
                  key={author}
                  className="bg-slate-800/70 backdrop-blur rounded-2xl p-8 border border-slate-700/50 min-h-[200px] flex flex-col"
                >
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic flex-1 line-clamp-6">
                    <Typewriter
                      text={text}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TEXT}
                    />
                  </p>
                  <p className="text-cyan-400 font-semibold mt-auto">
                    <Typewriter
                      text={`- ${author}`}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TEXT}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS CARDS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                <Typewriter
                  text="Technischer Fokus"
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TITLE}
                />
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                <Typewriter
                  text="Meine Kernkompetenzen und Spezialisierungen im Überblick"
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TEXT}
                />
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 grid-auto-rows-1fr">
              {focusCards.map(({ title, text, icon }) => (
                <div
                  key={title}
                  className="group bg-slate-800/70 backdrop-blur rounded-2xl p-8
                  hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                  border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col"
                >
                  <div className="flex justify-center items-center mb-4">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">
                    <Typewriter
                      text={title}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TITLE}
                    />
                  </h3>
                  <p className="text-slate-300 leading-relaxed flex-1 line-clamp-4 md:line-clamp-5">
                    <Typewriter
                      text={text}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TEXT}
                    />
                  </p>

                  {/* Hover effect accent */}
                  <div
                    className="mt-6 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0
                    rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageContainer>
    </SequentialProvider>
  );
}
