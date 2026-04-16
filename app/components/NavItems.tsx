"use client";

import { useEffect, useState } from "react";
import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-erica",
});

const navItems = [
  { id: "home", label: "HOME" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "interests", label: "INTRESTS" },
  { id: "contact", label: "CONTACT" },
];

export default function NavItems() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const viewportMiddle = window.innerHeight * 0.45;
      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection(closestSection.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <div className="fixed  right-4 top-4 z-40 lg:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-black/25 bg-[#ffdd00]/90 px-5 py-2 text-xs uppercase tracking-[0.35em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`fixed inset-0  z-30 bg-[#ffdd00]/95 px-6 py-24 transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full items-center justify-end [perspective:1000px]">
          <div className="flex flex-col items-end origin-right rotate-y-[-60deg] -skew-y-[4deg]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`${ericaOne.className} bg-transparent p-1 text-right text-[5.8rem] leading-[0.8] transition-all duration-300 sm:text-[3.8rem] ${
                    isActive
                      ? "scale-110 text-[#af0000]"
                      : "text-transparent [-webkit-text-stroke:1.5px_black] "
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-y-0 right-0 z-20 hidden items-center pr-8 lg:flex xl:pr-0">
        <div className="pointer-events-auto pr-12 [perspective:1000px]">
          <div className="flex flex-col items-end origin-right rotate-y-[-60deg] -skew-y-[4deg]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`${ericaOne.className} cursor-pointer bg-transparent p-2 text-right text-[4.8rem] leading-[0.8] transition-all duration-300 md:text-[7.1rem] ${
                    isActive
                      ? "scale-110 text-[#af0000]"
                      : "text-transparent [-webkit-text-stroke:1.7px_black] opacity-70"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
