import { useRouter } from 'next/router'
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
				<ol>
				{beers.map((beer, index) => (
					<li key={index}>
						<Link href="/session/[date]/[beer]" as={`/session/${date}/${index}`}>
							<a>{beer.brand} - {beer.name}</a>
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
	// Call an external API endpoint to get posts
	const res = await fetch(`${process.env.VERCEL_URL}/api/beers?all=1`)
	const sessiondata = await res.json()
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
	const res = await fetch(`${process.env.VERCEL_URL}/api/beers?date=${params.date}`) // Call API endpoint to get beers for the session
	const beers = await res.json()

	return { props: { beers } }
}

export default Session