import styles from './Footer.module.css'
import {Container} from 'react-bootstrap'
export default function Footer() {
  return (
    <footer>
      <Container>
        <p className={styles.footer}>Made by me and stream friends with love, sweat, tears and NextJS</p>
      </Container>
    </footer>
  )
}
