import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomeAbout() {
  return (
    <section className="home-about py-5">
      <Container>
        <Row className="align-items-center">
        <Col md={6} className="d-none d-md-block">
            <div className="about-image-wrapper">
              <div className="about-image-overlay"></div>
              <img src="https://img.freepik.com/free-photo/accountant-calculating-profit-with-financial-analysis-graphs_74855-4937.jpg?size=626&ext=jpg&ga=GA1.1.1794837574.1691059421&semt=ais_hybrid" alt="About ANYFIN" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-content">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#0033CC' }}>
                Redefining Financial <br /> Solutions for Your Future
              </h2>
              <p className="lead mb-5" style={{ color: '#666' }}>
                At ANYFIN, we believe in empowering our clients with personalized financial strategies that unlock new possibilities. Our team of experts combines industry-leading insights with a tailored approach to help you achieve your long-term goals.
              </p>
              <Button
                variant="primary"
                size="lg"
                href="#"
                className="px-4 py-2 fw-medium"
                style={{
                  backgroundColor: '#0033CC',
                  color: '#fff',
                  borderColor: '#0033CC',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#002E99',
                    borderColor: '#002E99'
                  }
                }}
              >
                Explore Our Services
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeAbout;