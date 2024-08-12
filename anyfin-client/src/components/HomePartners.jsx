import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePartners = () => {
  const partners = [
    { image: 'partner1.png', title: 'Partner 1' },
    // { image: 'partner2.png', title: 'Partner 2' },
    // { image: 'partner3.png', title: 'Partner 3' },
    // { image: 'partner4.png', title: 'Partner 4' },
    // { image: 'partner5.png', title: 'Partner 5' },
    // { image: 'partner6.png', title: 'Partner 6' },
  ];

  return (
    <section className="home-partners-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            Our Financial Partners
          </h2>
          <p className="lead" style={{ color: '#666' }}>
            We proudly collaborate with leading financial institutions to provide our clients with the best services.
          </p>
        </div>
        {partners.length === 1 ? (
          <div
            className="partner-image-container"
            style={{
              height: '500px',
              position: 'relative',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className="partner-image"
              style={{
                backgroundImage: `url(partners.jpeg)`,
                height: '100%',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '8px',
              }}
            />
            <div
              className="partner-info"
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '4px',
              }}
            >
              {/* <h3 className="fw-bold mb-0" style={{ color: '#333' }}>
                {partners[0].title}
              </h3> */}
            </div>
          </div>
        ) : (
          <Row className="g-4 justify-content-center">
            {partners.map((partner, index) => (
              <Col md={4} lg={2} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <div
                      className="partner-logo"
                      style={{
                        width: '100%',
                        height: 'auto',
                        backgroundImage: `url(${partner.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    {/* <Card.Title className="fw-bold mt-3" style={{ color: '#333' }}>
                      {partner.title}
                    </Card.Title> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default HomePartners;
