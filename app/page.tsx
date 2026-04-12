import { Erica_One } from 'next/font/google';
import NavItems from './components/NavItems';
import HomeItems from './components/homeItems';
import SkillItems from './components/SkillsItems';

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

          <div className='fixed inset-0 bottom-0  pointer-events-none z-10 flex justify-start items-end pl-10 pb-10'>
            <div>

              <div className={`  scale-130 text-white hover:[-webkit-text-stroke:1px_black] hover:text-transparent text-5xl font-bold`}>
                SAGE
              </div>
              <div className={`${ericaOne.className} scale-130 text-white hover:[-webkit-text-stroke:0.7px_black] hover:text-transparent text-2xl font-bold`}>
                is Heree
              </div>
            </div>
          </div>
        </div>

        <NavItems />


      </div>
    </div>
  );
}
