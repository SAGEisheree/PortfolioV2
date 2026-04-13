import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const projects = [
  {
    number: "01",
    title: "Canvasmith",
    subtitle: "Creative portfolio builder",
    description:
      "A visual portfolio generator for designers and students with drag-and-drop sections, custom themes, and fast live previews.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    number: "02",
    title: "Pulseboard",
    subtitle: "Realtime team dashboard",
    description:
      "A focused dashboard for tracking tasks, releases, and quick project updates with a clean interface and strong visual hierarchy.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    number: "03",
    title: "Bytebrew",
    subtitle: "Cafe discovery web app",
    description:
      "A stylish location-based app for finding work-friendly cafes, saving favorites, and browsing spaces by vibe, Wi-Fi, and coffee quality.",
    stack: ["Next.js", "Maps API", "Prisma", "PostgreSQL"],
  },
];

export default function ProjectsItems() {
  return (
    <section className="flex min-h-screen scale-90 items-center py-20 text-black">
      <div className="w-[48rem] space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">
            Selected Works
          </p>
          <h2 className={`${ericaOne.className} text-5xl uppercase sm:text-6xl lg:text-7xl`}>
            Projects
          </h2>
          <p
            className="max-w-3xl text-lg leading-relaxed text-black/75 sm:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            A few imagined builds that lean into product thinking, interface
            design, and frontend polish.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-5 rounded-[2rem] border border-black/15 bg-white/20 p-6 backdrop-blur-sm"
            >
              <div className="text-sm uppercase tracking-[0.35em] text-black/55">
                {project.number}
              </div>

              <div className="space-y-3">
                <h3 className={`${ericaOne.className} text-3xl uppercase sm:text-4xl`}>
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.25em] text-[#8f3f10]">
                  {project.subtitle}
                </p>
                <p
                  className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.18em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
