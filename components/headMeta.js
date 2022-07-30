import Head from 'next/head'

const HeadMeta = () => (
	<>
		<link rel="manifest" href="/site.webmanifest" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<meta name="msapplication-TileColor" content="#b27942" />
		<meta name="theme-color" content="#b27942" />
		<meta name="description" content={`Some beers were drunk once upon a time in Winterthur .... and it was these ones`} />
		{/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
	</>
)

export default HeadMeta