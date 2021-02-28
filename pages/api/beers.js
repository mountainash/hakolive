// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Handler = (req, res) => {
	let response;

	if (req.query.date)
		response = sessiondata[req.query.date]
	else if (req.query.all)
		response = sessiondata
	else {
		// output the session dates (the object keys)
		response = new Array();
		Object.keys(sessiondata).forEach(item => (
			response.push(item)
		))
	}

   res.status(200).json(response)
}

const sessiondata = {
	'2020-12-18': [
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
	],
	'2021-02-19': [
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
	]
};

export default Handler