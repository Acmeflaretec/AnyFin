import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HomeFeatures() {
  const features = [
    {
      image: 'secure.png',
      title: 'Secure Solutions',
      description:
        'Your financial data and assets are safeguarded with our industry-leading security measures.'
    },
    {
      image: 'personal.png',
      title: 'Personalized Approach',
      description:
        'Our team of experts works closely with you to develop tailored financial strategies that meet your unique needs.'
    },
    {
      image: 'payments.png',
      title: 'Transparent Pricing',
      description:
        'We believe in upfront and transparent pricing, ensuring you always know what you are paying for.'
    },
    {
      image: 'support.png',
      title: 'Continuous Support',
      description:
        'Our ongoing support and regular reviews help you adapt your financial plan as your life changes.'
    }
  ];

  return (
    <section className="home-features py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            Why Choose ANYFIN?
          </h2>
          <p className="lead" style={{ color: '#666' }}>
            Discover the unique advantages that set ANYFIN apart in the financial services industry.
          </p>
        </div>
        <Row className="g-4">
          {features.map((feature, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="h-100 border-0 shadow-sm">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold mb-3" style={{ color: '#333' }}>
                    {feature.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#666' }}>
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomeFeatures;