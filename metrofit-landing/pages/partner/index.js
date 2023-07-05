import Form from "../../components/Form"


export default function Partner(){
  return(
    <div className="bg-white w-full flex flex-row items-center justify-evenly lg:h-[90vh]">
      <div className="border-[3px] rounded-[3rem] border-black h-[90%] w-[94%] flex justify-around">
        <div>
          <h1 className="text-black font-monomaniac bg-amber-300 rounded-md text-lg p-1">
            BE A PARTNER
          </h1>
          <img className="" src='/images/partnerlogo.svg'></img>
          <h2 className="text-black">
            increase booking revenue
          </h2>
          <p className="text-black">
          Be our partner to earn cash by filling empty spots in classes. A partner Instructor can extra cash and schedule classes on their own time. 
          </p>
        </div>
        <div>
          <Form />
        </div>     
      </div>
    </div>
  )
}