import { Alert, Col, Row } from 'react-bootstrap';

import { useState, useEffect } from 'react';

export const Newsletter = ({ onlyValidated, status, message }) => {
  const [email, setEmail] = useState('');

  // If users have an unsuccessful submission, keep their email on the fields and don't clear it, and the unsuccessful message displayed as well (the status will be changed)
  useEffect(() => {
    // If there is a successful submission, then clear the fields
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the email has been entered and contains the "@" symbol
    email &&
      email.indexOf('@') > -1 &&
      // Validate the forms (email) that was passed
      onlyValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter!</h3>
            {/* Status for sending */}
            {status === 'sending' && <Alert>Sending...</Alert>}

            {/* Status for error */}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}

            {/* Status for Success */}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          {/* Their Email form */}
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
