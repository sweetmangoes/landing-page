import Link from "next/link";


export default function Hero() {

  return (
    <div className="bg-black w-full flex flex-col
                    lg:p-6 lg:flex-row">
      <div className="w-full flex flex-col pt-6 pl-5 items-center
                      lg:w-1/2 lg:px-10 lg:items-start">
        <h1 className="font-monomaniac text-[8rem] leading-[6rem] 
                       lg:text-[12rem] lg:leading-[10rem] 
                       xl:text-[14rem] xl:leading-[12rem]">
          Metro
        </h1>
        <h1 className="font-monomaniac text-[8rem] leading-[6rem] mb-14 
                       lg:text-[14rem] lg:leading-[10rem] lg:mb-14 
                       xl:text-[14rem] xl:leading-[12rem]">
          Fit
        </h1>
        <p className="mt-3 mb-8 font-montserrat text-4xl text-center
                      lg:text-[3.1rem] lg:leading-[3.1rem] lg:text-left
                      xl:text-[2.2rem] xl:leading-[2.2rem]">
          Join The <span className="underline underline-offset-[8px]">Movement Community.</span>
        </p>
        <Link href='/waitlist' className="py-4 border-4 flex justify-center hover:bg-amber-300 hover:text-black border-[#e0e111] text-[#e0e111] w-1/2 text-2xl font-montserrat font-bold lg:text-3xl xl:text-4xl lg:w-4/6">
          SECURE SPOT
        </Link>
      </div>
      <div className="h-full w-full flex items-center justify-center lg:w-1/2">
        <img className="lg:h-full lg:w-full" src='/images/hero.svg'></img>
      </div>
    </div>
  )
}