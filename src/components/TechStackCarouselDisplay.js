import React from 'react';

import { Carousel } from 'react-bootstrap';

import react_icon_logo from '../assets/tech-stacks-icons/react-1-logo.svg';

import mui_icon_stack from '../assets/tech-stacks-icons/MUI-icon.png';

import react_bootstrap_icon from '../assets/tech-stacks-icons/bootstrap-icon.png';

import mongo_db_icon from '../assets/tech-stacks-icons/mongoDB-icon.png';

import node_js_icon from '../assets/tech-stacks-icons/nodejs-icon.png';

import javascript_icon from '../assets/tech-stacks-icons/javaScript-icon.png';

import css_icon from '../assets/tech-stacks-icons/Css-icon.webp';

import express_js_icon from '../assets/tech-stacks-icons/express-js.png';

import react_mailchimp_icon_logo from '../assets/tech-stacks-icons/mailchimp-logo.png';

import google_cloud_Icon from '../assets/tech-stacks-icons/google-cloud-icon.png';

const TechStackCarouselDisplay = () => {
  const techStacks = [
    [mongo_db_icon, express_js_icon, react_icon_logo, node_js_icon],
    [javascript_icon, css_icon, react_bootstrap_icon],
    [react_mailchimp_icon_logo, mui_icon_stack, google_cloud_Icon],
  ];

  return (
    <div style={{ minHeight: '50px' }}>
      <Carousel
        interval={6000}
        pause={false}
        indicators={false}
        prevIcon={null}
        nextIcon={null}
      >
        {techStacks.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {group.map((icon, iconIndex) => (
                <img
                  key={iconIndex}
                  className="d-block"
                  src={icon}
                  alt={`Tech Stack ${iconIndex + 1}`}
                  style={{ maxWidth: '18%' }}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TechStackCarouselDisplay;
