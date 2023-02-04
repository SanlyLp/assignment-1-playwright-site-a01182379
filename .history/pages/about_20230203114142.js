import Head from "next/head";
import { Html } from "next/document";
import styles from '../styles/about.module.css';

export default function About() {
    return (
      <>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        </main>
      </>
    )
  }
  