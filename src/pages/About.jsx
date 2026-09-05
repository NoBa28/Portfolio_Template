import Typewriter from "../components/Typewriter";
import { SequentialProvider } from "../components/SequentialController";
import PageContainer from "../components/PageContainer";
import { TYPE_SPEED_TITLE, TYPE_SPEED_TEXT } from "../constants";
import { FaBullseye, FaLightbulb, FaUsers, FaBook } from "react-icons/fa";

const values = [
  {
    icon: <FaBullseye className=" text-3xl mb-4" />,
    title: "Präzision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaLightbulb className=" text-3xl mb-4" />,
    title: "Innovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaUsers className=" text-3xl mb-4" />,
    title: "Zusammenarbeit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaBook className=" text-3xl mb-4" />,
    title: "Lernen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const personalInterests = [
  {
    category: "Technologie",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Integer posuere erat a ante",
    ],
  },
  {
    category: "Persönlich",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Integer posuere erat a ante",
    ],
  },
  {
    category: "Community",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Integer posuere erat a ante",
    ],
  },
];

export default function About() {
  return (
    <SequentialProvider>
      <PageContainer>
        <section className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Typewriter
              text="Über mich"
              className="typewriter-cursor"
              speed={TYPE_SPEED_TITLE}
            />
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
            <Typewriter
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              className="typewriter-cursor"
              speed={TYPE_SPEED_TEXT}
            />
          </p>

          {/* Hero Personal Section */}
          <div className="relative mb-12 md:mb-24">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 rounded-3xl"></div>

            <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-4 md:p-8 lg:p-12 border border-slate-700/50">
              <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
                {/* Personal Text */}
                <div className="space-y-6 md:space-y-8 order-2 md:order-1 md:justify-self-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                      <Typewriter
                        text="Max Mustermann"
                        className="typewriter-cursor"
                        speed={TYPE_SPEED_TITLE}
                      />
                    </h2>
                    <p className="text-cyan-400 text-base md:text-lg font-medium mb-4 md:mb-6">
                      <Typewriter
                        text="Lorem ipsum dolor sit amet"
                        className="typewriter-cursor"
                        speed={TYPE_SPEED_TEXT}
                      />
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                      <Typewriter
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                        className="typewriter-cursor"
                        speed={TYPE_SPEED_TEXT}
                      />
                    </p>
                  </div>
                </div>

                {/* Enhanced Placeholder Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>

                    <div
                      className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800/70 backdrop-blur rounded-3xl
                      flex items-center justify-center border-2 border-dashed border-slate-600
                      hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      <div className="text-center text-slate-500">
                        <div className="text-4xl md:text-6xl mb-4 md:mb-6 font-bold text-cyan-400">
                          MM
                        </div>
                        <p className="text-base md:text-lg font-medium text-slate-400 mb-2">
                          Max Mustermann
                        </p>
                        <p className="text-xs md:text-sm text-slate-500">
                          Berufsbezeichnung
                        </p>
                        <div className="mt-3 md:mt-4 flex justify-center space-x-2">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="text-center mb-24">
            <div
              className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50
              backdrop-blur rounded-2xl border border-slate-700/50 shadow-xl"
            >
              <blockquote className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
                <Typewriter
                  text='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis."'
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TEXT}
                />
              </blockquote>
              <cite className="text-cyan-400 text-lg font-semibold">
                <Typewriter
                  text="- Lorem ipsum dolor sit amet"
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TEXT}
                />
              </cite>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">
              <Typewriter
                text="Meine Kernwerte"
                className="typewriter-cursor"
                speed={TYPE_SPEED_TITLE}
              />
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              <Typewriter
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="typewriter-cursor"
                speed={TYPE_SPEED_TEXT}
              />
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6 text-center
                  hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
                  border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col"
                >
                  {/* Icon */}
                  <div className="flex justify-center items-center mb-4">
                    {icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    <Typewriter
                      text={title}
                      className="typewriter-cursor"
                      speed={TYPE_SPEED_TITLE}
                    />
                  </h3>

                  <p className="text-slate-300 leading-relaxed flex-1">
                    <Typewriter
                      text={description}
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

          {/* Interests Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <Typewriter
                  text="Außerhalb des Codes"
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TITLE}
                />
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                <Typewriter
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  className="typewriter-cursor"
                  speed={TYPE_SPEED_TEXT}
                />
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {personalInterests.map(({ category, items }) => (
                <div
                  key={category}
                  className="group bg-gradient-to-br from-slate-800/70 to-slate-900/50
                   backdrop-blur rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/20
                   transition-all duration-300 hover:-translate-y-2 border border-slate-700/30 hover:border-cyan-500/30
                   min-h-[250px] md:min-h-[280px] flex flex-col"
                >
                  {/* Category header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">
                      <Typewriter
                        text={category}
                        className="typewriter-cursor"
                        speed={TYPE_SPEED_TITLE}
                      />
                    </h3>
                  </div>

                  {/* Interest items */}
                  <div className="space-y-4 flex-1">
                    {items.map((item) => (
                      <div key={item} className="flex items-start group/item">
                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0
                           group-hover/item:scale-125 transition-transform duration-200"
                        ></div>
                        <span className="text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors">
                          <Typewriter
                            text={item}
                            className="typewriter-cursor"
                            speed={TYPE_SPEED_TEXT}
                          />
                        </span>
                      </div>
                    ))}
                  </div>

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
