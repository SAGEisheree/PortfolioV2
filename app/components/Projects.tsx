import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const projects = [
  {
    number: "01",
    title: "Daydex",
    subtitle: "Journal and progress tracker",
    description:
      "Journal and progress tracker for personal growth, habit building with Colorled days on calender to make sure you arent lost in the grind",
    stack: ["FastAPI", "React", "Vite", "MongoDB"],
    repoHref: "https://github.com/SAGEisheree/Mood_metric",
    visitHref: "https://daydex.vercel.app/",
  },
  {
    number: "02",
    title: "SoulDex",
    subtitle: "Fun personality tests",
    description:
      "Currently has Mental Age finder, Friendship strength Analysis. Built to learn AI API integration.",
    stack: ["GROK API", "React", "DaisyUI", "Vite"],
    repoHref: "https://github.com/SAGEisheree/WhoYouAre",
    visitHref: "https://souldex.vercel.app/",
  },
  {
    number: "03",
    title: "This portfolio",
    subtitle: "PORTFOLIO",
    description:
      "Started as a playground to learn Frontend Styling and animations.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    repoHref: "https://github.com/SAGEisheree/PortfolioV2",
    visitHref: "https://sageishere.vercel.app/",
  },
];

export default function ProjectsItems() {
  return (
    <section className="flex min-h-screen items-center py-16 text-black sm:py-20">
      <div className="w-full max-w-4xl space-y-8 sm:space-y-10">
        <div className="space-y-4 border-b border-black/15 pb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8f3f10]">
            Selected Works
          </p>
          <h2 className={`${ericaOne.className} text-4xl uppercase tracking-[-0.04em] sm:text-6xl lg:text-7xl`}>
            Projects
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Projects were built for my needs or for the thing that i thought would be fun.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-4 border border-black/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08))] backdrop-blur-sm p-5 sm:gap-5 sm:p-6"
            >
              <div className="text-xs uppercase tracking-[0.35em] text-[#8f3f10] sm:text-sm">
                {project.number}
              </div>

              <div className="space-y-3">
                <h3 className={`${ericaOne.className} text-2xl  uppercase  sm:text-3xl lg:text-4xl`}>
                  {project.title}
                </h3>
                <p className="border-b border-black/10 pb-3 text-sm uppercase tracking-[0.25em] text-black/60">
                  {project.subtitle}
                </p>
                <p
                  className="max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base lg:text-lg"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-black/20 bg-black/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.18em] sm:px-4 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border border-black bg-black px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#ffdd00] transition-colors duration-200 hover:bg-transparent hover:text-black sm:px-5 sm:text-xs"
                >
                  Repo
                </a>

                {project.visitHref ? (
                  <a
                    href={project.visitHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border border-black/45 bg-transparent px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-black transition-colors duration-200 hover:bg-black hover:text-[#ffdd00] sm:px-5 sm:text-xs"
                  >
                    Visit
                  </a>
                ) : (
                  <span className="inline-flex items-center border border-black/20 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-black/45 sm:px-5 sm:text-xs">
                    Visit Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
