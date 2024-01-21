import styles from './EducationBox.module.css'
import { Row, Col } from 'react-bootstrap'
import Extracurricular from '../components/Extracurricular'
export default function ExperienceBox(props) {

    return (
        <div className={`content low-padding ${props.type == "education" ? styles.edu : null}`} style={{ backgroundColor: props.color }}>
            <Row>
                <Col xs={12} className={styles.info}>
                    <div className={styles.wrapper}>
                        <img className={props.type == "award" ? styles.logoaward : styles.logo} alt={props.name} src={props.image} />
                        <div>
                            <p><strong>{props.name}</strong></p>
                            <p>{props.institution}</p>
                            <p>{props.from} {props.to ? "to " + props.to : null} {props.additional ? " • " + props.additional : null}</p>
                        </div>
                    </div>

                    {props.type == "work" ?
                        <ul>
                            {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                        </ul> 
                    : null}

                    <Row className={styles.innerWrapper}>
                        {props.extracurriculars !== undefined ? props.extracurriculars.map((extracurricular, index) => <Extracurricular key={index} name={extracurricular.name} institution={extracurricular.institution} image={extracurricular.image} />) : null} 
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
