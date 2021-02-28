import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

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
            <Link href="/session/[date]" as="/session/2020-12-18">
              <a><strong>Hakodicht@home IV</strong> <span>Fri, 18 Dec 2020</span> &rarr;</a>
            </Link>
            </li>
            <li>
            <Link href="/session/[date]" as="/session/2021-02-19">
              <a><strong>Hakodicht@home V</strong> <span>Fri, 19 Feb 2021</span> &rarr;</a>
            </Link>
            </li>
          </ul>
        </div>

        <div className={styles.grid}>
          <a href="https://www.hakogetraenke.ch/?utm_source=mountainashhakolive" className={styles.card}>
            <h3>What is Hako?&nbsp;&rarr;</h3>
            <p>Hako is a small (physically - it's a small shop) Craft Beer shop in Winterthur (the 5th largest city in small Switzerland). While they are still open in these times of COVID, they can't run their usual in-store detestation, so have resorted to sending out a harass of 10 beers and holding a Zoom meetup about once every two months (fun times!).</p>
          </a>

          <a href="https://github.com/mountainash/hakolive" className={styles.card}>
            <h3>But what is this repo for?&nbsp;&rarr;</h3>
            <p>As a web nerd I decided to hack together some kind of mashup between the beers that Hako picks for the session and Untappd (a very popular beer-drinking social network).</p>
          </a>

          <a
            href="https://hakolive.vercel.app/"
            className={styles.card}
          >
            <h3>Why?&nbsp;&rarr;</h3>
            <p>Many Software Developer roles in Zürich require React (and/or Next.js) requirements which I don't yet have... time for some JIT coding and this was the first idea that came into my head (...I may have been drinking beer at the time).</p>
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