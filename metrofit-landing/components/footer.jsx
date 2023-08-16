import Link from "next/link";

export default function Footer(){
  return(
    <div className="bg-black flex flex-col justify-center text-gray-300 font-monomaniac text-lg">
      <h1 className="flex justify-center">
        MetroFit is a product of Curate Inc.
      </h1>
      <Link className='hover:text-amber-400 flex justify-center text-gray-400' href='https://app.termly.io/document/privacy-policy/2ab800f8-0f3f-4a5f-9150-aca7d84591e9'> 
        Learn more about our Privacy Policy 
      </Link> 
      <br/>        
    </div>
  )
}