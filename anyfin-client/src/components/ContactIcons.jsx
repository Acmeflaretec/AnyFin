import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactIcons = () => {
  return (
    <div className="contact-icons-wrapper" style={{ position: 'fixed', bottom: '20px', right: '0px', zIndex: '999' }}>
      <Container>
        <Row className="flex-column align-items-end">
          <Col className="mb-3">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none whatsapp-link"
              style={{
                color: '#25D366',
                transition: 'all 0.3s ease',
              }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '52px', height: '52px' }} />
            </a>
          </Col>
          <Col>
            <a
              href="tel:+123456789"
              className="d-flex align-items-center text-decoration-none call-link"
              style={{
                color: '#0077b6',
                transition: 'all 0.3s ease',
              }}
            >
              <img src="phone.png" alt="Telephone" style={{ width: '52px', height: '52px' }} />
            </a>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .whatsapp-link:hover {
          color: #1ea055;
        }

        .call-link:hover {
          color: #005b8a;
        }
      `}</style>
    </div>
  );
};

export default ContactIcons;
