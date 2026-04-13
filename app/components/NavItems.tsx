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

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
    <div className="fixed ml-96 mt-16 scale-90 inset-0 pointer-events-none z-10 flex justify-end">
      <div className="[perspective:1000px] pointer-events-auto">
        <div className="flex flex-col scale-120 items-end origin-right transform-gpu rotate-y-[-60deg] -skew-y-[4deg]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`${ericaOne.className} cursor-pointer bg-transparent text-right text-9xl leading-[0.8] transition-all duration-300 ${
                  isActive
                    ? "text-[#af0000] scale-120 p-6"
                    : "text-transparent [-webkit-text-stroke:2px_black] opacity-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
