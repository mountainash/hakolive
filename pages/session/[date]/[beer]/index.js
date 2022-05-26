import { enrichBeer } from '../../../../components/enrichBeer'
import { sessionData } from '../../../../components/sessionData'
import Head from 'next/head'
import Header from '../../../../components/header'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../../styles/Session.module.scss'

const Beer = ({date, info}) => {
	return (
		<>
			<Head>
				<title>Hako Live - {date} - {info.brand} {info.name}</title>
			</Head>
			<Header />

			<div className={styles.breadcrumb}>
				<Link href="/session/[date]" as={`/session/${date}`}>
					<a>&larr; <span>{date}</span></a>
				</Link>
			</div>

			<main className={styles.main}>
				<div className={styles.beer}>
					<div className={styles.beerinfo}>
						<h2><span className={styles.brand}>{info.brand}</span> <span className={styles.name}>{info.name}</span></h2>
						{info.untappd.description &&
							<p className={styles.description}>{info.untappd.description}</p>
						}
					</div>
					<div className={styles.beermeta}>
						<ul>
							{info.untappd.style &&
								<li>
									<strong>Style</strong>
									<span>{info.untappd.style}</span>
								</li>
							}
							{info.untappd.alco &&
								<li>
									<strong>ABV</strong>
									<span>{info.untappd.alco}%</span>
								</li>
							}
							{info.untappd.ibu &&
								<li>
									<strong>IBU</strong>
									<span>{info.untappd.ibu}</span>
								</li>
							}
						</ul>
						{info.rating &&
							<ul>
								<li>
									<strong>Average Rating</strong>
									<span>{info.rating.average}</span>
								</li>
								<li>
									<strong>Rating Count</strong>
									<span>{info.rating.count}</span>
								</li>
								<li>
									<strong>As at</strong>
									<span>{info.rating.fetched}</span>
								</li>
							</ul>
						}
						{info.untappd.url &&
							<p className={styles.untappd}><a href={info.untappd.url}>Untappd</a></p>
						}
					</div>
					{info.untappd.image &&
						<div className={styles.image}>
							<Image
								src={info.untappd.image}
								alt={`Photo of ${info.name}`}
								layout="fill"
							/>
						</div>
				}
				</div>
			</main>
		</>
	)
}

export const getStaticPaths = async () => {
	const sessions = sessionData()
	let paths = new Array();

	Object.entries(sessions).forEach(([date, value]) => {
		value.forEach((beer, index) => {
			paths.push({ params: { 'date': date, 'beer': index.toString() } })
		})
	})

	return { 'paths': paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
	const sessions = sessionData()
	const date = params.date
	const session = sessions[date]
	const beerNo = params.beer
	const beer = session[beerNo]
	const info = await enrichBeer(beer)

	return { props: { date, info } }
}

export default Beer