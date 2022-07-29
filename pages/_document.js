import Document, { Html, Head, Main, NextScript } from 'next/document'
import DefaultMeta from '../components/beer-meta'

class MyDocument extends Document {
  render() {
	return (
		<Html lang="en">
		<Head />
		<DefaultMeta />
		<body>
		  <Main />
		  <NextScript />
		</body>
	  </Html>
	)
  }
}

export default MyDocument