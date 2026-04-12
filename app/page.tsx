import { Erica_One } from 'next/font/google';


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
          <div className='[-webkit-text-stroke:1px_black]'>
          <div className={`${ericaOne.className} text-5xl font-bold text-black transition-colors duration-200 hover:text-transparent`}>
            SAGE
          </div>
          <div className={`${ericaOne.className} text-2xl font-bold`}>
            is Heree
          </div>
          </div>


        </div>




           <div className="[perspective:1000px]  scale-120 w-full pr-16 flex flex-col items-end">

          <div className="flex flex-col items-end transform-gpu rotate-y-[-60deg] -skew-y-[4deg] origin-right">

            <div className={`${ericaOne.className} text-9xl leading-[0.8] text-black`}>
              HOME
            </div>

            <div className={`${ericaOne.className} text-9xl leading-[0.8] text-transparent [-webkit-text-stroke:2px_black]`}>
              SKILLS
            </div>

            <div className={`${ericaOne.className} text-9xl leading-[0.8] text-transparent [-webkit-text-stroke:2px_black]`}>
              PROJECTS
            </div>

            <div className={`${ericaOne.className} text-9xl leading-[0.8] text-transparent [-webkit-text-stroke:2px_black]`}>
              INTRESTS
            </div>
            <div className={`${ericaOne.className} text-9xl leading-[0.8] text-transparent [-webkit-text-stroke:2px_black]`}>
              CONTACT
            </div>

          </div>
        </div>


        
      </div>
    </div>
  );
}
