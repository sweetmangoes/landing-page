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
                <option selected value=''> Countries</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                {/* <option value="FR">France</option>
                <option value="DE">Germany</option> */}
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
                <option selected value=''> Provinces / States</option>
                {/* Canada */}
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MA">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova and Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PEI">Prince Edward Island</option>
                <option value="QB">Quebec</option>
                <option value="SA">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YU">Yukon</option>
                {/* United states */}
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
          </div>
          <br/>
          <button 
            type='submit' 
            className='bg-orange-600 rounded-lg w-full hover:bg-orange-300 hover:text-black font-monomaniac text-white p-1 text-lg'
          >
            JOIN
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
              {`We're committed to your privacy. MetroFit uses the information you provide to us to contact you about our services.`}
            </p>
            <Link className='text-sky-500 hover:underline' href='https://app.termly.io/document/privacy-policy/2ab800f8-0f3f-4a5f-9150-aca7d84591e9'> 
              View Privacy Policy 
            </Link>

          </div>

      </form>

    </div>
  )
}