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
    <section className="flex min-h-screen scale-90 items-center py-20 text-black">
      <div className="w-[48rem] space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">
            Beyond the Stack
          </p>
          <h2 className={`${ericaOne.className} text-5xl uppercase sm:text-6xl lg:text-7xl`}>
            Intrests
          </h2>
          <p
            className="max-w-3xl text-lg leading-relaxed text-black/75 sm:text-xl"
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
              className="flex items-start gap-4 rounded-[1.75rem] border border-black/15 bg-white/20 p-5 backdrop-blur-sm"
            >
              <span className="pt-1 text-xs uppercase tracking-[0.35em] text-[#8f3f10]">
                0{index + 1}
              </span>
              <p className="text-xl uppercase leading-tight text-black sm:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
