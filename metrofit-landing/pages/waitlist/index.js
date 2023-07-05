import Form from "../../components/Form"

export default function Waitlist (){
  return(
      <div className="bg-black w-full flex flex-row items-center justify-evenly lg:h-[90vh]">
        <div className="border-[3px] rounded-[3rem] border-amber-300 h-[90%] w-[94%] flex justify-around">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black font-monomaniac bg-amber-300 rounded-md text-[1.5rem] p-1">
              BE A MEMBER
            </h1>
            <img className="" src='/images/waitlistlogo.svg'></img>
            <h1 className="text-white font-montserrat text-xl">
              increase booking revenue
            </h1>
            <p className="text-white font-montserrat">
              Be our partner to earn cash by filling empty spots in classes. 
            </p>
            <p className="text-white font-montserrat">
              A partner Instructor can extra cash and schedule classes on their own time. 
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-monomaniac text-xl text-center text-[2.5rem] pb-8"> 
              Join the Waitlist.
            </h1>
            <Form />
          </div>     
        </div>
      </div>
    )
}