import styles from './ExperienceBox.module.css'
import { Row, Col } from 'react-bootstrap'
export default function ExperienceBox(props) {

    return (
        <div className={`content low-padding ${props.type == "award" ? "low-margin-bottom" : ""}`} style={{ backgroundColor: props.color }}>
            <Row style={props.inverted ? { color: "var(--color-white)" } : null}>
                <Col xs={3}>
                    <img className={props.type == "award" ? styles.logoaward : styles.logo} src={props.image} />
                </Col>
                <Col xs={9} className={styles.educationinfo}>
                    <p><strong>{props.name}</strong></p>
                    <p>{props.institution}</p>
                    <p>{props.from} {props.to ? "to " + props.to : null}</p>
                    <p>{props.additional}</p>
                    {props.type == "work" ?
                        <ul>
                            {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                        </ul> 
                    : null}
                </Col>
            </Row>
        </div>
    )
}
