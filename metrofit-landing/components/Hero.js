export default function Hero() {

  return (
    <div className="bg-black w-full flex flex-col
                    lg:p-6 lg:flex-row lg:h-[90vh]">
      <div className="w-full flex flex-col pt-6 pl-5 
                      lg:w-1/2 lg:px-10">
        <h1 className="font-monomaniac text-[10rem] leading-[8rem] 
                       lg:text-[12rem] lg:leading-[10rem] 
                       xl:text-[16rem] xl:leading-[12rem]">
          Metro
        </h1>
        <h1 className="font-monomaniac text-[10rem] leading-[8rem] mb-14 
                       lg:text-[14rem] lg:leading-[10rem] lg:mb-14 
                       xl:text-[16rem] xl:leading-[12rem]">
          Fit
        </h1>
        <p className="mt-3 mb-8 font-montserrat text-4xl
                      lg:text-[3.1rem] lg:leading-[3.1rem]">
          Join The <span className="underline underline-offset-[8px]">Movement Community.</span>
        </p>
        <button className="py-4 border-4 border-[#e0e111] text-[#e0e111] w-1/2 text-2xl font-montserrat font-bold lg:text-4xl xl:text-5xl lg:w-4/6">SECURE YOUR SPOT</button>
      </div>
      <div className="h-full w-full flex items-center justify-center lg:w-1/2">
        <img src='/images/hero.svg'></img>
      </div>
    </div>
  )
}