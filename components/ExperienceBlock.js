import styles from './ExperienceBlock.module.css'
import { Row, Col } from 'react-bootstrap'

export default function ExperienceBlock(props) {
    return (
        <div className="content low-padding">
        <Row>
            <Col xs={2}>
                <img className={styles.logo} src={`./images/logos/${props.logo}`} />
            </Col>
            <Col xs={10}>
                <p><strong>{props.role}</strong> at {props.company}<br/><span className={styles.dates}>{props.dates}</span></p>
                <ul>
                    {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li> )}
                </ul>
            </Col>
        </Row>
        </div>
    )
}