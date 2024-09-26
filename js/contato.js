import { useState } from 'react';
import './Contato.css';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";




export const Contato = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_ftovyxv", "template_lvd8ctx", templateParams, "SnGSZatKM5LptrG-x")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("ERRO: ", err)
      })
  }

  return (
    <section className="contact" id="connect">
      <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
            }
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Entre em contato</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"
                        placeholder="Primeiro Nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        className="textarea"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                      <input className="buttonForm" type="submit" value="Enviar" />
                    </Col>
                  </Row>
                </form>
              </div>}
          </TrackVisibility>
        </Col>
      </Row>
      </Container>
  </section >
  )}


