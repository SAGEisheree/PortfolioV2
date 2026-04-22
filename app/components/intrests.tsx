import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const interests = [
  "Digital Art",
  "Faceless Content Creation",
  "Making Short Comics",
  "Anime",
  "No Life Gaming",
  "Coffee-fueled late night sessions",
];

export default function Intrests() {
  return (
    <section className="flex min-h-screen items-center py-16 text-black sm:py-20">
      <div className="w-full max-w-3xl space-y-8 sm:space-y-10">
        <div className="space-y-4 border-b border-black/15 pb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8f3f10]">
            Beyond the Stack
          </p>
          <h2 className={`${ericaOne.className} text-4xl uppercase  sm:text-6xl lg:text-7xl`}>
            Intrests
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Things that I use to escape the world
          </p>
        </div>

        <div className="grid gap-4">
          {interests.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 border border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.07))] backdrop-blur-sm p-4 sm:p-5"
            >
              <span className="min-w-10 pt-1 text-[10px] uppercase tracking-[0.35em] text-[#8f3f10] sm:text-xs">
                0{index + 1}
              </span>
              <p className="text-lg uppercase leading-tight tracking-[-0.02em] text-black sm:text-xl lg:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
