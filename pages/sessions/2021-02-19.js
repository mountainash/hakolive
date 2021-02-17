import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Session.module.scss'

export default function FirstProst() {

	const sessiondata = [
		{
			name: 'Salut à Toi',
			brand: 'Hoppy People',
			style: 'Pilsner - Other',
			alco: 4.2,
			ibu: 20,
			rating: {
				average: 3.6,
				count: 75,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/hoppy-people-salut-a-toi/3216570'
		},
		{
			name: 'Saison Barrique - 2019',
			brand: 'Blackwell Brewery',
			style: 'Farmhouse Ale - Saison',
			alco: 5.3,
			rating: {
				average: 3.82,
				count: 50,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/blackwell-brewery-saison-barrique-2019/3412621'
		},
		{
			name: 'Pale Ale',
			brand: 'Blackwell Brewery',
			description: 'Fruchtiges, britisches Pale Ale gebraut mit Hopfensorten aus Deutschland und der Schweiz',
			style: 'Pale Ale - English',
			alco: 5.3,
			ibu: 30,
			rating: {
				average: 3.31,
				count: 108,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/blackwell-brewery-pale-ale/3766126'
		},
		{
			name: 'Time of the Season',
			brand: 'BIERlab',
			description: 'Dry Saison dry-hopped with Ekuanot.',
			style: 'Farmhouse Ale - Saison',
			alco: 6.7,
			ibu: 20,
			rating: {
				average: 3.8,
				count: 13,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/bierlab-time-of-the-season/4093774'
		},
		{
			name: 'Text Me When You Get Home',
			brand: 'Broken City Brewing',
			style: 'IPA - Imperial / Double',
			alco: 9.2,
			rating: {
				average: 3.8,
				count: 35,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/broken-city-brewing-text-me-when-you-get-home/3578150'
		},
		{
			name: 'Killer Queen',
			brand: 'BIERlab',
			description: 'Killer Queen is the first collaboration between Zürich Bierlab and Lost Grain. During this 13 hour brewday we mashed twice, extracted maximum aroma from the roasted malts and coffee from Kaffeepur and boiled the wort for a solid 3 hours! To build on the flavours from the brewday we visited La Flor Chocolatier in Binz selecting cacaonibs that was soaked for a week in bourbon before spending 2 weeks in the fermenter. As we were about to serve you the beer in March, Covid-19 hit and have added another few months of maturing time for the kegs!',
			style: 'Stout - Imperial / Double',
			alco: 9.5,
			rating: {
				average: 4.04,
				count: 42,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/bierlab-killer-queen/3878163'
		},
		{
			name: '43 Días',
			brand: 'Broken City Brewing',
			description: 'Mexican style Lager brewed with pilsner malt, 33% corn and Motueka hops',
			style: 'Lager - American',
			alco: 4.8,
			ibu: 15,
			rating: {
				average: 3.4,
				count: 96,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/broken-city-brewing-43-dias/3263909'
		},
		{
			name: 'I Love Hops #9 - ❤️ Silver Edition',
			brand: 'Hoppy People',
			description: 'We loved those hops : Amarillo, Mosaic, Eldorado, Idaho7, Sabro',
			style: 'IPA - Imperial / Double New England',
			alco: 8,
			rating: {
				average: 4.46,
				count: 31,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/hoppy-people-i-love-hops-9-silver-edition/4156361'
		},
		{
			name: 'Pornstar',
			brand: 'Hoppy People',
			style: 'IPA - American',
			alco: 6.1,
			ibu: 42,
			rating: {
				average: 3.64,
				count: 2143,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/hoppy-people-pornstar/917652'
		},
		{
			name: 'M☕kka Wild Ale',
			brand: 'Blackwell Brewery',
			description: 'Dunkles Wild Ale mit Kaffee der Rösterei Cafethek Wabern.',
			style: 'Wild Ale - Other',
			alco: 6.9,
			ibu: 35,
			rating: {
				average: 3.64,
				count: 73,
				fetched: '2021-02-16'
			},
			untappd: 'https://untappd.com/b/blackwell-brewery-m-kka-wild-ale/3908020'
		}
	];

	const slides = sessiondata.map(function (beer, index) {
		return <div className={styles.beer}>
			<div className={styles.beerinfo}>
				<h2><span className={styles.brand}>{beer.brand}</span> &nbsp; <span className={styles.name}>{beer.name}</span></h2>
				{beer.description &&
					<p className={styles.description}>{beer.description}</p>
				}
				<ul>
					{beer.style &&
						<li>
							<strong>Style</strong>
							<span>{beer.style}</span>
						</li>
					}
					{beer.alco &&
						<li>
							<strong>Style</strong>
							<span>{beer.alco}%</span>
						</li>
					}
					{beer.ibu &&
						<li>
							<strong>IBU</strong>
							<span>{beer.ibu}</span>
						</li>
					}
				</ul>
				{beer.rating &&
					<ul>
						<li>
							<strong>Average Rating</strong>
							<span>{beer.rating.average}</span>
						</li>
						<li>
							<strong>Rating Count</strong>
							<span>{beer.rating.count}</span>
						</li>
						<li>
							<strong>As at</strong>
							<span>{beer.rating.fetched}</span>
						</li>
					</ul>
				}
				{beer.untappd &&
					<p className={styles.untappd}><a href={beer.untappd}>Untappd</a></p>
				}
			</div>
			{beer.image &&
				<div className={styles.image}>
					<Image
						src={beer.image}
						alt={`Photo of ${beer.name}`}
						width={200}
						height={540}
						layout="responsive"
					/>
				</div>
			}
		</div>
	});

	return (
		<div>
			<Head>
				<title>Hako Live - 2020-12-18</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.meta}>
				<header>
					<Link href="/">
						<h1><a>Hako Live</a> &nbsp; <span className={styles.title}>2020-12-18</span></h1>
					</Link>
				</header>
			</div>
			<main className={styles.main}>
						{slides}
			</main>
		</div>
	)
}
