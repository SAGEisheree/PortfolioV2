import { Erica_One } from 'next/font/google';
import NavItems from './components/NavItems';
import HomeItems from './components/homeItems';
import SkillItems from './components/SkillsItems';
import Intrests from './components/intrests';
import Contact from './components/contact';
import ProjectsItems from './components/Projects';


const ericaOne = Erica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-erica',
});


export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-14 lg:py-10">
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
      <div className="">

      <NavItems />
      </div>
    </div>
  );
}
