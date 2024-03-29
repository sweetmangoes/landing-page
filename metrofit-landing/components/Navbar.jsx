import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

export default function Navbar(){

  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('black')
  const [textColor, setTextColor] = useState('yellow')

  const handleNav = () => {
    setNav(!nav)
  }

  const closeMobileMenu = () => {
    setNav(false)
  }

  useEffect(() => {
    const changeColor = () =>{
      if (window.scrollY >= 200){
        setColor('black');
        setTextColor('white');
      }else{
        setColor('black');
        setTextColor('yellow');
      }
    };
    window.addEventListener('scroll', changeColor);
  },[]);

  return (
    <div style={{backgroundColor: `${color}`}} 
    className="fixed left-0 top-0 w-full z-10 ease-in duration-300"> 
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href='/'>  
          <h1 style={{color:`${textColor}`}} className="font-monomaniac text-4xl">
            Metro Fit
          </h1>
        </Link>
        <ul style={{color:`${textColor}`}}  className="hidden sm:flex">
          <li className="p-4 font-monomaniac text-3xl rounded-full hover:text-sky-400">
            <Link href='/partner'>Be a Partner</Link>
          </li>
          <li className="p-4 font-monomaniac text-3xl rounded-full hover:text-sky-400">
            <Link href='/waitlist'>Join WaitList</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose style={{color:`${textColor}`}}  size={20}/> : <AiOutlineMenu style={{color:`${textColor}`}}  size={20}/>}
        </div>
        {/* Mobile Menu */}
        <div className= {
          nav 
            ? 
            "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-[110vh] bg-black text-center ease-in duration-200" 
            : 
            "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-200"
          }
        >
        <ul className="text-white">
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/' onClick={closeMobileMenu}>Home</Link> 
          </li>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/partner' onClick={closeMobileMenu}>Be a Partner</Link>
          </li>
          <li className="p-4 font-monomaniac text-4xl hover:text-gray-500">
            <Link href='/waitlist' onClick={closeMobileMenu}>Join WaitList</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}