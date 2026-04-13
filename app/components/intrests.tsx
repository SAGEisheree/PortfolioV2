import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const interests = [
  "Expressive web typography",
  "Creative coding experiments",
  "Minimal but characterful interfaces",
  "Digital art and poster-inspired layouts",
  "Design systems with personality",
  "Coffee-fueled late night building sessions",
];

export default function Intrests() {
  return (
    <section className="flex min-h-screen items-center py-16 text-black sm:py-20">
      <div className="w-full max-w-3xl space-y-8 sm:space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">
            Beyond the Stack
          </p>
          <h2 className={`${ericaOne.className} text-4xl uppercase sm:text-6xl lg:text-7xl`}>
            Intrests
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The things I naturally gravitate toward when I am not just trying
            to make something work, but trying to make it feel memorable.
          </p>
        </div>

        <div className="grid gap-4">
          {interests.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-[1.5rem] border border-black/15 bg-white/20 p-4 backdrop-blur-sm sm:rounded-[1.75rem] sm:p-5"
            >
              <span className="pt-1 text-[10px] uppercase tracking-[0.35em] text-[#8f3f10] sm:text-xs">
                0{index + 1}
              </span>
              <p className="text-lg uppercase leading-tight text-black sm:text-xl lg:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
