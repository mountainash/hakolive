import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Session.module.scss'
import SwiperCore, { Navigation, Pagination, A11y, Keyboard, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

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
			image: '/public/img/erusbacher-paul-bier-paul-01.png',
			untappd: 'https://untappd.com/b/erusbacher-paul-bier-paul-01/26411'
		},
		{
			name: 'Liberty Ale',
			brand: 'Anchor Brewing Company',
			untappd: 'https://untappd.com/b/anchor-brewing-company-liberty-ale/5173'
		},
		{
			name: 'IPA',
			brand: 'Trois Dames',
			untappd: 'https://untappd.com/b/trois-dames-ipa/18247'
		},
		{
			name: 'Stone Sap',
			brand: 'Vibrant Forest Brewery',
			untappd: 'https://untappd.com/b/vibrant-forest-brewery-stone-sap/2657375'
		},
		{
			name: 'Orval',
			brand: 'Brasserie d\'Orval',
			untappd: 'https://untappd.com/b/brasserie-d-orval-orval/851'
		},
		{
			name: 'La Fraîcheur au Basilic',
			brand: 'Trois Dames',
			untappd: 'https://untappd.com/b/trois-dames-la-fraicheur-au-basilic/291724'
		},
		{
			name: 'Ayinger Celebrator',
			brand: 'Ayinger Privatbrauerei',
			untappd: 'https://untappd.com/b/ayinger-privatbrauerei-ayinger-celebrator/6683'
		},
		{
			name: 'Merry Christmas',
			brand: 'St. Laurentius',
			untappd: 'https://untappd.com/b/st-laurentius-merry-christmas/4105279'
		},
		{
			name: 'Blåck',
			brand: 'S&A Brewing',
			untappd: 'https://untappd.com/b/s-and-a-brewing-black/4105339'
		},
		{
			name: 'Grande Dame',
			brand: 'Trois Dames',
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
				<Image
					className={styles.image}
					src={beer.image}
					alt={`Photo of ${beer.name}`}
					layout="fill"
					unsized
				/>
			}
		</SwiperSlide>
	});

	return (
		<div>
			<div className={styles.meta}>
				<Head>
					<title>Hako Live - 2020-12-18</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<header>
					<Link href="/">
						<h1><a>Hako Live</a> - <span className={styles.title}>2020-12-18</span></h1>
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