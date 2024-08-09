import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      image: 'https://img.freepik.com/free-photo/house-bills-elements-arrangement_23-2148793800.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Home Loans',
      description:
        'Get competitive rates and flexible terms for both new home purchases and refinancing.',
      cta: 'Learn More'
    },
    {
      image: 'https://img.freepik.com/free-vector/volunteers-help-work_24908-58097.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Bank Accounts',
      description:
        'Choose from our range of bank accounts to manage your money securely and conveniently.',
      cta: 'Open Account'
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-hands-holding-paper-people_23-2149191366.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Insurance',
      description:
        'Secure your future with our comprehensive insurance plans for health, life, and assets.',
      cta: 'Get Insured'
    },
    {
      image: 'https://img.freepik.com/free-photo/human-hand-inserting-coin-piggybank_23-2147919267.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Savings & Investments',
      description:
        'Grow your wealth with our investment products and savings accounts.',
      cta: 'Invest Now'
    }
  ];

  return (
    <section className="services-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#333' }}>
            Our Financial Services
          </h2>
          <p className="lead" style={{ color: '#666' }}>
            ANYFIN offers a comprehensive range of financial solutions to help you achieve your goals.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="h-100 border-0 shadow-sm">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold mb-3" style={{ color: '#333' }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#666' }}>
                    {service.description}
                  </Card.Text>
                 <Link to={'/servicedetails'}>
                      <Button
                        variant="primary"
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
                        {service.cta}
                      </Button>
                 </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;