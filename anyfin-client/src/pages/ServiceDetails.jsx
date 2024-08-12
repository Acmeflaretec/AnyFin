import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Check, Whatsapp } from 'react-bootstrap-icons';

const ServiceDetails = () => {
  const serviceData = {
    image: 'https://img.freepik.com/free-photo/house-bills-elements-arrangement_23-2148793800.jpg?ga=GA1.1.1794837574.1691059421&semt=ais_hybrid',
    title: 'Home Loans',
    description:
      'Get competitive rates and flexible terms for both new home purchases and refinancing. Our experienced team will guide you through the process and ensure you get the best deal.',
    features: [
      'Competitive interest rates',
      'Flexible repayment terms',
      'Fast and efficient application process',
      'Customized loan solutions',
      'Dedicated customer support'
    ],
    cta: 'Enquire Now'
  };

  const handleWhatsAppRedirect = () => {
    // Replace this with your actual WhatsApp link
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src={serviceData.image} alt={serviceData.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2 className='display-5'>{serviceData.title}</h2>
          <p>{serviceData.description}</p>
          <ul className="list-unstyled">
            {serviceData.features.map((feature, index) => (
              <li key={index} className="mb-2">
                <Check className="text-success me-2" /> {feature}
              </li>
            ))}
          </ul>
          <Button variant="primary" style={{backgroundColor:'#0033CC'}} onClick={handleWhatsAppRedirect}>
            <Whatsapp className="me-2" /> {serviceData.cta}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;