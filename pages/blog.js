import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Blog() {
  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.header} style={{backgroundColor: "var(--color-yellow)"}}>
            <h2>📚 Blog</h2>
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
