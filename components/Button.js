import styles from './Button.module.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Button(props) {
    return (
        <a href={props.link}>
            <div className={styles.button}>
                <Row>
                    <Col xs={3} md={2}><div className={styles.icon}><FontAwesomeIcon icon={props.icon} fixedWidth /></div></Col>
                    <Col xs={9} md={10}>{props.text}</Col>
                </Row>
            </div>
        </a>
    )
}
