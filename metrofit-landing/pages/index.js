import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import Hero from '../components/Hero'

export default function Home() {


  return (
    <div>
      <Head>

      </Head>

      <main>
        <Hero />
        {/* <Form /> */}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
