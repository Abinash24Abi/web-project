import React, { useState } from 'react';
import transition from './transition';
import axios from 'axios';
import './Contact.css';
import contactimg1 from '../assest/contact/offer.png'; 
import contactimg2 from '../assest/contact/offer2.jpg'; 

import offer from '../assest/contact/c.webp'


import Footer from '../Components/Footer'

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phno: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phno, message } = contactInfo;
    if (!name || !email || !phno || !message) {
      alert("Please fill in all the details");
      return;
    }

    axios.post('http://localhost:8989/send', contactInfo)
      .then(() => {
        alert("Message sent!");
        setContactInfo({ name: '', email: '', phno: '', message: '' });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-bg-img" />
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-wrapper">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-label">Name</label>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your full name"
              required
            />

            <label className="contact-label">Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="your@email.com"
              required
            />

            <label className="contact-label">Phone</label>
            <input
              type="tel"
              name="phno"
              value={contactInfo.phno}
              onChange={handleChange}
              className="contact-input"
              placeholder="1234567890"
              required
            />

            <label className="contact-label">Message</label>
            <textarea
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
              className="contact-textarea"
              placeholder="Your message..."
              required
            />

            <button type="submit" className="contact-btn">Send</button>
          </form>
        </div>

        <div className="contact-img-section">
          <img src={contactimg1} alt="Watch 1" className="contact-img" />
          <img src={contactimg2} alt="Watch 2" className="contact-img" />
          <img src={contactimg1} alt="Watch 3" className="contact-img" />
        </div>
      </div>
      
      <img src={offer}  style={{width:'100%', height:'350px'}} />

    </div>
    <Footer />
    </>
  );
};

export default transition(Contact);
