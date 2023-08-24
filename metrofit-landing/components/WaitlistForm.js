import { useState } from 'react';
import Link from "next/link";

export default function WaitlistForm() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [alert, setAlert] = useState('hidden')

  // async function for submitting the states to the api.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Remove default to ensure no rerouting

    const form = {
      fullName,
      email,
      country,
      province
    }

    // Submit response to the api/submit.js
    const response = await fetch('api/waitlistsubmit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    // Returned content from the response
    const content = await response.json();
    console.log(`content: ${content}`)

    // This should be removed at a later date. Currently used to reset the forms data.
    setFullName('');
    setEmail('');
    setCountry('');
    setProvince('');
    setAlert('shows')
  }

  return (
    <div className="bg-stone-100 text-black flex flex-col justify-center sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[40rem] p-10 rounded-lg h-[93%]">
      <form className='border-solid' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label 
              htmlFor="full name" 
              className='font-monomaniac text-lg'
            > 
              Full Name*
            </label>
            <input 
              value={fullName} onChange={e => setFullName(e.target.value)}
              placeholder=' John Doe' 
              required
              className='bg-white font-montserrat p-2 rounded-lg'
            />
          </div>
          <br/>
          <div className='flex flex-col'>
            <label 
              htmlFor='email'
              className='font-monomaniac text-lg'
            > 
              Email
            </label>
            <input 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder=' johndoe@gmail.com'  
              required
              type='email'
              className='bg-white font-montserrat p-2 rounded-lg'
            />
          </div>
          <br/>
          <div>
            <label 
              htmlFor='country'
              for="countries" 
              className='font-monomaniac text-lg'
            >
              Select your country.* 
            </label>
              <select 
                value={country} onChange={e => setCountry(e.target.value)}
                required
                id="countries" 
                className='bg-white font-montserrat'
              >
                <option selected value=''>Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
          </div>
          <br/>
          <div>
            <label for="countries" className='font-monomaniac text-lg'>
              Select your province/state.* 
              </label>
              <select 
                value={province} onChange={e => setProvince(e.target.value)}
                required
                id="countries" 
                className='bg-white font-montserrat'
              >
                <option selected value=''>Choose a Province</option>
                <option value="US">Ontario</option>
                <option value="CA">Alberta</option>
                <option value="FR">Quebec</option>
              </select>
          </div>
          <br/>
          <button 
            type='submit' 
            className='bg-orange-600 rounded-lg w-full hover:bg-orange-300 hover:text-black font-monomaniac text-white p-1 text-lg'
          >
            LET'S TALK
          </button>
          
          <br/>
          { alert !== 'hidden' && 
            <div class="bg-blue-100 border-t border-b border-sky-500 text-sky-700 px-4 py-3" role="alert">
              <p class="font-monomaniac">Thanks for submitting!</p>
              <p class="text-sm font-montserrat">We added you to the waitlist. Please allow us couple of business days to send email confirmation</p>
            </div>
          }

          <br />
          <div className='text-xs italic flex flex-col space-y-2'>
            <p> * Required information</p>
            <p>
              We're committed to your privacy. MetroFit uses the information you provide to us to contact you about our services.
            </p>
            <Link className='text-sky-500 hover:underline' href='https://app.termly.io/document/privacy-policy/2ab800f8-0f3f-4a5f-9150-aca7d84591e9'> 
              View Privacy Policy 
            </Link>

          </div>

      </form>

    </div>
  )
}