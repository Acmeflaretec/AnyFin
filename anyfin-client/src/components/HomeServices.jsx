import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomeServices() {
  return (
    <section className="home-services py-5" style={{ backgroundColor: '#F2F2F2' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: '#333' }}>Our Comprehensive Services</h2>
          <p className="lead mb-4" style={{ color: '#666' ,fontFamily:' "Sen", sans-serif'}}>
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
                <Card.Text className="text-center mb-4" style={{ color: '#666' ,fontFamily:' "Sen", sans-serif' }}>
                  Our team of experts will work with you to develop a comprehensive financial plan tailored to your unique needs and goals.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
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
                <Card.Text className="text-center mb-4" style={{ color: '#666' ,fontFamily:' "Sen", sans-serif'}}>
                  Our experienced investment professionals will help you build and manage a diversified portfolio to achieve your financial goals.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
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
                <Card.Text className="text-center mb-4" style={{ color: '#666' ,fontFamily:' "Sen", sans-serif'}}>
                  Let us help you create a personalized retirement plan to ensure a secure and comfortable future.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-briefcase fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Tax Advisory</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666' ,fontFamily:' "Sen", sans-serif' }}>
                  Get expert advice on tax planning and compliance to maximize your savings and ensure peace of mind.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-shield-lock fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Insurance Solutions</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666'  ,fontFamily:' "Sen", sans-serif'}}>
                  Protect your assets and loved ones with our comprehensive insurance plans tailored to your needs.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
              <Card.Body className="d-flex flex-column p-4">
                <div className="text-center mb-3">
                  <i className="bi bi-graph-up fs-3 text-primary" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3 text-center" style={{ color: '#333' }}>Business Consulting</Card.Title>
                <Card.Text className="text-center mb-4" style={{ color: '#666'  ,fontFamily:' "Sen", sans-serif'}}>
                  Our consulting services provide strategic guidance to help your business thrive in today's competitive market.
                </Card.Text>
                <div className="mt-auto">
                  <Link to="/servicedetails">
                    <Button variant="primary" className="w-100" style={{ backgroundColor: '#0033CC', border: 'none', padding: '12px' }}>
                      Know More
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Link to="/services">
            <Button variant="secondary" style={{ backgroundColor: '#0033CC', padding: '12px 24px', fontSize: '1.2rem' }}>
              Show More
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default HomeServices;
