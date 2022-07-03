import styles from '../styles/projects.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className={styles.body}>
      <Container>
        <div className="header" style={{backgroundColor: "var(--color-red)"}}>
            <h2>🛠 Projects</h2>
        </div>
        <div className={styles.projects}>
          <Row>
              <Col xs={12} md={8}>
                <Link href="/projects/hackquarantine">
                  <div className={styles.project} style={{
                    background: `linear-gradient(
                      rgba(14, 20, 40, 0.85),
                      rgba(14, 20, 40, 0.85)
                      ),
                      /* bottom, image */
                      url("./hq-background.jpeg")`
                  }}>
                    <div className="label">community</div>
                    <div className={styles.wrapper}>
                      <img src="./hq-logo.png" className={styles.logo} />
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={12} md={4}>
              <div className={styles.project} style={{
                  backgroundImage: `url("./blahaj-bg.png")`
                }}>
                  <div className="label">community</div>
                    <div className={styles.wrapper}>
                      <img src="./blahajlogo-min.png" className={styles.logo} />
                    </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.project}>
                  ,,,
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.project}>
                  ,,,
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.project}>
                  ,,,
                </div>
              </Col>
          </Row>
        </div>

      </Container>
    </div>
  )
}
