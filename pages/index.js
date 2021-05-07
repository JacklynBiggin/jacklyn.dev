import Head from 'next/head'
import styles from '../styles/Home.module.css'
var classNames = require('classnames');
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.label}>btw i did this</div>
          ...
        </div>
        <div className={styles.content}>
            content is here
        </div>
        <div className={styles.footer}>
          Footer
        </div>
      </Container>
    </div>
  )
}
