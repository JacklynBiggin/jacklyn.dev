import styles from './Header.module.css'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Socials from './Socials'

export default function Header() {
	return (
		<Container>
			<Row>
				<Col xs={12} md={8}>
					<Link href="./"><h1 class={styles.title}>Hey, I'm Jacklyn! <span className={`${styles.hand} animate__animated animate__tada`}>👋</span></h1></Link>
				</Col>
				<Col xs={12} md={4} className={`d-none d-md-block ${styles.socialscontainer}`}>
					<Socials />
				</Col>
			</Row>
		</Container>
	)
}
