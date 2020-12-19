import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function FirstProst() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hako Live - 2020-12-18</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>

        <section>
        <h2>Beer List</h2>
        <h3>Fri, 18 Dec 2020</h3>
        <ul>
          <li><a href="https://untappd.com/b/erusbacher-paul-bier-paul-01/26411">Paul Bier - 01</a></li>
          <li><a href="https://untappd.com/b/anchor-brewing-company-liberty-ale/5173">Anchor Brewing Company - Liberty Ale</a></li>
          <li><a href="https://untappd.com/b/trois-dames-ipa/18247">Trois Dames - IPA</a></li>
          <li><a href="https://untappd.com/b/vibrant-forest-brewery-stone-sap/2657375">Vibrant Forest Brewery - Stone Sap</a></li>
          <li><a href="https://untappd.com/b/brasserie-d-orval-orval/851">Brasserie d'Orval - Orval</a></li>
          <li><a href="https://untappd.com/b/trois-dames-la-fraicheur-au-basilic/291724">Trois Dames - La Fraîcheur au Basilic</a></li>
          <li><a href="https://untappd.com/b/ayinger-privatbrauerei-ayinger-celebrator/6683">Ayinger Privatbrauerei - Ayinger Celebrator</a></li>
          <li><a href="https://untappd.com/b/st-laurentius-merry-christmas/4105279">St. Laurentius - Merry Christmas</a></li>
          <li><a href="https://untappd.com/b/s-and-a-brewing-black/4105339">S&amp;A Brewing - Blåck</a></li>
          <li><a href="https://untappd.com/b/trois-dames-grande-dame/29273">Trois Dames - Grande Dame</a></li>
        </ul>
        </section>
      </main>
    </div>
  )
}