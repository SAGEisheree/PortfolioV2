"use client";

import Link from "next/link";
import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-erica",
});

export default function NavItems() {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-20 flex items-center pr-3 sm:pr-5 lg:pr-8">
      <div className="pointer-events-auto pr-2 [perspective:1000px] sm:pr-4 lg:pr-12">
        <div className="flex flex-col items-end origin-right rotate-y-[-60deg] -skew-y-[4deg]">
          <Link
            href="/about"
            className={`${ericaOne.className} absolute -translate-x-1 -translate-y-45 rotate-2 cursor-pointer bg-transparent p-1 text-right text-[5rem] leading-[0.8] text-transparent transition-all duration-300 hover:scale-110 hover:text-[#0029af] hover:[-webkit-text-stroke:2px_transparent] [-webkit-text-stroke:2px_black] opacity-70 md:pr-64 md:text-[8rem]`}
          >
            HOME
          </Link>

          <Link
            href="/skills"
            className={`${ericaOne.className} absolute -translate-x-1 -translate-y-22 -rotate-2 cursor-pointer bg-transparent p-1 text-right text-[5rem] leading-[0.8] text-transparent transition-all duration-300 hover:scale-110 hover:text-[#0029af] hover:[-webkit-text-stroke:2px_transparent] [-webkit-text-stroke:2px_black] opacity-70 md:pr-64 md:text-[8rem]`}
          >
            SKILLS
          </Link>

          <Link
            href="/projects"
            className={`${ericaOne.className} rotate-0 cursor-pointer bg-transparent p-1 text-right text-[5rem] leading-[0.8] text-transparent transition-all duration-300 hover:scale-110 hover:text-[#0029af] hover:[-webkit-text-stroke:2px_transparent] [-webkit-text-stroke:2px_black] opacity-70 md:pr-64 md:text-[8rem]`}
          >
            PROJECTS
          </Link>

          <Link
            href="/intrests"
            className={`${ericaOne.className} rotate-0 cursor-pointer bg-transparent p-1 text-right text-[5rem] leading-[0.8] text-transparent transition-all duration-300 hover:scale-110 hover:text-[#0029af] hover:[-webkit-text-stroke:2px_transparent] [-webkit-text-stroke:2px_black] opacity-70 md:pr-64 md:text-[8rem]`}
          >
            INTERESTS
          </Link>

          <Link
            href="/socials"
            className={`${ericaOne.className} rotate-0 cursor-pointer bg-transparent p-1 text-right text-[5rem] leading-[0.8] text-transparent transition-all duration-300 hover:scale-110 hover:text-[#0029af] hover:[-webkit-text-stroke:2px_transparent] [-webkit-text-stroke:2px_black] opacity-70 md:pr-64 md:text-[8rem]`}
          >
            SOCIALS
          </Link>
        </div>
      </div>
    </div>
  );
}
