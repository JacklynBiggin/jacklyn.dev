import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import ProjectTile from '../components/ProjectTile'
import CurrentlyBox from '../components/CurrentlyBox'

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
						<p className={styles.handwritten}>Hey, I'm Jacklyn, and welcome to my website! 👋</p>
						<p>I'm a developer advocate and love creating opportunities for young people to get into tech. I've got a ton of experience creating awesome hackathons, technical livestreams and videos.</p>
						<p style={{ marginBottom: "-1em" }}>While you're here, feel free to <Link href="./projects">check out my past projects</Link>, <Link href="./blog">read some of my blog posts</Link>, or <Link href="./about">learn a bit more about me</Link>.</p>
					</div>
				</Col>
				<Col xs={12} xl={3} className="d-none d-xl-flex">
					<img src="./jacklyn.jpeg" alt="Jacklyn" className={styles.profile} />
				</Col>
			</Row>
			<br />
			<Row>
				<Col xs={12} md={7} lg={8}>
					<div className="header" style={{ backgroundColor: "var(--color-purple)" }}>
						<h2>🚀 Featured Projects</h2>
					</div>
					<div className={styles.projects}>
						<Row>
							<Col xs={12} md={12} lg={12}>
								<ProjectTile
									label="community"
									link="https://hackquarantine.com/"
									//link="/projects/hackquarantine"
									logo="./images/logos/projects/hackquarantine.png"
									largelogo
									alt="Hack Quarantine"
									background='linear-gradient(
									rgba(14, 20, 40, 0.85),
									rgba(14, 20, 40, 0.85)
									),
									/* bottom, image */
									url("./images/backgrounds/projects/hackquarantine.jpeg")'
								/>
							</Col>
							<Col xs={12} lg={6}>
								<ProjectTile
									label="video"
									link="https://youtube.com/autocodetv"
									//link="/projects/autocodevideos"
									alt="Autocode Tutorials"
									logo="./images/logos/projects/autocodevideos.png"
									mediumlogo
									background='url("./images/backgrounds/projects/autocodevideos.jpg")'
								/>
							</Col>
							<Col xs={12} lg={6}>
								<ProjectTile
									label="community"
									link="https://blahajgang.lol"
									alt="BLAHAJGang"
									//link="/projects/blahajgang"
									logo="./images/logos/projects/blahajgang.png"
									background='url("./images/backgrounds/projects/blahajgang.png")'
								/>
							</Col>
						</Row>
					</div>
				</Col>
				<Col xs={12} md={5} lg={4}>
					<div className="header" style={{ backgroundColor: "var(--color-purple)" }}>
						<h2>💡 TL;DR</h2>
					</div>
					<CurrentlyBox
						color="var(--color-white)"
						thing="Improving docs and spreading good vibes at <strong>Automattic</strong>"
						image="./images/logos/experience/automattic.jpg"
					/>
					<CurrentlyBox
						color="var(--color-waterloobg)"
						thing="Studying <strong>Digital Experience Innovation</strong> at the <strong>University of Waterloo</strong>"
						image="./images/logos/education/waterloo.jpg"
					/>
				</Col>
			</Row>

		</Container>
	)
}
