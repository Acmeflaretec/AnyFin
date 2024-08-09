import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HomeFeatures() {
  const features = [
    {
      image: 'https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631022.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Secure Solutions',
      description:
        'Your financial data and assets are safeguarded with our industry-leading security measures.'
    },
    {
      image: 'https://img.freepik.com/free-photo/thoughtful-man-with-infographic-with-heads_1134-460.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Personalized Approach',
      description:
        'Our team of experts works closely with you to develop tailored financial strategies that meet your unique needs.'
    },
    {
      image: 'https://img.freepik.com/free-vector/landing-page-website_23-2147772976.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Transparent Pricing',
      description:
        'We believe in upfront and transparent pricing, ensuring you always know what you are paying for.'
    },
    {
      image: 'https://img.freepik.com/free-vector/technical-support-concept-idea-customer-service-consultant-support-clients-help-them-with-problems-providing-customer-with-valuable-information-vector-illustration-cartoon-style_613284-2779.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Continuous Support',
      description:
        'Our ongoing support and regular reviews help you adapt your financial plan as your life changes.'
    }
  ];

  return (
    <section className="home-features py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#333' }}>
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