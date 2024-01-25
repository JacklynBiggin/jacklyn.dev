import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import ProjectTile from '../components/ProjectTile'
import CurrentlyBox from '../components/CurrentlyBox'
import Video from '../components/Video'


export default function Home() {
	return (
		<Container>
			<Row>
				{/*<Col xs={12}>
					<div className={`content low-padding ${styles.construction}`}>
						<p>This website is still a work in progress! Some features, especially on mobile, might not work as expected.</p>
					</div>
				</Col>*/}
				<Col xs={12} xl={9}>
					<div className="content full-height">
						<p className={styles.handwritten}>Welcome to my corner of the internet! 🎉</p>
						<p>I'm a developer advocate at <a href="https://automattic.com">Automattic</a> working on making <a href="https://woo.com">WooCommerce's</a> developer experience awesome. Previously, I led developer relations at <a href="https://autocode.com">Autocode</a> and supported over fifty hackathons worldwide with <a href="https://mlh.io">Major League Hacking</a>. I'm based out of Canada. 🍁 </p>
						<p style={{ marginBottom: "-1em" }}>While you're here, feel free to <Link href="./projects">past projects</Link>, read some of my <Link href="./blog">blog posts</Link>, or learn a bit more <Link href="./about">about me</Link>.</p>
					</div>
				</Col>
				<Col xs={12} xl={3} className="d-none d-xl-flex">
					<img src="./jacklyn.jpeg" alt="Jacklyn" className={styles.profile} />
				</Col>
			</Row>
			<br />
			<Row>
				<Col xs={12}>
					<div className="header" style={{ backgroundColor: "var(--color-purple)" }}>
						<h2>✨ Get to Know Me</h2>
					</div>
					<Video videoId="5qap5aO4i9A" thumbnail="./images/thumbnail.png" />
				</Col>
			</Row>
		</Container>
	)
}
