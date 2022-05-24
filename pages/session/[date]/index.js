import { sessionData } from '../../../components/sessionData'
import Head from 'next/head'
import Header from '../../../components/header'
import Link from 'next/link'
import styles from '../../../styles/Session.module.scss'

const Session = ({date, beers}) => {
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
	const sessions = sessionData()
	let paths = new Array();

	// Get the paths we want to pre-render based on posts
	Object.entries(sessions).forEach(([date, value]) => {
		paths.push({ params: { 'date': date } })
	})

	return { paths, fallback: false } // { fallback: false } means other routes should 404
}

export const getStaticProps = async ({ params }) => {
	const sessions = sessionData()
	const date = params.date
	const beers = sessions[date]

	return { props: { date, beers } }
}

export default Session