import styles from './Socials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    return (
        <div className={styles.iconcontainer}>
            <div className={styles.icons}>
                <a href="https://linkedin.com/in/JackBiggin"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://twitter.com/JackBiggin"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://youtube.com/JackBiggin"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://twitch.tv/JacklynBiggin"><FontAwesomeIcon icon={faTwitch} /></a>
                <br className="d-none d-md-inline" />
                <a className={styles.tag} href="https://timeline.jacklyn.dev"><div>Timeline</div></a>
                <a className={styles.tag} href="./Jacklyn%20Biggin%20Resume.pdf"><div>Resume</div></a>
            </div>
        </div>
    )
}
