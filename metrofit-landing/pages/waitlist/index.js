import WaitlistForm from "../../components/WaitlistForm"

export default function Waitlist (){
  return(
    <div>
      <br/>
      <br/>
      <br/>
        <div className="bg-black w-full flex flex-row items-center justify-evenly p-2 lg:h-[90vh]">
          <div className="border-[3px] rounded-[3rem] border-amber-300 h-auto lg:h-[90%] w-[94%] flex flex-col sm:flex-row justify-around p-5">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-black font-monomaniac bg-gray-100 rounded-md text-[1.5rem] p-1">
              As a member, you can: 
              </h1>
              <img className="" src='/images/waitlistlogo.svg'></img>
              <div className=" mt-2 -top-7 text-white font-montserrat text-xl space-y-1">
                <h1>
                  1. Access a variety of group fitness classes (for all ages) in your area. 
                </h1>
                <h1>
                  2. Participate in local active events, leagues and sport clubs. 
                </h1>
                <h1>
                  3. Create and join local fitness community.
                </h1>
                <br/>
              </div>
            </div>
            <div className="flex flex-col mr-auto ml-auto">
              <h1 className="text-black rounded-md p-1 bg-amber-300 font-monomaniac text-xl text-center text-[2.5rem]"> 
                Join the Waitlist.
              </h1>
              <br/>
              <WaitlistForm />
            </div>     
          </div>
        </div>
    </div>
    )
}