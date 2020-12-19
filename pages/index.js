import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hako Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Hako Live</a>
        </h1>

        <p className={styles.description}>
          An online companion to your Hako Live dégustation
        </p>

        <div className={styles.list}>
          <ul>
            <li>
            Read{' '}
            <Link href="/sessions/2020-12-18">
              <a>Fri, 18 Dec 2020</a>
            </Link>
            </li>
          </ul>
        </div>

        <div className={styles.grid}>
          <a href="https://www.hakogetraenke.ch/?utm_source=mountainashhakolive" className={styles.card}>
            <h3>What is Hako? &rarr;</h3>
            <p>Hako is a small (physically - it's a small shop) Craft Beer shop in Winterthur (the 5/6th biggest city in small Switzerland). While they are still open in these times of COVID, they can't run their usual in-store digestation and have resorted to sending out a harsé of 10 beers and holding a Zoom meetup about once a month (fun times!).</p>
          </a>

          <a href="https://github.com/mountainash/hakolive" className={styles.card}>
            <h3>But what is this repo for? &rarr;</h3>
            <p>As a web nerd I decided to hack together some kind of mashup between the beers that Hako picks for the session and Untappd (a very popular beer-drinking social network).</p>
          </a>

          <a
            href="https://hakolive.vercel.app"
            className={styles.card}
          >
            <h3>Why? &rarr;</h3>
            <p>Well, I wanted too!?! AND I'm applying for a job at a workplace that has React and Next.js requirements which I don't yet have... time for some JIT coding - I also noticed that their own website is hosted on [vercel.app](https://vercel.app/) which provides free hosting - see the output at https://hakolive.vercel.app</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}