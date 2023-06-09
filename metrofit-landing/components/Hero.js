export default function Hero() {

  return (
    <div className="bg-black h-[90vh] w-full p-6 flex">
      <div className="w-1/2 px-10 flex flex-col pt-6">
        <h1 className="font-monomaniac text-[20rem] leading-[16rem]">Metro</h1>
        <h1 className="font-monomaniac text-[20rem] leading-[16rem] mb-14">Fit</h1>
        <p className="text-[3.1rem] leading-[3.1rem] mt-3 mb-8 font-montserrat">Join The <span className="underline underline-offset-[8px]">Movement Community.</span></p>
        <button className="py-4 border-4 border-[#e0e111] text-[#e0e111] text-5xl w-4/6 font-montserrat font-bold">SECURE YOUR SPOT</button>
      </div>
      <div className="h-full w-1/2 flex justify-center">
        <img src='/images/hero.svg'></img>
      </div>
    </div>
  )
}