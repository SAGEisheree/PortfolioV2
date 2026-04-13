import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
});

const contactInfo = [
  { label: "Email", value: "sage.builds@proton.me" },
  { label: "Instagram", value: "@sageonweb" },
  { label: "LinkedIn", value: "linkedin.com/in/sage-dev" },
  { label: "Location", value: "Kerala, India" },
];

export default function Contact() {
  return (
    <section className="flex min-h-screen scale-90 items-center py-20 text-black">
      <div className="w-[48rem] space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-black/60">
            Let&apos;s Build
          </p>
          <h2 className={`${ericaOne.className} text-5xl uppercase sm:text-6xl lg:text-7xl`}>
            Contact
          </h2>
          <p
            className="max-w-3xl text-lg leading-relaxed text-black/75 sm:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Open to freelance work, interesting collaborations, student
            projects, and conversations about design-heavy frontend ideas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-black/15 bg-white/20 p-6 backdrop-blur-sm"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8f3f10]">
                {item.label}
              </p>
              <p className="text-2xl uppercase leading-tight sm:text-3xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          If the project has a strong visual angle, a fun interface challenge,
          or just needs someone who cares about details, I am probably in.
        </div>
      </div>
    </section>
  );
}
