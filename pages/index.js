import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raza and Associates</title>
        <meta name="description" content="Raza and Associates" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar/>
      <Hero/>
      <Services/>
     <Footer/>
    </div>
  )
}
