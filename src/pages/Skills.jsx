import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import { TYPE_SPEED_TITLE, TYPE_SPEED_TEXT } from "../constants";

const skillCategories = [
  {
    category: "Programmiersprachen",
    icon: "💻",
    skills: [
      { name: "Java", level: 5 },
      { name: "C", level: 5 },
      { name: "C#", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Python", level: 2 },
    ]
  },
  {
    category: "Web-Technologien",
    icon: "🌐",
    skills: [
      { name: "React", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "HTML5", level: 3 },
      { name: "CSS3", level: 3 },
      { name: "Tailwind CSS", level: 3 },
    ]
  },
  {
    category: "Datenbanken & Tools",
    icon: "🛠️",
    skills: [
      { name: "SQL", level: 5 },
      { name: "NoSQL", level: 4 },
      { name: "C-tree", level: 5 },
      { name: "Git / GitHub", level: 4 },
      { name: "SVN (TortoiseSVN)", level: 4 },
    ]
  }
];

function Stars({ level }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg transition-colors duration-200 ${
            i < level ? "text-cyan-400" : "text-slate-600"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <SequentialProvider>
      <PageContainer>
        <section className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Typewriter
              text="Fähigkeiten"
              className="typewriter-cursor"
              speed={TYPE_SPEED_TITLE}
            />
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            <Typewriter
              text="Eine Übersicht meiner technischen Fähigkeiten. Die Sterne dienen als grobe Selbsteinschätzung meiner Erfahrung und Sicherheit im jeweiligen Bereich."
              className="typewriter-cursor"
              speed={TYPE_SPEED_TEXT}
            />
          </p>

           {/* Skills Categories */}
           <div className="grid gap-8 md:grid-cols-3">
             {skillCategories.map(({ category, icon, skills }) => (
               <div
                 key={category}
                 className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6
                 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                 border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col"
               >
                 {/* Category Header */}
                 <div className="flex items-center mb-6">
                   <span className="text-2xl mr-3">{icon}</span>
                   <h3 className="text-xl font-bold text-cyan-400">
                     <Typewriter
                       text={category}
                       className="typewriter-cursor"
                       speed={TYPE_SPEED_TITLE}
                     />
                   </h3>
                 </div>

                 {/* Skills List */}
                 <div className="space-y-4 flex-1">
                   {skills.map(({ name, level }) => (
                     <div key={name} className="flex items-center justify-between">
                       <span className="text-slate-300 text-sm font-medium">
                         <Typewriter
                           text={name}
                           className="typewriter-cursor"
                           speed={TYPE_SPEED_TEXT}
                         />
                       </span>
                       <Stars level={level} />
                     </div>
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
