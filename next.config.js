const path = require('path')

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/generate-sitemap')
		}

		return config
	}
}