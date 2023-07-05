export default function Contact(){
  return(
    <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 w-full flex flex-col
                    ">
      <div className="w-full flex flex-col items-center justify-between p-10 font-montserrat h-4/5
                      lg:flex-row lg:h-4/5">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-2xl mt-3 text-black font-montserrat font-extrabold">
            Help me empower the fitness community and build a stronger and healthier city. 
          </h1>
          <p className="text-xl lg:text-lg mt-4 text-black font-montserrat">
            To build a healthier and stronger city, we need to empower the fitness community by providing affordability, accessibility, and flexibility. 
          </p>
          <p className="text-xl lg:text-lg mt-4 text-black font-montserrat italic">
            Contact me for the details: christian@curate.family
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="" src='/images/photocontact.svg'></img>
          <p className="text-4xl mt-3 font-monomaniac text-black">Christian Alphonse, Founder</p>
        </div>
      </div>
    </div>
  )
}