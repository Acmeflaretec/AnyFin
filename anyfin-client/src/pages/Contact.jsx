import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <section className="contact-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#333' }}>
            Get in Touch
          </h1>
          <p className="lead" style={{ color: '#666' }}>
            Have a question or need assistance? Our team is here to help.
          </p>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="contact-info mb-4">
              <div className="d-flex align-items-center mb-3">
                <GeoAlt size={32} color="#0077b6" className="me-3" />
                <h4 className="fw-bold" style={{ color: '#333' }}>
                  Visit Us
                </h4>
              </div>
              <p style={{ color: '#666' }}>
                123 Main Street, Anytown USA 12345
              </p>
            </div>
            <div className="contact-info mb-4">
              <div className="d-flex align-items-center mb-3">
                <Telephone size={32} color="#0077b6" className="me-3" />
                <h4 className="fw-bold" style={{ color: '#333' }}>
                  Call Us
                </h4>
              </div>
              <p style={{ color: '#666' }}>
                +1 (123) 456-7890
              </p>
            </div>
            <div className="contact-info mb-4">
              <div className="d-flex align-items-center mb-3">
                <Envelope size={32} color="#0077b6" className="me-3" />
                <h4 className="fw-bold" style={{ color: '#333' }}>
                  Email Us
                </h4>
              </div>
              <p style={{ color: '#666' }}>
                info@anyfin.com
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  style={{
                    backgroundColor: '#f9f9f9',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#333'
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{
                    backgroundColor: '#f9f9f9',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#333'
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows={5}
                  style={{
                    backgroundColor: '#f9f9f9',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#333'
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="fw-medium"
                style={{
                  backgroundColor: '#0077b6',
                  borderColor: '#0077b6',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#005b8a',
                    borderColor: '#005b8a'
                  }
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;