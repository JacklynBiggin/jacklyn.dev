import styles from '../styles/projects.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectTile from '../components/ProjectTile'

export default function Projects() {
	return (
		<div className={styles.body}>
			<Container>
				<div className="header" style={{ backgroundColor: "var(--color-red)" }}>
					<h2>🛠 Projects</h2>
				</div>
				<div className={styles.projects}>
					<Row>
						<Col xs={12} md={8}>
						<ProjectTile
								label="community"
								link="/projects/hackquarantine"
								logo="./images/logos/projects/hackquarantine.png"
								largelogo
								background='linear-gradient(
									rgba(14, 20, 40, 0.85),
									rgba(14, 20, 40, 0.85)
									),
									/* bottom, image */
									url("./images/backgrounds/projects/hackquarantine.jpeg")'
							 />
						</Col>
						<Col xs={12} md={4}>
							<ProjectTile
								label="video"
								link="/projects/autocodevideos"
								logo="./images/logos/projects/autocodevideos.png"
								mediumlogo
								background='url("./images/backgrounds/projects/autocodevideos.jpg")'
							 />
						</Col>
						<Col xs={12} md={4}>
							<ProjectTile
								label="writing,video"
								link="/projects/capitalone"
								logo="./images/logos/projects/capitalone.png"
								mediumlogo
								background='url("./images/backgrounds/projects/capitalone.png")'
							 />
						</Col>
						<Col xs={12} md={4}>
							<ProjectTile
								label="community"
								link="/projects/blahajgang"
								logo="./images/logos/projects/blahajgang.png"
								background='url("./images/backgrounds/projects/blahajgang.png")'
							 />
						</Col>
						<Col xs={12} md={4}>
							<ProjectTile
								label="video"
								link="/projects/ghwstreams"
								logo="./images/logos/projects/ghwstreams.png"
								background='linear-gradient(180deg, #1c214d, #38439c)'
							 />
						</Col>
					</Row>
				</div>

			</Container>
		</div>
	)
}
