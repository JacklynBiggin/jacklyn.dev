import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Blog() {
  return (
      <Container>
        <div className="header" style={{backgroundColor: "var(--color-yellow)"}}>
            <h2>📚 Blog</h2>
        </div>
        <Row>
            <Col xs={12}>
                <div className="content">
					<div style={{textAlign: "center", fontSize: "3em", fontWeight: "bold"}}>Coming Soon!</div>
                    <p style={{textAlign: "center"}}>In the very near future, they'll be a blog here! But, there isn't yet. For now, why not check out my <a href="https://twitter.com/JackBiggin">Twitter</a> instead?</p>
                </div>
            </Col>
        </Row>

      </Container>
  )
}
