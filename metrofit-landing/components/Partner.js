import Link from "next/link";

export default function Partner() {

  return (
    <div className="bg-black w-full flex flex-col
                    lg:h-[90vh]">
      <div className="w-full flex flex-col items-center justify-between p-10 font-montserrat h-4/5
                      lg:flex-row lg:h-4/5">
        <div className="flex flex-col items-center text-center">
          <img className="" src='/images/coin.svg'></img>
          <p className="text-4xl lg:text-2xl mt-3">Increase<br />Booking</p>
          <p className="text-xl lg:text-lg mt-4">Allow us to fill up your empty<br />classes and earn more revenue.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="" src='/images/mat.svg'></img>
          <p className="text-4xl mt-3">Local gyms &<br />fitness studios</p>
          <p className="text-xl mt-4">Be our partner to increase your booking<br />revenue and fill empty classes. </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="" src='/images/instructor.svg'></img>
          <p className="text-4xl mt-3">Fitness<br />instructors</p>
          <p className="text-xl mt-4">Be our partner to earn extra cash<br />and schedule classes on your time.</p>
        </div>
      </div>
      <div className="h-1/5 w-full flex justify-center items-center
                      lg:px-10">
              <Link className="flex justify-center py-4 border-4 mb-3 border-[#e0e111] text-[#e0e111] hover:bg-amber-300 hover:text-black w-1/2 text-2xl font-montserrat font-bold 
            lg:text-3xl lg:w-1/3 
            xl:text-2xl" href='/partner'>
                BE A PARTNER
              </Link>
              
      </div>
    </div>
  )
}