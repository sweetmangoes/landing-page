import Form from "../../components/Form"


export default function Partner(){
  return(
    <div className="bg-white w-full flex flex-row items-center justify-evenly lg:h-[90vh]">
      <div className="border-[3px] rounded-[3rem] border-black h-[90%] w-[94%] flex justify-around">
        <div>
        <p className="text-black">
          hello from Partner!
        </p>
        </div>
        <div>
          <Form />
        </div>     
      </div>
    </div>
  )
}