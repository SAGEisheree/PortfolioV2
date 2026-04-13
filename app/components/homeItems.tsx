import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeItems() {
  return (
    <section className="relative flex min-h-screen items-center bg-transparent py-16 text-black sm:py-20">
      <div className="w-full max-w-3xl lg:max-w-4xl">
        <div className="mb-6 inline-block border border-[#b14405] px-4 py-3 text-[10px] uppercase tracking-[0.35em] text-[#5a2b10] sm:px-5 sm:text-xs sm:tracking-[0.45em]">
          Wanna be Software Engineer
        </div>

        <div className="leading-none">
          <h2
            className={`${ericaOne.className} -mt-1 text-[2.2rem] uppercase text-transparent [-webkit-text-stroke:1.2px_black] sm:-mt-2 sm:text-[2.8rem] md:text-[3.2rem] lg:text-[4.6rem]`}
          >
            Hi, I'm
          </h2>
          <h1
            className={`${ericaOne.className} text-[4.3rem] uppercase sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem]`}
          >
            Sage
          </h1>
        </div>

        <div
          className="mt-8 max-w-2xl text-xl leading-[1.35] text-black/85 sm:mt-10 sm:text-2xl lg:max-w-3xl lg:text-3xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          <p>
            Fell in love with tech since years. I belive in creativity than AI slop with fancy gradients.
            <span className="text-[#d9580d]">
              {" "}
              I love code, art and coffee.
            </span>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
          <button
            type="button"
            className="border border-[#ff7a2f] bg-[#ff8a4c] px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-black transition-transform duration-200 hover:-translate-y-1 sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.35em]"
          >
            Reach Out
          </button>
          <button
            type="button"
            className="border border-black/20 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-black/75 transition-colors duration-200 hover:border-black hover:text-black sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.35em]"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
