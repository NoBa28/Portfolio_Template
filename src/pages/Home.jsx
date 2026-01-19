import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import {
  TYPE_SPEED_HERO,
  TYPE_SPEED_TEXT,
  TYPE_SPEED_TITLE,
} from "../constants";

const focusCards = [
  {
    title: "Frontend",
    text: "React, Vite, Tailwind CSS und moderne Komponentenarchitekturen.",
  },
  {
    title: "Code Quality",
    text: "Klare Strukturen, Wiederverwendbarkeit, Performance und Lesbarkeit.",
  },
  {
    title: "UX & Design",
    text: "Reduzierte Designs, logische Nutzerführung und angenehme Interaktionen.",
  },
];

export default function Home() {
  return (
    <SequentialProvider>
      {/* HERO */}
      <section className="bg-slate-900 text-slate-100 relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, ich bin{" "}
          <Typewriter
            text="[Noah]"
            className="text-cyan-400 typewriter-cursor"
            speed={TYPE_SPEED_HERO}
          />
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
          <Typewriter
            text="Frontend Developer mit Fokus auf moderne, performante und benutzerfreundliche Webanwendungen."
            className="typewriter-cursor"
            speed={TYPE_SPEED_TEXT}
          />
        </p>

        <p className="max-w-2xl text-slate-400 leading-relaxed">
          <Typewriter
            text="Dieses Portfolio gibt dir einen Überblick über meine Arbeitsweise, meinen Hintergrund und meine technischen Schwerpunkte."
            className="typewriter-cursor"
            speed={TYPE_SPEED_TEXT}
          />
        </p>
      </section>

      <PageContainer>
        {/* SECTION: ARBEITSWEISE */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              <Typewriter
                text="Arbeitsweise & Anspruch"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
              <Typewriter
                text="Ich lege Wert auf sauberen, wartbaren Code und klare Benutzeroberflächen. Mein Fokus liegt darauf, technische Lösungen mit durchdachtem Design zu verbinden – ruhig, strukturiert und funktional."
                className="typewriter-cursor"
                speed={TYPE_SPEED_TEXT}
              />
            </p>
          </div>
        </section>

        {/* SECTION: FOKUS */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-white">
              <Typewriter
                text="Technischer Fokus"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {focusCards.map(({ title, text }) => (
                <div
                  key={title}
                  className="bg-slate-800/70 backdrop-blur rounded-2xl p-6 transition-transform transform hover:translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <div className="flex items-center mb-2">
                    <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2"></span>
                    <h3 className="text-lg font-semibold text-cyan-400">
                      <Typewriter
                        text={title}
                        className="typewriter-cursor"
                        speed={TYPE_SPEED_TITLE}
                      />
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <Typewriter
                      text={text}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TEXT}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageContainer>
    </SequentialProvider>
  );
}
