import Head from 'next/head'
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

export default function FirstProst() {
	return (
		<div>
			<style jsx global>{`
			:root {
				--swiper-theme-color: rgb(111,121,103);
			}

			body {
				height: 100vh;
				background: rgb(153,143,132);
			}
			a {
				display: inline-block;
				padding: 1em;
				background: rgb(255,203,5);
				border-radius: 30px;
				text-decoration: none;
				text-align: center;
				font-weight: bold;
				line-height: 1;
				color: rgb(62,51,34);
			}
			.meta header {
				position: absolute;
				top: 1em;
				width: 100%;
				z-index: 1000;
				text-align: center;
			}
			.meta nav {
				display: none;
			}
			.swiper-container {
				height: 100vh;
				padding: 0 3em;
			}
			.swiper-slide {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin: 7em 0;
				border-radius: 10px;
				background :rgb(204,191,176);
			}
			`}</style>
			<div className="meta">
				<Head>
					<title>Hako Live - 2020-12-18</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<header>
					<h1>Hako Live - 2020-12-18</h1>
				</header>
				<nav>
					<Link href="/">
					<a>Back to home</a>
					</Link>
				</nav>
			</div>
			<Swiper
			slidesPerView={1}
			spaceBetween={30}
			navigation
			keyboard={{ enabled: true }}
			mousewheel={{ enabled: true }}
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide><h2>Paul Bier - 01</h2><p><a href="https://untappd.com/b/erusbacher-paul-bier-paul-01/26411">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Anchor Brewing Company - Liberty Ale</h2><p><a href="https://untappd.com/b/anchor-brewing-company-liberty-ale/5173">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Trois Dames - IPA</h2><p><a href="https://untappd.com/b/trois-dames-ipa/18247">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Vibrant Forest Brewery - Stone Sap</h2><p><a href="https://untappd.com/b/vibrant-forest-brewery-stone-sap/2657375">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Brasserie d'Orval - Orval</h2><p><a href="https://untappd.com/b/brasserie-d-orval-orval/851">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Trois Dames - La Fraîcheur au Basilic</h2><p><a href="https://untappd.com/b/trois-dames-la-fraicheur-au-basilic/291724">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Ayinger Privatbrauerei - Ayinger Celebrator</h2><p><a href="https://untappd.com/b/ayinger-privatbrauerei-ayinger-celebrator/6683">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>St. Laurentius - Merry Christmas</h2><p><a href="https://untappd.com/b/st-laurentius-merry-christmas/4105279">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>S&amp;A Brewing - Blåck</h2><p><a href="https://untappd.com/b/s-and-a-brewing-black/4105339">Untappd</a></p></SwiperSlide>
				<SwiperSlide><h2>Trois Dames - Grande Dame</h2><p><a href="https://untappd.com/b/trois-dames-grande-dame/29273">Untappd</a></p></SwiperSlide>
			</Swiper>
		</div>
	)
}