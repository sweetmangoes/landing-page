import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Partner from '../components/Partner'

export default function Home() {


  return (
    <div>
      <Head>

      </Head>

      <main>
        <Hero />
        <Mission />
        <Partner />
        {/* <Form /> */}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
