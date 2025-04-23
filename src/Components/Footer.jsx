import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 px-3">
      <div className="container-fluid">
        <div className="row g-4">
          {/* Know Helios */}
          <div className="col-12 col-md-3 footer">
            <h5 className="text-uppercase text-secondary mb-3">Know Helios</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none ">About Us</a></li>
              <li><a href="#" className="text-decoration-none ">About Titan Company Limited</a></li>
              <li><a href="#" className="text-decoration-none ">Bulk purchase & Corporate gifting</a></li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div className="col-12 col-md-3 footer">
            <h5 className="text-uppercase text-secondary mb-3">Terms & Conditions</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none ">Shipping & Return Policies</a></li>
              <li><a href="#" className="text-decoration-none ">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none ">T&C and FAQs</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-3 footer">
            <h5 className="text-uppercase text-secondary mb-3">Contact Us</h5>
            <p className="mb-1"><strong>For Sale:</strong></p>
            <p className="text-white-50 mb-2">
              <a href="mailto:heliossupport@titan.co.in" className="text-info">heliossupport@titan.co.in</a><br />
              <a href="tel:+919355401889" className="text-info">+91-9355401889</a>
            </p>
            <p className="mb-1"><strong>For Complaints:</strong></p>
            <p className="text-info mb-2">1800 266 0123</p>
            <p><strong>Chat Time:</strong><br />
              <span className="text-info">Monday to Saturday from 09:00 to 17:30</span>
            </p>
            <p className="mb-0"><strong>For Complaints:</strong><br />
              <a href="mailto:customercare@titan.co.in" className="text-info">customercare@titan.co.in</a>
            </p>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-3 footer">
            <h5 className="text-uppercase text-secondary mb-3">Follow Us</h5>
            <ul className="list-unstyled mb-3">
              <li><a href="#" className="text-decoration-none ">Blog</a></li>
            </ul>

            <div className="d-flex gap-3 footer">
              <a href="#" className="text-info"><FaTwitter /></a>
              <a href="#" className="text-info"><FaFacebookF /></a>
              <a href="#" className="text-info"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
