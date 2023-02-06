import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
  
      </div>
      <div className={styles.bg}>
        <main className={styles.main}>
         
          <div>
            <h1>An investment in knowledge
              the best interest.
            </h1>
            <p>
              Different than a college or university, the British Columbia
              Institute of Technology offers practical, flexible, applied
              education with instructors who have direct, hands-on
              experience in their field.
            </p>
            <Link href="/about">
              <button>About</button>
            </Link>
            <Link href="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </main>
      </div>

    </>
  )
}
