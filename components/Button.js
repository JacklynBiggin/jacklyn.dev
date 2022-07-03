import styles from './Button.module.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Button(props) {

    const background = "var(--color-blue)";

    return (
        <a href={props.link}>
            <div className={styles.button} style={{backgroundImage: `linear-gradient(to left, var(${props.color}-light) 50%, var(${props.color}) 50%)`}}>
                <Row>
                    <Col xs={4} lg={3} xl={2} style={{backgroundColor: `var(${props.color})`}}><div className={styles.icon}><FontAwesomeIcon icon={props.icon} fixedWidth /></div></Col>
                    <Col xs={8} lg={9} xl={10}>{props.text}</Col>
                </Row>
            </div>
        </a>
    )
}
