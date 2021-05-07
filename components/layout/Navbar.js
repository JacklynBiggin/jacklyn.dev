import Link from 'next/link'

import styles from './Navbar.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Navbar() {
  return (
      <Container>
        <div className={styles.nav}>
            <Row>
                <Col xs={1}><Link href="/"><span>🏠</span></Link></Col>
                <Col><Link href="/projects"><span>Projects</span></Link></Col>
                <Col><Link href="/blog"><span>Blog</span></Link></Col>
                <Col><Link href="/about"><span>About Me</span></Link></Col>
                <Col><Link href="/contact"><span>Contact</span></Link></Col>
            </Row>
        </div>
    </Container>
  )
}
