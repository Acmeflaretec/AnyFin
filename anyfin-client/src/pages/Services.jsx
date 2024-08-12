import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServiceSection = styled.section`
  background-color: #f8f9fa;
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const ServiceCard = styled(Card)`
  height: 100%;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: #34495e;
  font-size: 1rem;
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  background-color: #0033CC;
  border-color: #0033CC;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }
`;

function Services() {
  const services = [
    {
      image: 'https://img.freepik.com/free-photo/house-bills-elements-arrangement_23-2148793800.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Home Loans',
      description: 'Get competitive rates and flexible terms for both new home purchases and refinancing.',
      cta: 'Learn More'
    },
    {
      image: 'https://img.freepik.com/free-vector/volunteers-help-work_24908-58097.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Bank Accounts',
      description: 'Choose from our range of bank accounts to manage your money securely and conveniently.',
      cta: 'Open Account'
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-hands-holding-paper-people_23-2149191366.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Insurance',
      description: 'Secure your future with our comprehensive insurance plans for health, life, and assets.',
      cta: 'Get Insured'
    },
    {
      image: 'https://img.freepik.com/free-photo/human-hand-inserting-coin-piggybank_23-2147919267.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
      title: 'Savings & Investments',
      description: 'Grow your wealth with our investment products and savings accounts.',
      cta: 'Invest Now'
    }
  ];

  return (
    <ServiceSection>
      <Container>
        <div className="text-center mb-5">
          <SectionTitle>Our Financial Services</SectionTitle>
          <SectionSubtitle>
            ANYFIN offers a comprehensive range of financial solutions to help you achieve your goals.
          </SectionSubtitle>
        </div>
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col md={6} lg={3} key={idx}>
              <ServiceCard>
                <CardImage style={{ backgroundImage: `url(${service.image})` }} />
                <CardBody>
                  <CardTitle>{service.title}</CardTitle>
                  <CardText style={{fontFamily:' "Sen", sans-serif'}}>{service.description}</CardText>
                  <Link to={'/servicedetails'} className='text-decoration-none'>
                    <StyledButton>Know More</StyledButton>
                  </Link>
                </CardBody>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ServiceSection>
  );
}

export default Services;