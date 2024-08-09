import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

const ServiceDetails = () => {
  const serviceData = {
    image: 'https://img.freepik.com/free-photo/house-bills-elements-arrangement_23-2148793800.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
    title: 'Home Loans',
    description:
      'Get competitive rates and flexible terms for both new home purchases and refinancing. Our experienced team will guide you through the process and ensure you get the best deal.',
    features: [
      'Competitive interest rates',
      'Flexible repayment terms',
      'Fast and efficient application process',
      'Customized loan solutions',
      'Dedicated customer support'
    ],
    cta: 'Apply Now'
  };

  return (
    <section className="service-details-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div
              className="service-image"
              style={{
                backgroundImage: `url(${serviceData.image})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#333' }}>
              {serviceData.title}
            </h1>
            <p className="lead mb-4" style={{ color: '#666' }}>
              {serviceData.description}
            </p>
            <ul className="list-unstyled">
              {serviceData.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-center mb-3">
                  <Check size={24} color="#0077b6" className="mr-3" />
                  <span style={{ color: '#333' }}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="lg"
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
              {serviceData.cta}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;