import React, { useState } from "react";
import styles from '../styles/projects.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectTile from '../components/ProjectTile'

export default function Projects() {

	const [oldProjectsShown, setOldProjectsShown] = useState(false)

	return (
		<div className={styles.body}>
			<Container>
				<div className="header" style={{ backgroundColor: "var(--color-red)" }}>
					<h2>🛠 Projects</h2>
				</div>
				<div className={styles.projects}>
					<Row>
						<Col xs={12} md={12} lg={8}>
							<ProjectTile
								label="community"
								link="https://hackquarantine.com/"
								//link="/projects/hackquarantine"
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
						<Col xs={12} md={6} lg={4}>
							<ProjectTile
								label="video"
								link="https://youtube.com/autocodetv"
								//link="/projects/autocodevideos"
								logo="./images/logos/projects/autocodevideos.png"
								mediumlogo
								background='url("./images/backgrounds/projects/autocodevideos.jpg")'
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<ProjectTile
								label="writing,video"
								link="https://www.youtube.com/watch?v=p4qdvP9HeoU&list=PLPDgudJ_VDUcgpSq_T1NdXaevNLawrOGo&index=8"
								//link="/projects/capitalone"
								logo="./images/logos/projects/capitalone.png"
								mediumlogo
								background='url("./images/backgrounds/projects/capitalone.png")'
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<ProjectTile
								label="community"
								link="https://blahajgang.lol"
								//link="/projects/blahajgang"
								logo="./images/logos/projects/blahajgang.png"
								background='url("./images/backgrounds/projects/blahajgang.png")'
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<ProjectTile
								label="video"
								link="https://www.youtube.com/watch?v=CcHc6mSya7c"
								//link="/projects/ghwstreams"
								logo="./images/logos/projects/ghwstreams.png"
								background='linear-gradient(180deg, #1c214d, #38439c)'
							/>
						</Col>
						{oldProjectsShown ?
							<>
								<Col xs={12} md={6} lg={4}>
									<ProjectTile
										label="code,2019"
										link="https://thisislsr.com"
										//link="/projects/lsr"
										mediumlogo
										logo="./images/logos/projects/lsr.png"
										background='linear-gradient(180deg, #390e1c, #1a0710)'
									/>
								</Col>
								<Col xs={12} md={6} lg={4}>
									<ProjectTile
										label="hackathon project,2019"
										link="https://devpost.com/software/sharescription"
										logo="./images/logos/projects/sharescription.png"
										mediumlogo
										background='linear-gradient(180deg, #00C9FF, #92FE9D)'
									/>
								</Col>
								<Col xs={12} md={6} lg={4}>
									<ProjectTile
										label="hackathon project,2018"
										link="https://devpost.com/software/ride-fyi"
										logo="./images/logos/projects/ridefyi.png"
										mediumlogo
										background='url("./images/backgrounds/projects/ridefyi.png")'
									/>
								</Col>
							</>
							: null}
						<Col xs={12} md={12}>
							<div className={styles.tagContainer}>
								<div className={styles.tag} onClick={() => setOldProjectsShown(!oldProjectsShown)}>
									{oldProjectsShown ? "Hide Older Projects" : "Show Older Projects"}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	)
}
