import styles from './Header.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
      <Container>
        <Row>
          <Col xs={12} sm={6}>
          <h1 class={styles.title}>Hey, I'm Jacklyn! 👋</h1>
          </Col>
          <Col xs={12} sm={6}>
            <div class={styles.icons}>
              <a href="https://linkedin.com/in/JackBiggin"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://twitter.com/JackBiggin"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://youtube.com/JackBiggin"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://twitch.tv/JacklynBiggin"><FontAwesomeIcon icon={faTwitch} /></a>
              <br />
              <a href="https://timeline.jacklyn.dev"><div class={styles.tag}>Timeline</div></a>
              <a href="#"><div class={styles.tag}>Resume</div></a>
            </div>
          </Col>
        </Row>
    </Container>
  )
}
