import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Mission from '../components/Mission'

export default function Home() {


  return (
    <div>
      <Head>

      </Head>

      <main>
        <Hero />
        <Mission />
        {/* <Form /> */}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
