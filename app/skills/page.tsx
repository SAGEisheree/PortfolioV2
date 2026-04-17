import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});



const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "C", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Performance Basics"],
  },
];

export default function SkillItems() {
  return (
    <section className="flex min-h-screen py-8 text-black sm:py-20">
      <div className="w-full max-w-4xl space-y-8 sm:space-y-10">
        <div className="space-y-4 border-b border-black/15 pb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8f3f10]">
            Current Toolkit
          </p>
          <h2 className={`${ericaOne.className} text-4xl uppercase tracking-[-0.04em] sm:text-6xl lg:text-7xl`}>
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
              className="border border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.08))] p-6"
            >
              <h3 className="mb-5 border-b border-black/10 pb-4 text-xl font-bold uppercase sm:text-2xl">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-black/20 bg-black/[0.03] px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] sm:px-4 sm:text-sm"
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
