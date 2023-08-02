import PartnerForm from "../../components/PartnerForm"

export default function Partner() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white w-full flex flex-row items-center justify-evenly lg:h-[90vh]">
        <div className="border-[3px] rounded-[3rem] border-black h-auto lg:h-[90%] w-[94%] flex flex-col sm:flex-row justify-around p-5">
          <div className="flex flex-col items-center justify-center sm:w-[20rem] md:w-[30rem] lg:w-[38rem] text-center text-black">
            <h1 className=" font-monomaniac bg-amber-300 rounded-md text-[1.5rem] p-1">
              BE A PARTNER
            </h1>
            <img className="" src='/images/partnerlogo.svg'></img>
            <h1 className="font-montserrat text-xl">
              Increase Booking Revenue
            </h1>
            <p className="font-montserrat">
              Be our partner to earn cash by filling empty spots in classes.
            </p>
            <p className="font-montserrat">
              A partner Instructor can extra cash and schedule classes on their own time.
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-black font-monomaniac text-xl text-center text-[2.5rem] h-[5%] mb-3 md:mb-0">
              Sign up to be a partner.
            </h1>
            <PartnerForm />
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}