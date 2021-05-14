import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import {Container, Row, Col, Form} from 'react-bootstrap'
import Button from "../components/Button";
import { faLinkedin, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "ctkCihKG";

export default function Contact() {

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const onSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...")
    await submit({ name, email, message });
    setButtonText("Sent")
  };


  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.header} style={{backgroundColor: "var(--color-blue)"}}>
            <h2>📨 Contact Me</h2>
        </div>
        <Row>
            <Col xs={12} lg={7} xl={8}>
                <div className={styles.content}>
                  <div className={styles.header} style={{backgroundColor: "var(--color-blue)"}}>
                    <h3>📫 Send me an Email!</h3>
                  </div>

                  { buttonText !== "Sent" ?
                    <Form onSubmit={onSubmit} className={styles.contactform}>
                    <p>Hey! 👋 Wanna say hi? Feel free to send me a message on my socials, or if you'd like to send email, here's a form! If you're feeling old fashioned and would like to email me manually, my email is hi@jacklyn.dev!</p>
                    <Form.Group>
                        <Form.Label>What's your name?</Form.Label>
                        <Form.Control required type="text" placeholder="Ingvar Kamprad" value={name} onChange={(e) => setName(e.target.value)} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Hey {name.length == 0 ? "there" : name}! What's your email address?</Form.Label>
                        <Form.Control required type="email" placeholder="blahaj@ikea.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>What's your message?</Form.Label>
                        <Form.Control required as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                      </Form.Group>

                      <input disabled={buttonText == "Sending..."} type="submit" className={styles.submitbutton} value={buttonText}/>
                    </Form>
                    :
                    <p>Your email has been sent! 🎉 I'll reply as soon as I can - keep an eye on your inbox! ✨</p>
                  }
                </div>
            </Col>
            <Col xs={12} lg={5} xl={4}>
              <div className="d-none d-lg-block">
                <div className={styles.header} style={{backgroundColor: "var(--color-blue)"}}>
                  <h3>🌟 Socials</h3>
                </div>
                <Button color="--color-blue" text="Twitter" icon={faTwitter} link="https://twitter.com/JackBiggin"/>
                <Button color="--color-blue" text="LinkedIn" icon={faLinkedin} link="https://linkedin.com/in/JackBiggin"/>
                <Button color="--color-blue" text="YouTube" icon={faYoutube} link="https://youtube.com/JackBiggin"/>
                <Button color="--color-blue" text="Twitch" icon={faTwitch} link="https://twitch.tv/JacklynBiggin"/>
              </div>
            </Col>
        </Row>

      </Container>
    </div>
  )
}
