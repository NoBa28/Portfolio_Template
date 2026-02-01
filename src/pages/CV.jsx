import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import { TYPE_SPEED_TITLE, TYPE_SPEED_TEXT } from "../constants";

const timeline = [
  {
    year: "2005 - 2013",
    title: "Primarschule",
    description: "Primarschule Notker, Gossau SG."
  },
  {
    year: "2013 - 2016",
    title: "Sekundarschule",
    description: "Sekundarschule, Oberstufenzentrum Buechenwald, Gossau SG."
  },
  {
    year: "2016 - 2020",
    title: "Berufslehre: Schreiner",
    description: "Berufslehre als Schreiner EFZ bei der HR Rechsteiner AG, Gossau SG."
  },
  {
    year: "Aug. 2020 - Dez. 2020",
    title: "Schreiner",
    description: "Berufstätigkeit als Schreiner bei der Koster Holzwelten AG, Arnegg SG."
  },
  {
    year: "Jan. 2021 - Mai 2021",
    title: "Rekrutenschule",
    description: "Absolvierung der Rekrutenschule der Schweizer Armee."
  },
  {
    year: "Aug. 2021 - Aug. 2025",
    title: "Berufslehre: Informatiker",
    description:
      "Berufslehre als Informatiker EFZ, Fachrichtung Applikationsentwicklung, bei der Abacus Research AG, Wittenbach SG."
  },
  {
    year: "Aug. 2025 - heute",
    title: "Informatiker",
    description: "Berufstätigkeit als Informatiker bei der Abacus Research AG, Wittenbach SG."
  }
];

const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] }
];

export default function CV() {
  return (
    <SequentialProvider>
      <PageContainer>
        <section className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Typewriter
              text="Lebenslauf"
              className="typewriter-cursor"
              speed={TYPE_SPEED_TITLE}
            />
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            <Typewriter
              text="Meine Grundbildung, Ausbildungen sowie der berufliche Werdegang im Überblick."
              className="typewriter-cursor"
              speed={TYPE_SPEED_TEXT}
            />
          </p>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-white">
              <Typewriter
                text="Beruflicher Werdegang"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-cyan-400/30 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map(({ year, title, description }, index) => (
                  <div
                    key={year}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 relative z-10 mx-auto md:mx-0"></div>

                    {/* Content */}
                    <div className={`flex-1 w-full md:max-w-md ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    } text-center md:text-left`}>
                       <div className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6
                         hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                         border border-slate-700/50 hover:border-cyan-500/30 min-h-[220px] md:min-h-[230px] flex flex-col">
                         <div className="text-cyan-400 font-semibold mb-2">
                           <Typewriter
                             text={year}
                             className="typewriter-cursor"
                             speed={TYPE_SPEED_TITLE}
                           />
                         </div>
                         <h3 className="text-lg font-semibold text-white mb-2">
                           <Typewriter
                             text={title}
                             className="typewriter-cursor"
                             speed={TYPE_SPEED_TITLE}
                           />
                         </h3>
                         <p className="text-slate-300 text-sm leading-relaxed flex-1">
                           <Typewriter
                             text={description}
                             className="typewriter-cursor"
                             speed={TYPE_SPEED_TEXT}
                           />
                         </p>

                         {/* Hover effect accent */}
                         <div className="mt-6 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0
                           rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </SequentialProvider>
  );
}
