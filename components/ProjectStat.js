
import styles from './ProjectStat.module.css'
import {Col} from 'react-bootstrap'

export default function ProjectStat(props) {

    return (
        <Col xs={12} md={4}>
            <div className={styles.stat}>
                <span>{props.stat}</span><span>{props.description}</span>
            </div>
        </Col>
    )
}