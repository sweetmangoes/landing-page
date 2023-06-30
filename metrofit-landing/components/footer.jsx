import Link from "next/link";

export default function Footer(){
  return(
    <div className="bg-black flex flex-row justify-around space-x-96 text-white p-2 font-monomaniac text-lg">
      <h1>
        MetroFit is a product of Curate Inc.
      </h1>
      <div className=" flex items-center">
          <div>
          <Link className='hover:text-amber-400' href='https://app.termly.io/document/privacy-policy/2ab800f8-0f3f-4a5f-9150-aca7d84591e9'> 
              Privacy Policy 
            </Link>         
          </div>
      </div>
    </div>
  )
}