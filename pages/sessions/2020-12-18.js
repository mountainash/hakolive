import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Session.module.scss'
import SwiperCore, { Navigation, Pagination, A11y, Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

const Code = (p) => <code className={styles.inlineCode} {...p} />

export default function FirstProst() {

	const sessiondata = [
		{
			name: '01',
			brand: 'Paul Bier',
			description: 'Das bier paul 01 ist ein helles, filtriertes Spezialbier. Zum Brauen dieses Bieres wird ausschliesslich helles Gerstenmalz, feinster Aromahopfen und reines, weiches Brauwasser verwendet. Die edel auftretende Bittere, die dem Bier eine frischherbe Note verleiht, die Vollmundigkeit und der Geschmack machen Lust auf mehr.',
			style: 'Pilsner - German',
			alco: 5.2,
			ibu: 27,
			rating: {
				average: 3.17,
				count: 1232,
				fetched: '2020-12-16'
			},
			image: '/img/erusbacher-paul-bier-paul-01.png',
			untappd: 'https://untappd.com/b/erusbacher-paul-bier-paul-01/26411'
		},
		{
			name: 'Liberty Ale',
			brand: 'Anchor Brewing Company',
			style: 'IPA - American',
			alco: 5.9,
			ibu: 47,
			rating: {
				average: 3.48,
				count: 103785,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/anchor-brewing-company-liberty-ale/5173'
		},
		{
			name: 'IPA',
			brand: 'Trois Dames',
			style: 'IPA - American',
			alco: 6.3,
			ibu: 60,
			rating: {
				average: 3.64,
				count: 2177,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/trois-dames-ipa/18247'
		},
		{
			name: 'Stone Sap',
			brand: 'Vibrant Forest Brewery',
			style: 'IPA - New England',
			alco: 6.8,
			ibu: 10,
			rating: {
				average: 3.82,
				count: 3572,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/vibrant-forest-brewery-stone-sap/2657375'
		},
		{
			name: 'Orval',
			brand: 'Brasserie d\'Orval',
			style: 'Pale Ale - Belgian',
			alco: 6.2,
			ibu: 36,
			rating: {
				average: 3.72,
				count: 186522,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/brasserie-d-orval-orval/851'
		},
		{
			name: 'La Fraîcheur au Basilic',
			brand: 'Trois Dames',
			style: 'Wheat Beer - Witbier',
			alco: 4.9,
			rating: {
				average: 3.6,
				count: 641,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/trois-dames-la-fraicheur-au-basilic/291724'
		},
		{
			name: 'Ayinger Celebrator',
			brand: 'Ayinger Privatbrauerei',
			style: 'Bock - Doppelbock',
			alco: 6.7,
			ibu: 24,
			rating: {
				average: 3.78,
				count: 139333,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/ayinger-privatbrauerei-ayinger-celebrator/6683'
		},
		{
			name: 'Merry Christmas',
			brand: 'St. Laurentius',
			style: 'Stout - Other',
			alco: 6.5,
			rating: {
				average: 3.54,
				count: 11,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/st-laurentius-merry-christmas/4105279'
		},
		{
			name: 'Blåck',
			brand: 'S&A Brewing',
			style: 'Stout - Russian Imperial',
			alco: 10.6,
			rating: {
				average: 3.99,
				count: 10,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/s-and-a-brewing-black/4105339'
		},
		{
			name: 'Grande Dame',
			brand: 'Trois Dames',
			style: 'Sour - Flanders Oud Bruin',
			alco: 7,
			ibu: 35,
			rating: {
				average: 3.84,
				count: 5285,
				fetched: '2021-01-12'
			},
			untappd: 'https://untappd.com/b/trois-dames-grande-dame/29273'
		}
	];

	const slides = sessiondata.map(function (beer, index) {
		return <SwiperSlide className={styles.swiperslide} key={`beer${index}`}>
			<div className={styles.beerinfo}>
				<h2><span className={styles.brand}>{beer.brand}</span> - <span className={styles.name}>{beer.name}</span></h2>
				<p className={styles.description}>{beer.description}</p>
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
						height={500}
						layout="responsive"
					/>
				</div>
			}
		</SwiperSlide>
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
				<Swiper
					tag="section"
					className={styles.swipercontainer}
					slidesPerView={1}
					spaceBetween={50}
					navigation
					pagination
					keyboard={{ enabled: true }}
					mousewheel={{ enabled: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={(swiper) => console.log('slide change: ', swiper.activeIndex)}
					>
						{slides}
				</Swiper>
			</main>
		</div>
	)
}