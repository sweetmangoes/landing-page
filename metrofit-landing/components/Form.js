import { useState } from 'react';

export default function Form() {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  // async function for submiting the states to the api.
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="first" className='sr-only'>First name:</label>
      <input value={first} onChange={e => setFirst(e.target.value)} type="text" name="first" id="first" />
      <label htmlFor="last" className='sr-only'>Last name:</label>
      <input value={last} onChange={e => setLast(e.target.value)} type="text" name="last" id="last" />
      <button type="submit">Submit</button>
    </form>
  )
}