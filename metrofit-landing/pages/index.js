import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import {NextResponse} from 'next/server'

export default function Home() {

  const [first, setFirst] = useState(" ")
  const [last, setLast] = useState(" ")

  const handleSubmit = async () => {
    // e.preventDefault(); 

    const form = {
      first, 
      last
    }

    console.log("FORM: ", form)

    // return NextResponse.redirect("/")

  }

  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" value={first} onChange={e => setFirst(e.target.value)}/>
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" value={last} onChange={e => setLast(e.target.value)} />
          <button type="submit" >Submit</button>
        </form>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
