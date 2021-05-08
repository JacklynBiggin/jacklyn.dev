import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./_app.module.css";
import {Container} from 'react-bootstrap'
import Header from "../components/layout/Header.js"
import Navbar from "../components/layout/Navbar.js"
import Footer from "../components/layout/Footer.js"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
