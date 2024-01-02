import {useState} from "react";

import { Container,Col,Row } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''

  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const [buttonText, setButtonText] = useState('Send');

  const [status, setStatus] = useState({});

  // When form is updated, set the forms details state with the details that is completed with the arguments
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]:value
  })
  }
  
  // When users submit, the information will be sent to a mail server
  const handleSubmit = async (e) => {
    // Prevent page from reloading
    e.preventDefault();

    // Show users that the form is being sent and showing them the message that it is sending
    setButtonText('Sending...');

    // Server is running on local host 5000
    let response = await fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: {
      "Content-Type": "Application/json;charset=utf-8"
    },
    // The form details into a req. json
    body: JSON.stringify(formDetails),
  });

  setButtonText("Send");
  let result = response.json();

  // Reset the form fields
  setFormDetails(formInitialDetails);

  if (result.code === 200 ) {
    setStatus({success: true, message: 'Message sent successfully'});
  } else {
    setStatus({success: false, message: 'An error has occurred, please try again later.'})
  }

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact Us"/>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  {/* First name input */}
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                </Col>
                <Col sm={6} className="px-1">
                  {/* Last name input */}
                  <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                </Col>
                <Col sm={6} className="px-1">
                  {/* Email input */}
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                </Col>
                <Col sm={6} className="px-1">
                  {/* Phone number input */}
                  <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('Phone', e.target.value)}></input>
                </Col>
                <Col>
                {/* Text input area */}
                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => {
                  onFormUpdate('message', e.target.value)
                }}></textarea>
                <button type="submit"><span>
                  {buttonText}
                </span>
                </button>
                </Col>
                {
                  status.message && 
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}