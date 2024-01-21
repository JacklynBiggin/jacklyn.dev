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
					<Col xs={12} lg={4} className={styles.intro}>
						<img className={styles.profile} alt="Jacklyn" src="./jacklyn.jpeg" />
						<div className="content">
							<div className="header" style={{ backgroundColor: "var(--color-green)" }}>
								<h3>💡 TL;DR</h3>
							</div>
							<ul className={styles.tldr}>
								<li>Toronto, ON, Canada</li>
								<li>Developer Advocate for WooCommerce at Automattic</li>
								<li>Grad Student at the University of Waterloo</li>
							</ul>
						</div>
					</Col>
					<Col xs={0} lg={8}>
						<div className={`content almost-full-height`}>
							<p className={styles.handwritten}>Hey, I'm Jacklyn! 👋</p>
							<p>Currently, I'm working as a Developer Advocate for <a href="https://woo.com">WooCommerce</a> at <a href="https://automattic.com">Automattic</a> where I'm improving developer experience for the world's largest eCommerce platform.</p>
							<p>Previously, I led Developer Relations at a seed-stage startup called <a href="https://autocode.com">Autocode</a>, supported 50+ student hackathons with <a href="https://mlh.io">Major League Hacking</a>, and launched <a href="https://hackquarantine.com">Hack Quarantine</a> - a 3,500 attendee hackathon. In 2021, I was featured in the <a href="https://top.mlh.io/2021/profiles/jacklyn-biggin">MLH Top 50</a> and was awarded <a href="https://diana-award.org.uk/our-programmes-and-initiatives/award-and-development/roll-of-honour/roll-of-honour-2021">The Diana Award</a> - "the most prestigious accolade a young person aged 9-25 years can receive for their social action or humanitarian work".</p>
							<p>I'm based out of Toronto and Waterloo, Ontario, but am originally from the UK. I love to travel, and my favourite was to relax is to nearly miss very tight flight connections.</p>
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
							name="Developer Advocate - Woo"
							institution="Automattic"
							from="October 2023"
							to="Present"
							image="./images/logos/experience/automattic.jpg"
							bullets={
								[
									"Launched new developer documentation site for WooCommerce, massively improving developer experience",
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
									"Researched, scripted, and presented instructional videos for Autocode’s YouTube channel, resulting in over 500,000 views, 7,500 subscribers, 97% like-to-dislike ratio, and 17,500 hours of watch time",
									"Grew branded Discord server by 350% (9,000 to 32,000 members) while sustaining 20% week one retention rate by building ambassador program (scaling from 8 to 30 people) and running developer-focused events",
									"Built sample projects (installed 10,000+ times) to improve platform retention and new ecosystem uptake",
									"Wrote 10+ SEO-optimized technical guides targeted at beginner developers to improve platform reach"
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
									"Mentored students and coached organizers at 50+ hackathons across Europe, North America and online",
									"Hosted 60+ technical workshops and livestreams for global audiences of 10 to 350 participants",
									"Trained 15+ team members in event management and developer advocacy fundamentals",
									"Evangelized technical products such as Azure, Twilio and Auth0 to grow brand awareness among students"
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
									"Educated 700+ developers in container technologies across RBC, winning internal Silo Buster award",
									"Managed, developed, and presented interactive workshops and immersion days to interns and developers",
									"Mentored four interns in developing a product integration that won Technical Distinction out of 20 teams",
									"Maintained Python tools and scripted resiliency exercises; freeing up 20% of OpenShift cluster capacity"
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
