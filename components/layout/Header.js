import styles from './Header.module.css'
import Link from 'next/link'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
          <Link href="./"><h1 class={styles.title}>Hey, I'm Jacklyn! <span className={`${styles.hand} animate__animated animate__tada`}>👋</span></h1></Link>
          </Col>
          <Col xs={12} md={4}>
          <div className={styles.iconcontainer}>
            <div class={styles.icons}>
              <a href="https://linkedin.com/in/JackBiggin"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://twitter.com/JackBiggin"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://youtube.com/JackBiggin"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://twitch.tv/JacklynBiggin"><FontAwesomeIcon icon={faTwitch} /></a>
              <br className="d-none d-md-inline"/>
              <a class={styles.tag} href="https://timeline.jacklyn.dev"><div>Timeline</div></a>
              <a class={styles.tag} href="./Jacklyn%20Biggin%20Resume.pdf"><div>Resume</div></a>
            </div>
          </div>
          </Col>
        </Row>
    </Container>
  )
}
