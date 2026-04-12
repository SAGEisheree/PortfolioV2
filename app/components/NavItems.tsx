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

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.35, 0.6, 0.8],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex justify-end items-center pr-10">
      <div className="[perspective:1000px] pointer-events-auto">
        <div className="flex flex-col scale-120 items-end origin-right transform-gpu rotate-y-[-60deg] -skew-y-[4deg]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <div
                key={item.id}
                className={`${ericaOne.className} text-9xl duration-500 leading-[0.8] ${
                  isActive
                    ? "text-black"
                    : "text-transparent [-webkit-text-stroke:2px_black] "
                }`}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
