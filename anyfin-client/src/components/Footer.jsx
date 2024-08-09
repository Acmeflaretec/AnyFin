import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-5" style={{ backgroundColor: '#333', color: '#f5f5f5' }}>
      <Container>
        <Row className="mb-5">
          <Col md={4} lg={3} className="mb-4 mb-lg-0">
            <div className="footer-logo">
              <h4 className="fw-bold mb-2">ANYFIN</h4>
              <p className="mb-0">Providing financial solutions for over 20 years.</p>
            </div>
          </Col>
          <Col md={4} lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Financial Planning</a></li>
              <li><a href="#" className="text-white text-decoration-none">Investment Management</a></li>
              <li><a href="#" className="text-white text-decoration-none">Retirement Planning</a></li>
            </ul>
          </Col>
          <Col md={4} lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={12} lg={3}>
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt size={20} className="me-3" /> {/* Increased margin */}
                <span>123 Main Street, Anytown USA</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaPhoneAlt size={20} className="me-3" /> {/* Increased margin */}
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FaEnvelope size={20} className="me-3" /> {/* Increased margin */}
                <span>info@anyfin.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom text-center mt-4 pt-4 border-top border-light">
          <p className="mb-2">&copy; {new Date().getFullYear()} ANYFIN. All rights reserved.</p>
          <p className="mb-0">
            Designed by <a href="https://acmeflare.in" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Acmeflare</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
