import React, { useState } from "react";
import Link from 'next/link'
import styles from './Navbar.module.css'
import {Container, Row, Col} from 'react-bootstrap'


export default function Navbar() {

  const [menuShown, setMenuShown] = useState(false)

  return (
      <Container>

      <div className={`${styles.hiddennav} d-block d-md-none`} onClick={() => setMenuShown(!menuShown)}>
        { menuShown ? "Hide Menu" : "Show Menu"}
      </div>

      
      <div className={styles.nav} style={!menuShown ? {display: "none"} : null}>
          <Row>
              <Col xs={12} md={2} lg={1}><Link href="/"><span>🏠 <span className="d-inline d-md-none">Home</span></span></Link></Col>
              <Col xs={12} md><Link href="/projects"><span>Projects</span></Link></Col>
              <Col xs={12} md><Link href="https://blog.jacklyn.dev"><span>Blog</span></Link></Col>
              <Col xs={12} md><Link href="/about"><span>About</span></Link></Col>
              <Col xs={12} md><Link href="/contact"><span>Contact</span></Link></Col>
          </Row>
      </div>

    </Container>
  )
}
