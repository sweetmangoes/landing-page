import Form from "../../components/Form"

export default function Waitlist (){
  return(
    <div>
      <br/>
      <br/>
      <br/>
        <div className="bg-black w-full flex flex-row items-center justify-evenly lg:h-[90vh]">
          <div className="border-[3px] rounded-[3rem] border-amber-300 h-[90%] w-[94%] flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-black font-monomaniac bg-amber-300 rounded-md text-[1.5rem] p-1">
                BE A MEMBER
              </h1>
              <img className="" src='/images/waitlistlogo.svg'></img>
              <div className="divide-y divide-dashed text-center text-white font-montserrat text-xl">
                <h1>
                  Access to a variety of group fitness classes in your area. 
                </h1>
                <h1>
                  Create groups and events for local pick-up games and sport clubs. 
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-white font-monomaniac text-xl text-center text-[2.5rem] pb-8"> 
                Join the Waitlist.
              </h1>
              <Form />
            </div>     
          </div>
        </div>
    </div>
    )
}