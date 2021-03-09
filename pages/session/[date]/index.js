import { useRouter } from 'next/router'
import { getBeers } from '../../../pages/api/beers'
import Head from 'next/head'
import Header from '../../../components/header'
import Link from 'next/link'
import styles from '../../../styles/Session.module.scss'

const Session = ({beers}) => {
	const router = useRouter()
	const { date } = router.query

	return (
		<>
			<Head>
				<title>Hako Live - {date}</title>
			</Head>
			<Header />

			<div className={styles.breadcrumb}>
				<Link href="/">
					<a>&larr; <span>Home</span></a>
				</Link>
			</div>

			<main className={styles.main}>
				<p className={styles.date}>
					{date}
				</p>

				<ol>
				{beers.map((beer, index) => (
					<li key={index}>
						<Link href="/session/[date]/[beer]" as={`/session/${date}/${index}`}>
							<a><span className={styles.brand}>{beer.brand}</span> - {beer.name}</a>
						</Link>
					</li>
				))}
				</ol>
			</main>
		</>
	)
}

// This function gets called at build time
export const getStaticPaths = async () => {
	const sessiondata = getBeers()
	let paths = new Array();

	// Get the paths we want to pre-render based on posts
	Object.entries(sessiondata).forEach(([date, value]) => {
		// paths.push('/session/'+date)
		paths.push({ params: { 'date': date } })
		value.forEach((beer, index) => {
			paths.push({ params: { 'date': date, 'beer': index.toString() } })
			// paths.push('/session/'+date+'/'+index)
		})
	})

	return { paths, fallback: false } // { fallback: false } means other routes should 404
}

export const getStaticProps = async ({ params }) => {
	const sessiondata = getBeers()
	const beers = sessiondata[params.date]

	return { props: { beers } }
}

export default Session