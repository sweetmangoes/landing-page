import PartnerForm from "../../components/PartnerForm"

export default function Partner() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white w-full flex flex-row items-center justify-evenly p-2 lg:h-[90vh]">
        <div className="border-[3px] rounded-[3rem] border-black h-auto lg:h-[90%] w-[94%] flex flex-col sm:flex-row justify-around p-5">
          <div className="flex flex-col items-center justify-center sm:w-[20rem] md:w-[30rem] lg:w-[38rem] text-center text-black">
            <h1 className=" font-monomaniac bg-amber-300 rounded-md text-[1.5rem] p-1">
              Increase Your Booking Revenue
            </h1>
            <img className="" src='/images/partnerlogo.svg'></img>
            <div className="font-montserrat space-y-2 p-2">
              <h1 className="bg-green-400 rounded-md p-4">
                  A <a className="italic text-green-800">Gym Partner</a> can <a className=" font-semibold"> <a className="underline">earn cash</a> by <a className="italic">listing empty spots in classes.</a></a>
              </h1>
              <h1 className="bg-sky-100 rounded-md p-4 text-sky-900">
                <a className="italic"> Our <a className="underline">Verified Instructor</a></a> can <a className="font-semibold text-black">earn extra cash by coaching classes. </a> 
              </h1>
            </div>
          </div>
          <br/>
          <div className="flex flex-col ">
            <h1 className="text-white bg-black rounded-md p-1 font-monomaniac text-xl text-center text-[2.5rem] h-[5%] mb-3 md:mb-0">
              Sign up to be a partner.
            </h1>
            <br/>
            <PartnerForm />
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}