import Link from "next/link";

export default function Member() {

  return (
    <div className="bg-white w-full flex justify-center items-center
                    lg:h-[90vh]">
      <div className="h-full w-full lg:w-[94%] flex flex-col items-center bg-no-repeat bg-center bg-contain bg-[url('/member-bg.svg')]
                      lg:border-[3px] lg:rounded-[3rem] lg:border-black lg:h-[90%] lg:flex-row lg:p-0 lg:bg-none">
        {/* <img className="" src='/images/member-bg.svg'></img> */}
        <div className="h-full bg-no-repeat bg-center bg-contain background-image:[url('../public/images/member-bg.svg')]
                        lg:w-[49.3%] lg:rounded-[3rem]">
          <p className="font-monomaniac text-[6rem] leading-[5rem] text-black p-8">BE A<br /> MEMBER</p>
        </div>
        <div className="invisible lg:visible lg:w-[0.4%] lg:h-[80%] lg:bg-black "><hr /></div>
        <div className="lg:w-[49.3%] h-full rounded-[3rem] p-5 flex flex-col text-center justify-center lg:text-left">
          <p className="font-montserrat text-[3rem] leading-[2.5rem] tex  lg:text-[4.5rem] lg:leading-[4.5rem] text-black bg-black lg:bg-transparent bg-opacity-20 p-8"><b>Affordable,<br />accessible,<br />and flexible<br />classes for all.</b></p>
          <div className="flex mt-[6rem] justify-center xl:justify-start">
            <Link href='./waitlist' className="py-4 rounded-lg flex justify-center hover:bg-amber-300 hover:text-black bg-black text-[#fefefe] w-1/2 text-2xl font-montserrat font-bold ml-[2.5rem]
                           lg:text-3xl lg:w-2/3
                           xl:text-2xl xl:w-1/3">
              JOIN WAITLIST
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}