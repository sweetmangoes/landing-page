import Link from "next/link";

export default function Member() {

  return (
    <div className="bg-white w-full flex flex-row items-center justify-center
                    lg:h-[90vh]">
      <div className="border-[3px] rounded-[3rem] border-black h-[90%] w-[94%] flex items-center">
        <div className="w-[49.3%] h-full rounded-[3rem] bg-no-repeat bg-center bg-contain bg-[url('../public/images/member-bg.svg')]">
          <p className="font-monomaniac text-[8rem] leading-[6rem] text-black p-8">BE A<br /> MEMBER</p>
        </div>
        <div className="w-[0.4%] h-[80%] bg-black"><hr /></div>
        <div className="w-[49.3%] h-full rounded-[3rem] p-5 flex flex-col">
          <p className="font-montserrat text-[4.5rem] leading-[6rem] text-black p-8"><b>Affordable,<br />accessible,<br />and flexible<br />classes for all.</b></p>
          <div className="flex mt-[6rem]">
            <Link href='./waitlist' className="py-4 rounded-lg flex justify-center hover:bg-amber-300 hover:text-black bg-black text-[#fefefe] w-1/2 text-2xl font-montserrat font-bold ml-[2.5rem]
                           lg:text-3xl lg:w-1/3
                           xl:text-2xl">
            
            BE A PARTNER
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}