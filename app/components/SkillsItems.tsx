const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "SCSS", "Framer Motion", "Responsive UI", "Figma to Code"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Vercel", "Component Design", "Performance Basics"],
  },
];

export default function SkillItems() {
  return (
    <section className="flex min-h-screen py-16 text-black sm:py-20">
      <div className="w-full max-w-3xl space-y-8 sm:space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">
            Current Toolkit
          </p>
          <h2 className="text-4xl font-black uppercase sm:text-6xl lg:text-8xl">
            Skills
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl">
            A web-dev focused stack with a soft spot for polished frontend work,
            reusable components, and interfaces that feel fast and intentional.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-black/15 bg-white/20 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-xl font-bold uppercase sm:text-2xl">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/20 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] sm:px-4 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
