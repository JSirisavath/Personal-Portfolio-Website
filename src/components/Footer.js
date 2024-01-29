import { Container, Row, Col } from 'react-bootstrap';

import { MailchimpForm } from './MailchimpForm';

import logo from '../assets/img/logo.png';

// Social icons
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* Mailchimp form wrapper */}
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="form-logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon2} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a> */}
            </div>

            <p>
              Copyright 2024 JSirisavath, All rights reserved by Jerry
              Sirisavath
            </p>
            <p>
              <a
                target="_blank"
                href="https://icons8.com/icon/98964/youtube-logo"
              >
                YouTube Logo
              </a>{' '}
              icon by{' '}
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </p>
            <p>
              <a target="_blank" href="https://icons8.com/icon/9622/microphone">
                Microphone
              </a>{' '}
              icon by{' '}
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://icons8.com/icon/tjuIMOXXe1mT/youtube-live"
              >
                Live
              </a>{' '}
              icon by{' '}
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
