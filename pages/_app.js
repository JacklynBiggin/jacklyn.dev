import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./_app.module.css";
import {Container} from 'react-bootstrap'
import Header from "../components/layout/Header.js"
import Navbar from "../components/layout/Navbar.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.body}>
        <Container>
          <Header />
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  )
}

export default MyApp
