import styles from './Socials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faYoutube, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
    return (
        <div className={styles.iconcontainer}>
            <div className={styles.icons}>
                <a href="https://linkedin.com/in/JacklynBiggin"><FontAwesomeIcon width="0" icon={faLinkedin} /></a>
                <a href="https://github.com/JacklynBiggin"><FontAwesomeIcon width="0" icon={faGithub} /></a>
                <a href="https://twitter.com/JackBiggin"><FontAwesomeIcon width="0" icon={faTwitter} /></a>
                <a href="https://youtube.com/@JacklynBiggin"><FontAwesomeIcon width="0" icon={faYoutube} /></a>
                {/*<a href="https://twitch.tv/JacklynBiggin"><FontAwesomeIcon width="0" icon={faTwitch} /></a>*/}
                <br className="d-none d-md-inline" />
                <a className={styles.tag} href="./Jacklyn%20Biggin%20Resume.pdf"><div>Resume</div></a>
                <a className={styles.tag} href="mailto:hi@jacklyn.dev"><div>Email Me</div></a>
            </div>
        </div>
    )
}
