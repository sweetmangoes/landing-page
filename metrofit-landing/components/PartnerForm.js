import { useState } from 'react';
import Link from "next/link";

export default function PartnerForm() {

  const [fullName, setFullName] = useState('');
  const [type, setType] = useState('');
  const [website, setWebsite] = useState('');;
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [alert, setAlert] = useState('hidden')

  // async function for submitting the states to the api.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Remove default to ensure no rerouting

    const form = {
      fullName,
      type, 
      website,
      contact,
      email, 
      phone
    }

    // Submit response to the api/submit.js
    const response = await fetch('api/partnersubmit', {
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
    setFullName('');
    setType('');
    setWebsite('')
    setContact('');
    setEmail('');
    setPhone('');
    setAlert('shows');

  }

  return (
    <div className="bg-stone-100 text-black flex flex-col w-96 p-10 rounded-lg">
      <form className='border-solid' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <label 
              htmlFor="full name"
              className='font-monomaniac text-lg'
            > 
              Full Name*
            </label>
            <input
            type='string'
            required
            value={fullName} 
            onChange={e => setFullName(e.target.value)}
            placeholder=' John Doe' 
            className='bg-white font-montserrat p-2 rounded-lg'/>
          </div>
          <br/>
          <div>
            <label htmlFor="type" className='font-monomaniac text-lg'>
              Please select which one applies.* 
              </label>
              <select 
                value={type} 
                onChange={e => setType(e.target.value)}
                required
                id="type" 
                className='bg-white font-montserrat '
              >
                <option selected value=''> which one applies</option>
                <option value="Email">Gym/fitness studio owner</option>
                <option value="Phone">Instructor</option>
                <option value="Both">Both</option>
              </select>
          </div>
            <br/>
            <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              If yes, please provide website?
            </label>
            <input
              value={website} 
              type='url'
              onChange={e => setWebsite(e.target.value)} 
              placeholder=' www.abcgym.com' 
              className='bg-white font-montserrat p-2 rounded-lg'
            />
          </div>
          <br/>
          <div>
            <label htmlFor="contact" className='font-monomaniac text-lg'>
              Preferred method of Contact.* 
              </label>
              <select 
                value={contact} 
                onChange={e => setContact(e.target.value)}
                required
                id="contact" 
                className='bg-white font-montserrat text-gray-400'
              >
                <option selected value=''> Select method of contact</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Both">Both</option>
              </select>
          </div>
          <br/>
          <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              Email
            </label>
            <input 
              type="email"
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder=' johndoe@gmail.com'  
              className='bg-white font-montserrat p-2 rounded-lg'
            />
          </div>
          <br/>
          <div className='flex flex-col'>
            <label className='font-monomaniac text-lg'> 
              Phone 
            </label>
            <input 
              type="tel"
              value={phone} 
              onChange={e => setPhone(e.target.value)}
              placeholder=' XXX - XXX - XXXX' 
              className='bg-white font-montserrat p-2 rounded-lg'
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <br/>
          <button className='bg-orange-600 rounded-lg w-full hover:bg-orange-300 hover:text-black font-monomaniac text-white p-1 text-lg'>
            LET'S TALK
          </button>
          <br/>
          { alert !== 'hidden' && 
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
              <p class="font-monomaniac">Thanks for submitting!</p>
              <p class="text-sm font-montserrat">We added you to the waitlist. Please allow us couple of business days to send email confirmation</p>
            </div>
          }
          <br />
          <div className='text-xs italic flex flex-col space-y-2'>
            <br/>
            <p> * Required information</p>
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
