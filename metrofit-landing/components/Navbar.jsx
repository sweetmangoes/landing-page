import React from "react";
import Link from "next/link";

export default function Navbar(){
  return (
    <div> 
      <div>
        <Link href='/'>  
          <h1>Metro Fit</h1>
        </Link>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/partner'>Be a Partner</Link>
          </li>
          <li>
            <Link href='/join'>Join</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

      </div>
    </div>
  )
}