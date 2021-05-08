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
                <div className={styles.content}>
                <div className={styles.header} style={{backgroundColor: "var(--color-green)"}}>
                  <h3>TL;DR</h3>
                </div>
                    <ul className={styles.tldr}>
                      <li>Toronto, ON, Canada</li>
                      <li>Senior Developer at RBC</li>
                      <li>MLH Coach</li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} md={8}>
                <div className={`${styles.content} full-height`}>
                    <p className={styles.handwritten}>Hey, I'm Jacklyn! 👋</p>
                    <p>Suspendisse sagittis cursus felis, eu bibendum urna. Phasellus suscipit, mauris id imperdiet dictum, est odio accumsan eros, non fringilla quam dolor in turpis. Etiam commodo elit leo, et blandit augue dictum vel. Donec condimentum enim vel massa interdum, faucibus sodales nunc hendrerit. Maecenas tortor tellus, tempus non tempor finibus, venenatis eu mauris. In aliquet viverra nibh. Donec venenatis consequat libero vel condimentum. Etiam posuere sodales neque eget eleifend. Etiam et tempor magna. Vestibulum nunc tortor, hendrerit eu mi sit amet, laoreet dictum libero. Nullam urna ligula, volutpat quis fringilla in, finibus et turpis. Curabitur fermentum bibendum nisi, viverra feugiat lacus consectetur sit amet. Etiam eu augue non augue auctor pellentesque. Sed lacinia nibh vel sem aliquam sollicitudin. Aliquam erat volutpat. Mauris et ex a sem pulvinar mollis.</p>
                </div>
            </Col>
        </Row>
        {/*<Row>
          <Col xs={12} sm={4}>
              <div className={ `${styles.award} ${styles.ilsra}`}>
                <img src="./images/awards/ilsra.png" />
                <div>Hero of the Moment</div>
                <div>I Love Student Radio Awards</div>
              </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className={ `${styles.award} ${styles.award2}`}>
                <img src="./images/awards/xxx.svg" />
                <div>HIDDEN</div>
                <div>HIDDEN</div>
              </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className={ `${styles.award} ${styles.award3}`}>
              <img src="./images/awards/xxx.png" />
              <div>HIDDEN</div>
              <div>HIDDEN</div>
              </div>
          </Col>
        </Row>
        */}
        <br />
        <div className={styles.header} style={{backgroundColor: "var(--color-green)"}}>
            <h3>👩‍💻 Education</h3>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.content}>
              <p>uni of leeds ba hons digital media with picture yeet</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.content}>
              <p>western university</p>
            </div>
          </Col>
          <br />
        </Row>

        <br />
        <div className={styles.header} style={{backgroundColor: "var(--color-green)"}}>
        <h3>👩‍💻 Work Experience</h3>
        </div>
      </Container>
    </div>
  )
}
