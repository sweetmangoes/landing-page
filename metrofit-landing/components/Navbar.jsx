import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

export default function Navbar(){

  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () =>{
      if (window.scrollY >= 90){
        setColor('#ffffff');
        setTextColor('#00000')
      }else{
        setColor('Transparent')
        setTextColor('#ffffff')
      }
    }
  })

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300"> 
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href='/'>  
          <h1 style={{color:`${textColor}`}} className="font-monomaniac text-4xl">
            Metro Fit
          </h1>
        </Link>
        <ul style={{color:`${textColor}`}}  className="hidden sm:flex ">
          <li>
            <Link href='/'>
              <h1 className="p-4 font-monomaniac text-3xl">
                Home
              </h1>
            </Link>
          </li>
          <li className="p-4 font-monomaniac text-3xl">
            <Link href='/partner'>Be a Partner</Link>
          </li>
          <li className="p-4 font-monomaniac text-3xl">
            <Link href='/join'>Join the WaitList</Link>
          </li>
          <li className="p-4 font-monomaniac text-3xl">
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose style={{color:`${textColor}`}}  size={20}/> : <AiOutlineMenu style={{color:`${textColor}`}}  size={20}/>}
        </div>
        {/* Mobile Menu */}
        <div className= {
          nav 
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
        <ul>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/'>Home</Link>
          </li>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/partner'>Be a Partner</Link>
          </li>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/join'>Join the WaitList</Link>
          </li>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}