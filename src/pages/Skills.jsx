import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import { TYPE_SPEED_TITLE, TYPE_SPEED_TEXT } from "../constants";

const skills = [
  { name: "Java", level: 5 },
  { name: "JavaScript", level: 4 },
  { name: "React", level: 3 },
  { name: "Node.js", level: 3 },
  { name: "HTML5", level: 3 },
  { name: "CSS3", level: 3 },
  { name: "Tailwind CSS", level: 3 },
  { name: "Git / GitHub", level: 4 },
  { name: "SVN (TortoiseSVN)", level: 4 },
  { name: "SQL", level: 5 },
  { name: "NoSQL", level: 4 },
  { name: "C-tree", level: 5 },
  { name: "C", level: 5 },
  { name: "C#", level: 4 },
  { name: "Python", level: 2 },
];

function Stars({ level }) {
  return (
    <div className="flex space-x-1 text-cyan-400">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < level ? "opacity-100" : "opacity-30"}`}
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

          {/* Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skills.map(({ name, level }) => (
              <div
                key={name}
                className="bg-slate-800/70 backdrop-blur rounded-2xl p-6
                hover:shadow-lg hover:shadow-cyan-500/20
                transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">
                  <Typewriter
                    text={name}
                    className="typewriter-cursor"
                    speed={TYPE_SPEED_TEXT}
                  />
                </h3>
                <Stars level={level} />
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </SequentialProvider>
  );
}
