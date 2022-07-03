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
						<img className={styles.profile} src="./jacklyn.jpeg" />
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
						<div className={`content full-height`}>
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
					<Col xs={12} md={6}>
						<ExperienceBox
							type="education"
							color="var(--color-uoftbg)"
							name="Certificate in Learning Design"
							institution="University of Toronto"
							from="February 2022"
							to="Present"
							additional="Current Average: 99%"
							image="./images/logos/education/uoft.png"
						/>
					</Col>
					<Col xs={12} md={6}>
						<ExperienceBox
							type="education"
							color="var(--color-leedsbg)"
							name="BA (Hons) Digital Media (International)"
							institution="University of Leeds"
							from="September 2016"
							to="July 2022"
							additional="Achieved First Class Honours"
							image="./images/logos/education/leeds.png"
						/>
					</Col>
					<Col xs={12} md={6}>
						<ExperienceBox
							type="education"
							color="var(--color-westernbg)"
							name="Exchange/Study Abroad Year"
							institution="Western University"
							from="September 2018"
							to="May 2019"
							additional="Studied Computer Science and Media"
							image="./images/logos/education/western.jpeg"
						/>
					</Col>
					<br />
				</Row>

				<br />
				<Row>
					<Col xs={12} md={8}>
						<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
							<h3>💼 Experience</h3>
						</div>

						<ExperienceBox
							type="work"
							name="Developer Relations Lead"
							institution="Autocode"
							from="September 2021"
							to="Present"
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
							name="Hackathon Coach"
							institution="Major League Hacking"
							from="March 2019"
							to="Present"
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

						<ExperienceBox
							type="work"
							name="Head of Tech &amp; Software"
							institution="Leeds Student Radio"
							from="June 2017"
							to="May 2020"
							image="./images/logos/experience/lsr.jpeg"
							bullets={
								[
									"Overhauled station broadcasting infrastructure, improving UX, and increasing productivity and online output while reducing future costs",
									"Coordinated outside broadcasts, supported presenters with technical issues and ensured uptime in a fast-paced environment",
									"Responsible for the station achieving bronze for Best Technical Achievement at the Student Radio Awards"
								]
							}
						/>

						<ExperienceBox
							type="work"
							name="Software Developer Intern (RBC Amplify)"
							institution="RBC Capital Markets"
							from="June 2019"
							to="August 2019"
							image="./images/logos/experience/rbc.png"
							bullets={
								[
									"Worked in a team of four to implement design thinking methodologies within Capital Markets while collaborating with executive stakeholders to deliver their vision"
								]
							}
						/>

					</Col>
					<Col xs={12} md={4}>
						<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
							<h3>🏆 Awards</h3>
						</div>
						<ExperienceBox
							type="award"
							color="var(--color-dianaawardbg)"
							name="The Diana Award"
							from="June 2021"
							image="./images/logos/awards/dianaaward.jpeg"
						/>
						<ExperienceBox
							type="award"
							color="var(--color-mlhtop50bg)"
							name="MLH Top 50"
							institution="Major League Hacking"
							from="June 2021"
							image="./images/logos/awards/top50.png"
						/>
						<ExperienceBox
							type="award"
							color="var(--color-luubg)"
							name="Outstanding Contribution"
							institution="Leeds University Union"
							from="May 2019"
							image="./images/logos/awards/luu.jpeg"
						/>
						<ExperienceBox
							type="award"
							color="var(--color-ilsrabg)"
							name="Hero of the Moment"
							institution="I Love Student Radio Awards"
							from="May 2018"
							image="./images/logos/awards/ilsra.png"
						/>
						<ExperienceBox
							type="award"
							color="var(--color-white)"
							name="14x Hackathon Category Wins"
							from="September 2018"
							to="May 2019"
							image="./images/logos/experience/mlh.jpeg"
						/>
					</Col>
				</Row>

			</Container>
		</div>
	)
}
