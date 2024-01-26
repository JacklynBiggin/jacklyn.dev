import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import ExperienceBox from '../components/ExperienceBox'
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
						<p style={{ marginBottom: "-1em" }}>While you're here, feel free to <Link href="./projects">past projects</Link>, read some of my <Link href="./blog">blog posts</Link>, or learn <Link href="./about">about me</Link>.</p>
					</div>
				</Col>
				<Col xs={12} xl={3} className="d-none d-xl-flex">
					<img src="./jacklyn.jpeg" alt="Jacklyn" className={styles.profile} />
				</Col>
			</Row>
			<br />
			{/*<Row>
				<Col xs={12}>
					<div className="header" style={{ backgroundColor: "var(--color-purple)" }}>
						<h2>✨ Get to Know Me</h2>
					</div>
					<Video videoId="5qap5aO4i9A" thumbnail="./images/thumbnail.png" />
				</Col>
			</Row>*/}
			<Row>
				<Col xs={12} xl={6}>
					<ExperienceBox
						type="education"
						color="#DBC0FF"
						name="Developer Advocate"
						institution="Automattic / WooCommerce"
						additional="Making docs better and developers happier!"
						image="./images/logos/experience/woocommerce.jpg"
					/>
					<img src="./images/assets/arrow-left.svg" className={styles.arrowLeft} />
					<div className={`${styles.scribbles} ${styles.textLeft}`}>Work</div>
				</Col>
				<Col xs={12} xl={6}>
					<ExperienceBox
						type="education"
						color="#DBC0FF"
						name="Master of Digital Experience Innovation"
						institution="University of Waterloo"
						additional="Building cool things with cool people!"
						image="./images/logos/education/waterloo.jpg"
					/>
					<img src="./images/assets/arrow-left.svg" className={styles.arrowRight} />
					<div className={`${styles.scribbles} ${styles.textRight}`}>School</div>
				</Col>
			</Row>
		</Container>
	)
}
