import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandshake, FaUserCircle, FaMoneyBillAlt } from "react-icons/fa";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #f8f9fa;
  padding: 6rem 0; /* Increased padding for more vertical space */
`;

const SectionTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.8rem; /* Slightly increased font size for better visibility */
  font-weight: 700;
  margin-bottom: 2rem; /* Increased margin for more separation */
`;

const SectionSubtitle = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3.5rem; /* Balanced margin for subtitle */
  font-family: "Sen", sans-serif;
`;

const AboutImage = styled.div`
  background-image: url(aboutus.png);
  height: 500px;
  background-size: cover; /* Ensures image covers the container */
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
  align-items: flex-start; /* Align icons with the start of text */
  margin-bottom: 3.5rem; /* Consistent spacing between features */
`;

const FeatureIcon = styled.div`
  color: #3498db;
  font-size: 2.5rem;
  margin-right: 1.5rem; /* Increased space between icon and text */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureContent = styled.div`
  max-width: 500px; /* Limits the width of text for better readability */
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const FeatureText = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.8; /* Improved line-height for readability */
  margin-top: 0.5rem;
  font-family: "Sen", sans-serif;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <div className="text-center mb-5">
          <SectionTitle>About ANYFIN</SectionTitle>
          <SectionSubtitle>
            Discover our commitment to financial excellence and customer-centric
            service.
          </SectionSubtitle>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <AboutImage />
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <FeatureContainer>
              <FeatureIcon aria-label="Handshake Icon">
                <FaHandshake />
              </FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Trusted Partnerships</FeatureTitle>
                <FeatureText>
                  At ANYFIN, we take pride in our extensive network of trusted
                  financial partners. We've carefully curated relationships with
                  leading banks, investment firms, and insurance providers to
                  ensure our clients have access to the best products and
                  services in the industry.
                </FeatureText>
              </FeatureContent>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureIcon aria-label="User Icon">
                <FaUserCircle />
              </FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Expert Advisors</FeatureTitle>
                <FeatureText>
                  Our team of seasoned financial professionals is dedicated to
                  helping you navigate the complex world of finance. With years
                  of experience and a deep understanding of the market, our
                  advisors are committed to providing personalized guidance and
                  tailored solutions to help you achieve your financial goals.
                </FeatureText>
              </FeatureContent>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureIcon aria-label="Money Icon">
                <FaMoneyBillAlt />
              </FeatureIcon>
              <FeatureContent>
                <FeatureTitle>Competitive Pricing</FeatureTitle>
                <FeatureText>
                  At ANYFIN, we believe in transparent and fair pricing. We're
                  committed to offering competitive rates and fees across all
                  our products and services, ensuring you get the best value for
                  your money. Our goal is to help you maximize your financial
                  potential without breaking the bank.
                </FeatureText>
              </FeatureContent>
            </FeatureContainer>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
