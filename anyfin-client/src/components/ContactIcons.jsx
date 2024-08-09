import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Whatsapp, Telephone } from 'react-bootstrap-icons';

const ContactIcons = () => {
  return (
    <div className="contact-icons-wrapper" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999' }}>
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
              <Whatsapp size={32} />
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
              <Telephone size={32} />
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
