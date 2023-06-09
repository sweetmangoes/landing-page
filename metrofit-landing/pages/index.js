import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <main className={styles.main}>
        <Form />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
