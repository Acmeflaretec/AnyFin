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
  background-image: url(aboutus.png);
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem; /* Increased margin for spacing */
`;

const FeatureIcon = styled.div`
  color: #3498db;
  font-size: 2.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center; /* Ensures icon is centered vertically */
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0; /* Remove any default margin */
`;

const FeatureText = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.5rem; /* Added margin for spacing between title and text */
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
            <FeatureContainer>
              <FeatureIcon>
                <FaHandshake />
              </FeatureIcon>
              <FeatureTitle>Trusted Partnerships</FeatureTitle>
            </FeatureContainer>
            <FeatureText style={{ fontFamily: '"Sen", sans-serif' }}>
              At ANYFIN, we take pride in our extensive network of trusted financial partners. We've carefully curated relationships with leading banks, investment firms, and insurance providers to ensure our clients have access to the best products and services in the industry.
            </FeatureText>
            <FeatureContainer>
              <FeatureIcon>
                <FaUserCircle />
              </FeatureIcon>
              <FeatureTitle>Expert Advisors</FeatureTitle>
            </FeatureContainer>
            <FeatureText style={{ fontFamily: '"Sen", sans-serif' }}>
              Our team of seasoned financial professionals is dedicated to helping you navigate the complex world of finance. With years of experience and a deep understanding of the market, our advisors are committed to providing personalized guidance and tailored solutions to help you achieve your financial goals.
            </FeatureText>
            <FeatureContainer>
              <FeatureIcon>
                <FaMoneyBillAlt />
              </FeatureIcon>
              <FeatureTitle>Competitive Pricing</FeatureTitle>
            </FeatureContainer>
            <FeatureText style={{ fontFamily: '"Sen", sans-serif' }}>
              At ANYFIN, we believe in transparent and fair pricing. We're committed to offering competitive rates and fees across all our products and services, ensuring you get the best value for your money. Our goal is to help you maximize your financial potential without breaking the bank.
            </FeatureText>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
