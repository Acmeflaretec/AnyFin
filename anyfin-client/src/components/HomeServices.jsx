import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function HomeServices() {
  return (
    <section className="home-services py-5" style={{ backgroundColor: '#F2F2F2' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: '#333' }}>Our Comprehensive Services</h2>
          <p className="lead mb-4" style={{ color: '#666' }}>
            ANYFIN offers a wide range of financial solutions to help you achieve your goals.
          </p>
        </div>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-piggy-bank fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Financial Planning</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666' }}>
                  Our team of experts will work with you to develop a comprehensive financial plan tailored to your unique needs and goals.
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" href="#" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                    Show More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-bar-chart-line fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Investment Management</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666' }}>
                  Our experienced investment professionals will help you build and manage a diversified portfolio to achieve your financial goals.
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" href="#" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                    Show More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-calendar-check fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Retirement Planning</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666' }}>
                  Let us help you create a personalized retirement plan to ensure a secure and comfortable future.
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" href="#" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                    Show More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeServices;
