import { useState } from 'react';
import Link from "next/link";

export default function PartnerForm() {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  // async function for submitting the states to the api.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Remove default to ensure no rerouting

    const form = {
      first,
      last
    }

    // Submit response to the api/submit.js
    const response = await fetch('api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    // Returned content from the response
    const content = await response.json();

    // This should be removed at a later date. Currently used to reset the forms data.
    setFirst('');
    setLast('');

  }

  return (
    <div className="bg-stone-100 text-black flex flex-col w-96 p-10 rounded-lg">
      <form className='border-solid'>
          <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              Full Name 
            </label>
            <input placeholder=' John Doe' className='bg-white font-montserrat p-2 rounded-lg'/>
          </div>
          <br/>
          <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              Email
            </label>
            <input placeholder=' johndoe@gmail.com'  className='bg-white font-montserrat p-2 rounded-lg'/>
          </div>
          <br/>
          <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              Phone 
            </label>
            <input placeholder=' (XXX) XXX - XXXX' className='bg-white font-montserrat p-2 rounded-lg'/>
          </div>
          <br/>
          <button className='bg-orange-600 rounded-lg w-full hover:bg-orange-300 hover:text-black font-monomaniac text-white p-1 text-lg'>
            LET'S TALK
          </button>
          <div className='text-xs italic flex flex-col space-y-2'>
            <br />
            <p>
              We're committed to your privacy. MetroFit uses the information you provide to us to contact you about our services.
            </p>
            <Link className='text-sky-500' href='https://app.termly.io/document/privacy-policy/2ab800f8-0f3f-4a5f-9150-aca7d84591e9'> 
              View Privacy Policy 
            </Link>

          </div>

      </form>
    </div>
  )
}

{/* <form onSubmit={handleSubmit} className='h-auto w-auto border-solid'>
  <label htmlFor="first" className='sr-only text-black'>First name:</label>
  <input value={first} onChange={e => setFirst(e.target.value)} type="text" name="first" id="first" />
  <label htmlFor="last" className='sr-only'>Last name:</label>
  <input value={last} onChange={e => setLast(e.target.value)} type="text" name="last" id="last" />
  <button type="submit">Submit</button>
</form> */}