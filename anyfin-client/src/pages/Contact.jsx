import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false); // State to manage loading status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw96DmwzVemi0xIjx9NpzEUASDqt4AeWjl9lJsmxZahKU_EqfVVNGftTDuMuELqDKZG/exec';
    

    const reqBody  = new FormData()
    reqBody.append('Name', formData.name)
    reqBody.append('Email', formData.email)
    reqBody.append('Message', formData.message)
    reqBody.append('Date',new Date().toDateString())
    fetch(scriptUrl, {
      method: 'POST',
      body: reqBody,
      mode: 'no-cors'
    })
    .then(response => {
      console.log('Response:', response);
      setLoading(false);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
      alert('Error submitting form. Please try again.');
    });
  };

  return (
    <section className="contact-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#2c3e50' }}>
            Get in Touch
          </h1>
          <p className="lead mb-5" style={{ color: '#34495e', maxWidth: '600px', margin: '0 auto', fontFamily: '"Sen", sans-serif' }}>
            Have a question or need assistance? Our team is here to help you with any inquiries.
          </p>
        </div>
        <Row className="g-5">
          <Col lg={5}>
            <div className="contact-info mb-5">
              <div className="d-flex align-items-center mb-4">
                <GeoAlt size={30} color="#3498db" className="me-4" />
                <p style={{ color: '#34495e', margin: 0, fontSize: '1.1rem', fontFamily: '"Sen", sans-serif' }}>
                  123 Main Street, Anytown USA 12345
                </p>
              </div>
            </div>
            <div className="contact-info mb-5">
              <div className="d-flex align-items-center mb-4">
                <Telephone size={30} color="#3498db" className="me-4" />
                <p style={{ color: '#34495e', margin: 0, fontSize: '1.1rem', fontFamily: '"Sen", sans-serif' }}>
                  +91 99610 11302
                </p>
              </div>
            </div>
            <div className="contact-info mb-5">
              <div className="d-flex align-items-center mb-4">
                <Envelope size={30} color="#3498db" className="me-4" />
                <p style={{ color: '#34495e', margin: 0, fontSize: '1.1rem', fontFamily: '"Sen", sans-serif' }}>
                  info@anyfin.com
                </p>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#34495e'
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#34495e'
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#34495e'
                  }}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="fw-medium py-3 px-5"
                style={{
                  backgroundColor: '#0033CC',
                  borderColor: '#0033CC',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                }}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <Spinner animation="border" size="sm" /> // Display loading spinner
                ) : (
                  'Send Message' // Default button text
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
