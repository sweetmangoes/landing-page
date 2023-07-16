import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Partner from '../components/Partner'
import Member from '../components/Member'
import Contact from '../components/contact'

export default function Home() {


  return (
    <div>
      <br/>
      <br/>
      <br/>
      <main>
        <Hero />
        <Mission />
        <Partner />
        <Member />
        <Contact />
      </main>

    </div>
  )
}
