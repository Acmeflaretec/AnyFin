import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandshake, FaUserCircle, FaMoneyBillAlt } from 'react-icons/fa';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f8f9fa;
  padding: 5rem 0;
`;

const SectionTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const AboutImage = styled.div`
  background-image: url(about.png);
  height: 500px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FeatureIcon = styled.div`
  color: #3498db;
  font-size: 2.5rem;
  margin-right: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
`;

const FeatureText = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <div className="text-center mb-5">
          <SectionTitle>About ANYFIN</SectionTitle>
          <SectionSubtitle>
            Discover our commitment to financial excellence and customer-centric service.
          </SectionSubtitle>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <AboutImage />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <div className="d-flex align-items-center mb-4">
              <FeatureIcon><FaHandshake /></FeatureIcon>
              <FeatureTitle>Trusted Partnerships</FeatureTitle>
            </div>
            <FeatureText>
              At ANYFIN, we take pride in our extensive network of trusted financial partners. We've carefully curated relationships with leading banks, investment firms, and insurance providers to ensure our clients have access to the best products and services in the industry.
            </FeatureText>
            <div className="d-flex align-items-center mb-4 mt-5">
              <FeatureIcon><FaUserCircle /></FeatureIcon>
              <FeatureTitle>Expert Advisors</FeatureTitle>
            </div>
            <FeatureText>
              Our team of seasoned financial professionals is dedicated to helping you navigate the complex world of finance. With years of experience and a deep understanding of the market, our advisors are committed to providing personalized guidance and tailored solutions to help you achieve your financial goals.
            </FeatureText>
            <div className="d-flex align-items-center mb-4 mt-5">
              <FeatureIcon><FaMoneyBillAlt /></FeatureIcon>
              <FeatureTitle>Competitive Pricing</FeatureTitle>
            </div>
            <FeatureText>
              At ANYFIN, we believe in transparent and fair pricing. We're committed to offering competitive rates and fees across all our products and services, ensuring you get the best value for your money. Our goal is to help you maximize your financial potential without breaking the bank.
            </FeatureText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;