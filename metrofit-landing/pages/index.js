import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = {
      first,
      last
    }

    const response = await fetch('api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await response.json();

    // console.log('content:', content);

    // alert(content.data.tableRange); 

    setFirst('');
    setLast('');
  }

  return (
    <div className={styles.container}>
      <Head>
        {/* <link href="/dist/output.css" rel="stylesheet"/> */}
      </Head>

      <h1 className="text-3xl text-red-500">
        Hello world!
      </h1>

      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first" className='sr-only'>First name:</label>
          <input value={first} onChange={e => setFirst(e.target.value)} type="text" name="first" id="first" />
          <label htmlFor="last" className='sr-only'>Last name:</label>
          <input value={last} onChange={e => setLast(e.target.value)} type="text" name="last" id="last" />
          <button type="submit">Submit</button>
        </form>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
