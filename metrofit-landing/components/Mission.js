export default function Mission() {

  return (
    <div className="bg-white text-black w-full flex flex-col
                    lg:p-6 lg:flex-row lg:h-[90vh]">
      <div className="h-1/2 w-full flex items-center justify-center 
                      lg:w-1/2 lg:h-full">
        <img className=" lg:w-full" src='/images/Mission.svg'></img>
      </div>
      <div className="h-1/2 flex flex-col justify-center px-4 text-xl 
                      lg:w-3/5 lg:h-full lg:px-14 ">
        <h3 className="font-monomaniac mb-5
                       lg:text-[3.5rem] lg:leading-[3.5rem] 
                       xl:text-[3rem] xl:leading-[3rem] mt-4">
          MISSION
        </h3>
        <p className="font-montserrat mb-5 
                      lg:text-[1rem] lg:leading-[1.4rem]
                      xl:text-xl">
          Our mission is to provide access, affordability, and flexible gym classes to people across the city while helping individual gyms, fitness studios and instructors increase their revenue and reach.
          <br /><br />
          We believe that everyone in a community should have the capability to access high-quality fitness classes regardless of their schedule or budget.
        </p>
        <hr className="border-black border-2" />
        <h3 className="font-monomaniac mb-5 mt-3
                       lg:text-[3.5rem] lg:leading-[3.5rem]
                       xl:text-[3rem] xl:leading-[3rem] xl:mt-0">
          VISION
        </h3>
        <p className="font-montserrat
                      lg:text-[1rem] lg:leading-[1.4rem]
                      xl:text-xl">
          Our vision is to build a stronger and healthier city by helping people achieve fitness goals while supporting local fitness instructors, gyms, and studios.
          <br /><br />
          <i>We do this by having a platform that connects people with individual gyms and fitness classes in a seamless and convenient way.</i>
          <br /><br />
        </p>
        <ul className="list-disc list-inside mb-5 font-montserrat
                       lg:text-[1rem] lg:leading-[1.4rem]
                       xl:text-xl">
          Affordable and flexible gym classes benefit both parties:
          <li className="mt-1">People seeking such classes</li>
          <li>
            Gyms/instructors aiming to <span className="underline underline-offset-4">increase revenue</span> and <span className="underline underline-offset-4">build a loyal client base.</span>
          </li>
        </ul>
        <hr className="border-black border-2 max-lg:mb-4" />
      </div>
    </div>
  )
}