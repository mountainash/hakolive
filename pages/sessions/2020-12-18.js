import Head from 'next/head'
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y, Keyboard, Mousewheel]);

export default function FirstProst() {
	return (
		<div>
			<style jsx global>{`
			body {
				height: 100hv;
			}
			a:hover {
				text-decoration: underline;
			}
			.meta {
				display: none;
			}
			.swiper-container {
				height: 100vh;
			}
			.swiper-slide {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			`}</style>
			<div className="meta">
				<Head>
					<title>Hako Live - 2020-12-18</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
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
				<SwiperSlide><a href="https://untappd.com/b/erusbacher-paul-bier-paul-01/26411">Paul Bier - 01</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/anchor-brewing-company-liberty-ale/5173">Anchor Brewing Company - Liberty Ale</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/trois-dames-ipa/18247">Trois Dames - IPA</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/vibrant-forest-brewery-stone-sap/2657375">Vibrant Forest Brewery - Stone Sap</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/brasserie-d-orval-orval/851">Brasserie d'Orval - Orval</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/trois-dames-la-fraicheur-au-basilic/291724">Trois Dames - La Fraîcheur au Basilic</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/ayinger-privatbrauerei-ayinger-celebrator/6683">Ayinger Privatbrauerei - Ayinger Celebrator</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/st-laurentius-merry-christmas/4105279">St. Laurentius - Merry Christmas</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/s-and-a-brewing-black/4105339">S&amp;A Brewing - Blåck</a></SwiperSlide>
				<SwiperSlide><a href="https://untappd.com/b/trois-dames-grande-dame/29273">Trois Dames - Grande Dame</a></SwiperSlide>
			</Swiper>
		</div>
	)
}