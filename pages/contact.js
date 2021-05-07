import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Contact() {
  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.header} style={{backgroundColor: "var(--color-blue)"}}>
            <h2>📨 Contact Me</h2>
        </div>
        <Row>
            <Col xs={12} md={8}>
                <div className={styles.content}>
                    ...
                </div>
            </Col>
        </Row>

      </Container>
    </div>
  )
}
