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
    <div className=" p-14 ">
      <div className="flex justify-between flex-row ">


        <div className='flex flex-col justify-end'>
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


        <div className=''>
          <NavItems />
        </div>


      </div>
    </div>
  );
}
