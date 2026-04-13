import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

export default function HomeItems() {
  return (
    <section className="relative flex min-h-screen items-center bg-transparent px-6 py-20 text-black sm:px-10 lg:px-16">
      <div className="w-full max-w-5xl">
        <div className="mb-6 inline-block border border-[#b14405] px-5 py-3 text-xs uppercase tracking-[0.45em] text-[#5a2b10]">
          Wanna be Software Engineer
        </div>

        <div className="leading-none">
          <h2
            className={`${ericaOne.className} -mt-2 text-[5.1rem] uppercase text-transparent [-webkit-text-stroke:1.5px_black] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[4.6rem]`}
          >
            Hi, I'm
          </h2>
          <h1
            className={`${ericaOne.className}  text-[5.3rem] uppercase sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem]`}
          >
            Sage
          </h1>
        </div>

        <div
          className="mt-10 max-w-3xl text-2xl leading-[1.35] text-black/85 sm:text-3xl"
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

        <div className="mt-12 flex flex-wrap gap-4">
          <button
            type="button"
            className="border border-[#ff7a2f] bg-[#ff8a4c] px-8 py-4 text-xs uppercase tracking-[0.35em] text-black transition-transform duration-200 hover:-translate-y-1"
          >
            Reach Out
          </button>
          <button
            type="button"
            className="border border-black/20 px-8 py-4 text-xs uppercase tracking-[0.35em] text-black/75 transition-colors duration-200 hover:border-black hover:text-black"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
