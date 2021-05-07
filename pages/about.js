import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function About() {
  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.header} style={{backgroundColor: "var(--color-green)"}}>
            <h2>👩‍💻 About Me</h2>
        </div>
        <Row>
            <Col xs={12} md={4}>
                <img className={styles.profile} src="./jacklyn.jpeg" />
            </Col>
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
