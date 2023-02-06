import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      <main className={styles.main}>
        <div className={styles.bg}>
    
        </div>
        <div>
          <h1>An investment in knowledge 
            the best interest.
          </h1>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </main>
    </>
  )
}
