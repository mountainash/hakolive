import Document, { Html, Head, Main, NextScript } from 'next/document'
import HeadMeta from '../components/headMeta'

class MyDocument extends Document {
  render() {
	return (
		<Html lang="en">
		<Head>
			<HeadMeta />
		</Head>
		<body>
		  <Main />
		  <NextScript />
		</body>
	  </Html>
	)
  }
}

export default MyDocument