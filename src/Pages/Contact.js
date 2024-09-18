import React, { useState } from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be handled by Netlify
  };

  return (
    <div className='contactContainer'>
    <div className="schemaContainer">
      <div className="left-column">
        <h1>Get in <span>Touch</span></h1>
        <p>If you have any questions, feel free to reach out. We do our best to reply within 48 hours.</p>
        <div className="contact-info">
          <p>Email: support@reputeai.dev</p>
        </div>
        <div className="social-section">
          <h3>Follow us on social media</h3>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://x.com/ReputeAi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/repute.ai/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.tiktok.com/@reputeai?lang=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
      <div className="right-column">
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value={formState.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            value={formState.email}
            onChange={handleChange}
          />
          <textarea 
            name="message" 
            placeholder="Leave us a message" 
            rows="5" 
            required
            value={formState.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contact;