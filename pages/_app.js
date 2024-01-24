import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./_app.module.css";
import { Container } from 'react-bootstrap'
import Header from "../components/layout/Header.js"
import Navbar from "../components/layout/Navbar.js"
import Footer from "../components/layout/Footer.js"
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Jacklyn Biggin</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />*/}
				<meta name="msapplication-TileColor" content="#45257e"></meta>
				<meta name="theme-color" content="#45257e"></meta>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Fredoka:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

			</Head>
			<div className={styles.body}>
				<Container>
					<Header />
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</Container>
			</div>
		</>
	)
}

export default MyApp
