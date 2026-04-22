"use client";

import { useEffect, useState } from "react";
import { Erica_One } from "next/font/google";

const ericaOne = Erica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-erica",
});

const navItems = [
  { id: "home", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "interests", label: "INTERESTS" }, // Fixed typo
  { id: "contact", label: "CONTACT" },
];

export default function NavItems() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Scroll Logic (Unchanged) ---
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

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
      if (closestSection) setActiveSection(closestSection.id);
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  // --- Helper for Shared Styles ---
  const getLinkStyles = (isActive: boolean) => `
    ${ericaOne.className} bg-transparent p-1 text-right leading-[0.8] transition-all duration-300
    ${isActive 
      ? "scale-110 text-[#af0000] [-webkit-text-stroke:0px]" 
      : "text-white opacity-80 hover:opacity-100 [-webkit-text-stroke:0px]"
    }
  `;

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed right-4 top-4 z-50 lg:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-white/20 bg-black/50 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-xl backdrop-blur-md"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Overlay - Now Transparent with Backdrop Blur */}
      <div
        className={`fixed inset-0 z-40 px-6 py-24 transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100 backdrop-blur-md bg-black/20" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full items-center justify-end [perspective:1000px]">
          <div className="flex flex-col items-end origin-right rotate-y-[-60deg] -skew-y-[4deg]">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`${getLinkStyles(activeSection === item.id)} text-[4.5rem] sm:text-[5.8rem]`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="pointer-events-none fixed inset-y-0 right-0 z-20 hidden items-center pr-8 lg:flex xl:pr-0">
        <div className="pointer-events-auto pr-12 [perspective:1000px]">
          <div className="flex flex-col items-end origin-right rotate-y-[-60deg] -skew-y-[4deg]">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`${getLinkStyles(activeSection === item.id)} text-[4.8rem] md:text-[7.1rem] p-2`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}