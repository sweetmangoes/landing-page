export default function Mission() {

  return (
    <div className="bg-white h-[90vh] w-full p-6 flex text-black">
      <div className="h-full w-2/5 flex flex-col justify-center">
        <img src='/images/Mission.svg'></img>
      </div>
      <div className="h-full w-3/5 flex flex-col justify-center px-14">
        <h3 className="font-monomaniac text-[5rem] leading-[5rem] mb-5">MISSION</h3>
        <p className="font-montserrat text-2xl mb-5">
          Our mission is to provide access, affordability, and flexible gym classes to people across the city while helping individual gyms, fitness studios and instructors increase their revenue and reach.
          <br /><br />
          We believe that everyone in a community should have the capability to access high-quality fitness classes regardless of their schedule or budget.
        </p>
        <hr className="border-black border-2" />
        <h3 className="font-monomaniac text-[5rem] leading-[5rem] mb-5 mt-3">VISION</h3>
        <p className="font-montserrat text-2xl">
          Our vision is to build a stronger and healthier city by helping people achieve fitness goals while supporting local fitness instructors, gyms, and studios.
          <br /><br />
          <i>We do this by having a platform that connects people with individual gyms and fitness classes in a seamless and convenient way.</i>
          <br /><br />
        </p>
          <ul className="list-disc list-inside text-2xl mb-5 font-montserrat">
            Affordable and flexible gym classes benefit both parties:
            <li className="mt-1">People seeking such classes</li>
            <li>
              Gyms/instructors aiming to <span className="underline underline-offset-4">increase revenue</span> and <span className="underline underline-offset-4">build a loyal client base.</span>
            </li>
          </ul>
        <hr className="border-black border-2" />
      </div>
    </div>
  )
}