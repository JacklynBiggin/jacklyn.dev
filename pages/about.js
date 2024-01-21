import styles from '../styles/about.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import ExperienceBox from '../components/ExperienceBox'
import Link from 'next/link'

export default function About() {
	return (
		<div className={styles.body}>
			<Container>
				<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
					<h2>👩‍💻 About Me</h2>
				</div>
				<Row>
					<Col xs={12} md={4}>
						<img className={styles.profile} alt="Jacklyn" src="./jacklyn.jpeg" />
						<div className="content">
							<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
								<h3>💡 TL;DR</h3>
							</div>
							<ul className={styles.tldr}>
								<li>Toronto, ON, Canada</li>
								<li>Developer Relations Lead at Autocode</li>
								<li>MLH Coach</li>
							</ul>
						</div>
					</Col>
					<Col xs={12} md={8}>
						<div className={`content almost-full-height`}>
							<p className={styles.handwritten}>Hey, I'm Jacklyn! 👋</p>
							<p>I'm a developer advocate, lover of sharks, and always in search of opportunities to help newbies break into tech.</p>
							<p>Currently, I'm working as a Developer Relations Lead at <a href="https://autocode.com">Autocode</a> where I empower young developers to make Discord Bots, APIs and more! You might have seen one of my <a href="https://youtube.com/autocodetv">tutorial videos</a> or <a href="https://autocode.com/community/tags/tutorial/">read one of my guides</a> if you're coming over to this website from Autocode.</p>
							<p>On the side, I support students running hackathons through <a href="https://mlh.io">Major League Hacking</a>. If you've ever listened to someone explaining the Code of Conduct at a Canadian hackathon, there's a decent chance the person on the stage was me!</p>
							<p>I'm originally from the UK (but not from London - there's other cities, I promise), and I currently live in Toronto, Canada where I spend an embarrasingly large amount of time drinking Tim Hortons and running away from Canada geese.</p>
							<p>If you're looking for someone to speak at an event, help mentor new programmers or just want to chat, please feel free to <Link href="./contact">get in touch</Link>!</p>
							<p>Chat soon!</p>
						</div>
					</Col>
				</Row>

				<br />
				<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
					<h3>🎓 Education</h3>
				</div>
				<Row>
					<Col xs={0} xl={1} className={`${styles.eduEmojisLeft} ${styles.emojis}`}>
						<div>🏫</div>
						<div>🧠</div>
						<div>✨</div>
						<div>👩🏻‍🎓</div>
						<div>📚</div>
						<div>🎉</div>
						<div>🌟</div>
					</Col>
					<Col xs={12} xl={10}>
						<ExperienceBox
							type="education"
							color="var(--color-waterloobg)"
							name="Master of Digital Experience Innovation"
							institution="University of Waterloo"
							from="August 2023"
							to="Present"
							additional="92% Average / 3.95 GPA"
							image="./images/logos/education/waterloo.jpg"
							extracurriculars={[
								{
									name: "Judge & Workshop Host",
									institution: "Hackville",
									image: "./images/logos/extracurriculars/hackville.png"
								},
								{
									name: "Mentor",
									institution: "Hack Western",
									image: "./images/logos/extracurriculars/hackwestern.png"
								},
								{
									name: "Advisor",
									institution: "Eclipse Expos",
									image: "./images/logos/extracurriculars/eclipse.jpeg"
								},
								{
									name: "Speaker",
									institution: "TEDxColumbia Lake Youth",
									image: "./images/logos/extracurriculars/tedx.png"
								}
							]}
						/>
						<ExperienceBox
							type="education"
							color="var(--color-uoftbg)"
							name="Certificate in Learning Design"
							institution="University of Toronto"
							from="February 2022"
							to="May 2023"
							additional="94% Average"
							image="./images/logos/education/uoft.png"
						/>
						<ExperienceBox
							type="education"
							color="var(--color-leedsbg)"
							name="Bachelor of Arts, Digital Media (Honours)"
							institution="University of Leeds"
							from="September 2016"
							to="July 2021"
							additional="First Class Honours"
							image="./images/logos/education/leeds.png"
							extracurriculars={[
								{
									name: "Receipient",
									institution: "The Diana Award",
									image: "./images/logos/awards/dianaaward.jpeg"
								},
								{
									name: "MLH Top 50",
									institution: "Major League Hacking",
									image: "./images/logos/awards/top50.png"
								},
								{
									name: "Workshop Lead",
									institution: "Hack the North",
									image: "./images/logos/extracurriculars/hackthenorth.png"
								},
								{
									name: "Software Dev Intern",
									institution: "RBC Capital Markets",
									image: "./images/logos/experience/rbc.png"
								},
								{
									name: "14x Hackathon Winner",
									institution: "Major League Hacking",
									image: "./images/logos/experience/mlh.jpeg"
								},
								{
									name: "Receipient",
									institution: "LUU Contribution Award",
									image: "./images/logos/awards/luu.jpeg"
								},
								{
									name: "Exchange Student",
									institution: "Western University",
									image: "./images/logos/education/western.jpeg"
								},
								{
									name: "Head of Tech & Software",
									institution: "Leeds Student Radio",
									image: "./images/logos/experience/lsr.jpeg"
								},
								{
									name: "Videographer",
									institution: "Camp Lakota",
									image: "./images/logos/extracurriculars/camplakota.png"
								}
							]}
						/>
					</Col>
					<Col xs={0} xl={1} className={`${styles.eduEmojisRight} ${styles.emojis}`}>
						<div>🔥</div>
						<div>🚀</div>
						<div>🥳</div>
						<div>👩🏻‍🏫</div>
						<div>🤩</div>
						<div>🏆</div>
						<div>🌈</div>
					</Col>
				</Row>

				<br />
				<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
					<h3>💼 Experience</h3>
				</div>
				<Row>
					<Col xs={0} md={1}></Col>
					<Col xs={12} lg={10}>
						<ExperienceBox
							type="work"
							name="Developer Advocate - WooCommerce"
							institution="Automattic"
							from="October 2023"
							to="Present"
							image="./images/logos/experience/automattic.jpg"
							bullets={
								[
									"Developed and documented sample APIs, web-apps and bots for users to learn from",
									"Scripted and presented technical education videos focused on JavaScript and API fundamentals watched over 180,000 times by users"
								]
							}
						/>

						<ExperienceBox
							type="work"
							name="Developer Relations Lead"
							institution="Autocode"
							from="September 2021"
							to="September 2023"
							image="./images/logos/experience/autocode.svg"
							bullets={
								[
									"Developed and documented sample APIs, web-apps and bots for users to learn from",
									"Scripted and presented technical education videos focused on JavaScript and API fundamentals watched over 180,000 times by users"
								]
							}
						/>

						<ExperienceBox
							type="work"
							name="Hackathon Coach - NA & EU"
							institution="Major League Hacking"
							from="March 2019"
							to="September 2023"
							image="./images/logos/experience/mlh.jpeg"
							bullets={
								[
									"Mentored students and supported organizers at 40+ hackathons across Europe, North America and online",
									"Evangelized sponsored technical products such as Google Cloud, Twilio and Domain.com",
									"Wrote and hosted technical workshops and livestreams for international audiences of between 10 and 350+ participants",
									"Trained newer team members in developer advocacy and event management"
								]
							}
						/>

						<ExperienceBox
							type="work"
							name="Senior Developer"
							institution="Royal Bank of Canada"
							from="August 2020"
							to="August 2021"
							image="./images/logos/experience/rbc.png"
							bullets={
								[
									"Managed various OpenShift education and community initiatives within RBC, heavily contributing to the team winning a Silo Buster award and educating over 700 developers across the organization",
									"Coordinated platform resiliency initiatives while developing features for existing applications to ensure good customer experience"
								]
							}
						/>

						<ExperienceBox
							type="work"
							name="Founder &amp; Lead Organizer"
							institution="Hack Quarantine"
							from="March 2020"
							to="May 2020"
							image="./images/logos/experience/hackquarantine.jpeg"
							bullets={
								[
									"Managed a team of 20 volunteers to organize a 3,500 participant, three-week online hackathon focused on solving issues relating to COVID-19 in just ten days",
									"Achieved record breaking metrics, with 251 project submissions, 40,000 unique website visitors and 1.9 million minutes of video content being consumed during the event"
								]
							}
						/>
						<Col xs={0} md={1}></Col>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
