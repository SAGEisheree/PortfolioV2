import { Erica_One } from 'next/font/google';
import Image from 'next/image'; // 1. Import this
import NavItems from './components/NavItems';
import HomeItems from './components/homeItems';
import SkillItems from './components/SkillsItems';
import Intrests from './components/intrests';
import Contact from './components/contact';
import ProjectsItems from './components/Projects';
import Mcbg from './pics/mcbg2.png';

const ericaOne = Erica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-erica',
});

export default function Home() {
  return (
<div className="relative px-4 py-6 sm:px-6 sm:py-8 lg:px-14 lg:py-10">
      
      {/* Fixed Background Container */}
      <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
     <Image 
  src={Mcbg} 
  alt="background" 
  fill 
  priority
  className="object-cover max-md:scale-110 max-md:-translate-x-4" 
/>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex min-w-0 flex-1 flex-col justify-end lg:pr-[22rem]">
          <section id="home">
            <HomeItems />
          </section>
          <section id="skills">
            <SkillItems />
          </section>
          <section id="projects">
            <ProjectsItems />
          </section>
          <section id="interests">
            <Intrests />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
      
      <NavItems />
    </div>
  );
}