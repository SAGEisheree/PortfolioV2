import { Erica_One } from 'next/font/google';


const ericaOne = Erica_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-erica', 
});


export default function Home() {
  return (
    <div className=" p-14 ">
      <div className="flex flex-row justify-between">
        <div>
          <div className={`${ericaOne.className} text-4xl font-bold`}>
            SAGE
          </div>
          <div className={`${ericaOne.className} text-2xl font-bold`}>
            DEV
          </div>
        </div>


        <div className="flex  w-screen rotate-y-[-40deg] -skew-y-[4deg] flex-col items-end ">

          <div className={`${ericaOne.className} text-9xl  font-black text-black`}>
            HOME
          </div>
          <div className={`${ericaOne.className} text-9xl font-black text-black`}>
            SKILLS
          </div>
                    <div className={`${ericaOne.className} text-9xl font-black text-black`}>
            PROJECTS
          </div>
                    <div className={`${ericaOne.className} text-9xl font-black text-black`}>
            CONTACT
          </div>
        </div>


      </div>
    </div>
  );
}
