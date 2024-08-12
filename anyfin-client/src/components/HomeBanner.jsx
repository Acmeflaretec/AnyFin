import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <section className="home-banner py-5" style={{ backgroundColor: '#F2F2F2' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-5 fw-bold mb-4" style={{ color: '#333' }}>
              Transform Your Financial Future
            </h1>
            <p className="lead mb-5" style={{ color: '#666' }}>
              At ANYFIN, we provide personalized financial solutions to help you achieve your goals and secure your long-term success.
            </p>
            <Link to="/services">
              <Button
                variant="primary"
                size="lg"
                className="px-4 py-2 fw-medium"
                style={{
                  backgroundColor: '#0033CC',
                  borderColor: '#0033CC',
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Our Services
              </Button>
            </Link>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <div className="banner-image-wrapper">
              <img src="https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?size=626&ext=jpg&ga=GA1.1.1794837574.1691059421&semt=ais_hybrid" alt="Home Banner" className="img-fluid" />
              <div className="banner-overlay" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeBanner;
