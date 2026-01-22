import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import { TYPE_SPEED_TITLE, TYPE_SPEED_TEXT } from "../constants";

const timeline = [
  {
    year: "2020",
    title: "Studium",
    description: "Beginn des Informatikstudiums mit Fokus auf Softwareentwicklung und Webtechnologien."
  },
  {
    year: "2022",
    title: "Erste Projekte",
    description: "Entwicklung erster vollständiger Webanwendungen mit React und Node.js."
  },
  {
    year: "2023",
    title: "Vertiefung Frontend",
    description: "Spezialisierung auf moderne Frontend-Frameworks und UI/UX-Prinzipien."
  },
  {
    year: "2024",
    title: "Professionelle Erfahrung",
    description: "Arbeit an kommerziellen Projekten und kontinuierliche Weiterentwicklung."
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
              text="Mein beruflicher Werdegang und technische Expertise im Überblick."
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
                    <div className={`flex-1 max-w-md ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    } text-center md:text-left`}>
                       <div className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6
                         hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                         border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col">
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

          {/* Skills Overview */}
          <div className="grid gap-8 md:grid-cols-3">
             {skills.map(({ category, items }) => (
               <div
                 key={category}
                 className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6
                 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                 border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col"
               >
                 <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                   <Typewriter
                     text={category}
                     className="typewriter-cursor"
                     speed={TYPE_SPEED_TITLE}
                   />
                 </h3>
                 <div className="flex flex-wrap gap-2 flex-1">
                   {items.map((skill) => (
                     <span
                       key={skill}
                       className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-lg text-sm
                       hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors"
                     >
                       {skill}
                     </span>
                   ))}
                 </div>

                 {/* Hover effect accent */}
                 <div className="mt-6 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0
                   rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
             ))}
          </div>
        </section>
      </PageContainer>
    </SequentialProvider>
  );
}
