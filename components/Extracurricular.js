import styles from './EducationBox.module.css'
import { Row, Col } from 'react-bootstrap'
export default function Extracurricular(props) {

    return (
        <Col md={6} lg={4}>
            <div className={styles.inner}>
                <img className={styles.icon} src={props.image} />
                <div>
                    <p>{props.name}</p>
                    <p>{props.institution}</p>
                </div>
            </div>
        </Col>
    )
}
