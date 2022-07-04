import styles from './Footer.module.css'
import {Container} from 'react-bootstrap'
import Socials from './Socials'
export default function Footer() {
  return (
    <footer>
      <Container>
        <p className={styles.footer}>&copy; Jacklyn Biggin 2022 • Made in 🍁 with 💜 using NextJS • Hosted on Vercel • <a href="https://github.com/JackBiggin/jacklyn.dev">View on GitHub</a></p>
        <span className="d-block d-md-none"><Socials /></span>
      </Container>
    </footer>
  )
}
