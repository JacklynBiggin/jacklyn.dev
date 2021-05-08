import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Button from "../../components/Button";
import styles from '../../styles/Home.module.css';

export default function HackQuarantine() {
    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.header} style={{ backgroundColor: "var(--color-red)" }}>
                    <h2>🛠 Projects</h2>
                </div>

                <div className={styles.projects}>
                    <Carousel className={styles.projecthero}>
                        <Carousel.Item>
                            <div style={{
                                background: `linear-gradient(
                      rgba(14, 20, 40, 0.85),
                      rgba(14, 20, 40, 0.85)
                      ),
                      /* bottom, image */
                      url("/hq-background.jpeg")`
                            }}>
                                <img src="/hq-logo.png" />
                                <span>MLH's first and largest ever digital event</span>
                            </div> 
                        </Carousel.Item>
                    </Carousel>


                    <Row>
                        <Col xs={12} sm={4}>
                            <div className={styles.stat}>
                                <span>3500+</span><span>Hackers</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className={styles.stat}>
                                <span>280,000+</span><span>Twitch Views</span>
                            </div>
                        </Col>
                        <Col xs={12} sm={4}>
                            <div className={styles.stat}>
                                <span>50+</span><span>technical workshops</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Button text="Hack Quarantine Twitter" icon={faTwitter} link="https://twitter.com/HackQuarantine"/>
                            <Button text="Hack Quarantine YouTube" icon={faYoutube} link="https://youtube.com/HackQuarantine"/>
                            <Button text="Millenium Point Article" icon={faFileAlt} link="https://www.millenniumpoint.org.uk/stem-heroes-local-students-hack-coronavirus/"/>

                        </Col>
                        <Col xs={8}>
                            <div className={styles.content}>
                                <p>Spicy jalapeno bacon ipsum dolor amet landjaeger salami prosciutto buffalo shankle cow capicola bacon cupim sirloin short loin. Venison shank cow pancetta, short ribs porchetta jerky shoulder bresaola. Andouille sausage kevin pancetta pork chop beef landjaeger beef ribs. Prosciutto corned beef drumstick bacon, picanha short loin sausage kevin ham. Pancetta ball tip t-bone hamburger, shankle porchetta biltong corned beef chicken short ribs pork chop tri-tip beef ribs. T-bone bacon porchetta frankfurter pork chop drumstick biltong beef ribs strip steak burgdoggen kevin. Pork loin pork chop boudin meatloaf, rump strip steak shank hamburger drumstick cow.</p>
                                <p>Pancetta tongue pork chop spare ribs filet mignon porchetta salami. Pig ham hock tail, strip steak alcatra biltong turducken tri-tip. Biltong leberkas drumstick pork loin chislic, swine strip steak ham beef buffalo cow burgdoggen andouille chicken jerky. Bacon flank tongue ham hock, alcatra kevin chislic pig chicken tri-tip beef ribs biltong jerky swine. Shankle strip steak chicken, tongue tail jerky beef ribs drumstick capicola fatback sirloin.</p>
                                <p>Bacon leberkas sausage alcatra, turducken spare ribs pork loin short ribs biltong jowl pastrami ground round tail meatloaf. Bresaola brisket picanha meatball, leberkas bacon fatback salami jerky pastrami t-bone andouille tail kevin. Strip steak hamburger bresaola ham pastrami pig fatback. Alcatra landjaeger leberkas t-bone kevin.</p>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}
