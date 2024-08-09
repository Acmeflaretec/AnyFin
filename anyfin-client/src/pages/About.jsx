import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandshake, FaUserCircle, FaMoneyBillAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#333' }}>
            About ANYFIN
          </h1>
          <p className="lead" style={{ color: '#666' }}>
            Discover our commitment to financial excellence and customer-centric service.
          </p>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <div
              className="about-image"
              style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid)',
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <div className="d-flex align-items-center mb-4">
              <FaHandshake size={48} color="#0077b6" className="me-3" />
              <h3 className="fw-bold" style={{ color: '#333' }}>
                Trusted Partnerships
              </h3>
            </div>
            <p className="mb-4" style={{ color: '#666' }}>
              At ANYFIN, we take pride in our extensive network of trusted financial partners. We've carefully curated relationships with leading banks, investment firms, and insurance providers to ensure our clients have access to the best products and services in the industry.
            </p>
            <div className="d-flex align-items-center mb-4">
              <FaUserCircle size={48} color="#0077b6" className="me-3" />
              <h3 className="fw-bold" style={{ color: '#333' }}>
                Expert Advisors
              </h3>
            </div>
            <p className="mb-4" style={{ color: '#666' }}>
              Our team of seasoned financial professionals is dedicated to helping you navigate the complex world of finance. With years of experience and a deep understanding of the market, our advisors are committed to providing personalized guidance and tailored solutions to help you achieve your financial goals.
            </p>
            <div className="d-flex align-items-center mb-4">
              <FaMoneyBillAlt size={48} color="#0077b6" className="me-3" />
              <h3 className="fw-bold" style={{ color: '#333' }}>
                Competitive Pricing
              </h3>
            </div>
            <p className="mb-0" style={{ color: '#666' }}>
              At ANYFIN, we believe in transparent and fair pricing. We're committed to offering competitive rates and fees across all our products and services, ensuring you get the best value for your money. Our goal is to help you maximize your financial potential without breaking the bank.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;