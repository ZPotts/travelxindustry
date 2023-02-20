import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TravelXIndustry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to TravelXIndustry
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>TravelXIndustry - 2023</p>
      </footer>
    </div>
  )
}
