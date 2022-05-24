// Combine the local beer info with the Untappd API
export const enrichBeer = async (beer) => {
	if (!beer.untappdId) return beer

	const fetchData = await fetchBeerInfo(beer.untappdId)

	return {
		...beer,
		untappd: {
			description: fetchData?.response?.beer?.beer_description,
			style: fetchData?.response?.beer?.beer_style,
			alco: fetchData?.response?.beer?.beer_abv,
			ibu: fetchData?.response?.beer?.beer_ibu,
			count: fetchData?.response?.beer?.stats?.total_count,
			url: `https://untappd.com/b/${fetchData?.response?.beer?.beer_slug}/${fetchData?.response?.beer?.bid}`,
			image: fetchData?.response?.beer?.beer_label,
		}
	}
}

// Return the beer info from the Untappd API
const fetchBeerInfo = async (beerId) => {
	if (!process.env.UNTAPPD_CLIENT_ID && !process.env.UNTAPPD_CLIENT_SECRET) {
		return {
			error: `Missing Untappd client ID and secret`
		}
	}

	return fetch(`https://api.untappd.com/v4/beer/info/${beerId}?client_id=${process.env.UNTAPPD_CLIENT_ID}&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`)
		.then(res => res.json())
		.catch(err => { error: err })
}