export default function Hero() {

  return (
    <div className="bg-black h-[80vh] w-full p-6 flex">
      <div className="bg-blue-500 h-full w-1/2 px-14 flex flex-col justify-center">
        <h1 className="text-9xl mb-3">Metro<br />Fit</h1>
        <p className="text-3xl my-3">Join The Movement Community.</p>
        <button className="py-2 px-6 border-2 border-[#e0e111] text-[#e0e111] w-1/5">JOIN WAITLIST</button>
      </div>
      <div className="bg-green-500 h-full w-1/2">Hello</div>
    </div>
  )
}