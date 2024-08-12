import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeContact = () => {
  return (
    <section className="home-contact-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            Get in Touch
          </h2>
          <p className="lead" style={{ color: '#666',fontFamily:' "Sen", sans-serif' }}>
            Have a question or need assistance? Our expert team is here to help.
          </p>
     <Link to={'/contact'}>
            <Button
                  variant="primary"
                  size="lg"
                  className="fw-medium"
                  style={{
                    backgroundColor: '#0033CC',
                    borderColor: '#0033CC',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Us
                </Button>
     </Link >
        </div>
      
      </Container>
    </section>
  );
};

export default HomeContact;
