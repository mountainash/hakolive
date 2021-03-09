import { useRouter } from 'next/router'
import { getBeers } from '../../../../pages/api/beers'
import Head from 'next/head'
import Header from '../../../../components/header'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../../styles/Session.module.scss'

const Beer = ({beers}) => {
	const router = useRouter()
	const { date, beer } = router.query
	const info = beers[beer]

	return (
		<>
			<Head>
				<title>Hako Live - {date} - {beer.brand} {beer.name}</title>
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
						{info.description &&
							<p className={styles.description}>{info.description}</p>
						}
						<ul>
							{info.style &&
								<li>
									<strong>Style</strong>
									<span>{info.style}</span>
								</li>
							}
							{info.alco &&
								<li>
									<strong>Style</strong>
									<span>{info.alco}%</span>
								</li>
							}
							{info.ibu &&
								<li>
									<strong>IBU</strong>
									<span>{info.ibu}</span>
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
						{info.untappd &&
							<p className={styles.untappd}><a href={info.untappd}>Untappd</a></p>
						}
					</div>
					{info.image &&
						<div className={styles.image}>
							<Image
								src={info.image}
								alt={`Photo of ${info.name}`}
								width={200}
								height={540}
								layout="responsive"
							/>
						</div>
				}
				</div>
			</main>
		</>
	)
}

export const getStaticPaths = async () => {
	const sessiondata = getBeers()
	let paths = new Array();

	Object.entries(sessiondata).forEach(([date, value]) => {
		value.forEach((beer, index) => {
			paths.push({ params: { 'date': date, 'beer': index.toString() } })
		})
	})

	return { 'paths': paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
	const sessiondata = getBeers()
	const beers = sessiondata[params.date]

	return { props: { beers } }
}

export default Beer