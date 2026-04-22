import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const contactInfo = [
  { label: "X || Twitter", value: "@SAGE_7788" },
  { label: "Email", value: " Just X for now " },
  { label: "LinkedIn", value: " not made yet" },
  { label: "Location", value: "India" },
];

export default function Contact() {
  return (
    <section className="flex min-h-screen items-center py-16 text-black sm:py-20">
      <div className="w-full max-w-3xl space-y-8 sm:space-y-10">
        <div className="space-y-4 border-b border-black/15 pb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8f3f10]">
            Let&apos;s Build
          </p>
          <h2 className={`${ericaOne.className} text-4xl uppercase  sm:text-6xl lg:text-7xl`}>
            Contact
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Open to discuss,collab,work or idk maybe just say hi. You can expect me to be active anytime.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="border border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.07))] backdrop-blur-sm p-5 sm:p-6"
            >
              <p className="mb-3 border-b border-black/10 pb-3 text-[10px] uppercase tracking-[0.35em] text-[#8f3f10] sm:text-xs">
                {item.label}
              </p>
              <p className="text-xl uppercase leading-tight tracking-[-0.02em] sm:text-2xl lg:text-3xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base lg:text-lg"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Count me in if you got something creative to build
        </div>
      </div>
    </section>
  );
}
