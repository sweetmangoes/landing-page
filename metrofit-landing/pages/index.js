import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Partner from '../components/Partner'
import Member from '../components/Member'

export default function Home() {


  return (
    <div>

      <main>
        <Hero />
        <Mission />
        <Partner />
        <Member />
        {/* <Form /> */}
      </main>

    </div>
  )
}
