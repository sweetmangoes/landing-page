export default function Member() {

  return (
    <div className="bg-white w-full flex flex-row items-center justify-center
                    lg:h-[90vh]">
      <div className="border-[3px] rounded-[3rem] border-black h-[90%] w-[94%] flex items-center">
        <div className="w-[49.3%] h-full rounded-[3rem] bg-no-repeat bg-center bg-cover bg-[url('../public/images/member-bg.svg')]">
          <p className="font-monomaniac text-[8rem] leading-[6rem] text-black p-8">BE A<br /> MEMBER</p>
        </div>
        <div className="w-[0.4%] h-[80%] bg-black"><hr /></div>
        <div className="w-[49.3%] h-full rounded-[3rem] p-5">
          <p className="font-montserrat text-[4.5rem] leading-[6rem] text-black p-8"><b>Affordable,<br />accessible,<br />and flexible<br />classes for all.</b></p>
        </div>
      </div>
    </div>
  )
}