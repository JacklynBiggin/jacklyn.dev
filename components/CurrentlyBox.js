import styles from './CurrentlyBox.module.css'
import { Row, Col } from 'react-bootstrap'
export default function CurrentlyBox(props) {

    return (
        <div className={`content low-padding ${styles.currently}`} style={{ backgroundColor: props.color }}>
            <Row style={props.inverted ? { color: "var(--color-white)" } : null}>
                <Col xs={3}>
                    <img className={styles.logo} src={props.image} />
                </Col>
                <Col xs={9} className={styles.info}>
                    <p dangerouslySetInnerHTML={{ __html: props.thing }} />
                </Col>
            </Row>
        </div>
    )
}
