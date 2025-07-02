
import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const About = () => {
  
  const [show, setShow] = React.useState(false);
  return (
    <div className='py-4 px-5'>
    <Container className="py-5">
      <h1 className="text-center mb-4">About Our Plumbing Company</h1>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1609213244695-7d6902be89da"
            alt="Our Team"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>5 Years of Trusted Service</h2>
          <p>We’ve served residential and commercial clients with reliable, affordable, and innovative plumbing solutions for the past 5 years.</p>
          <ul>
            <li>🚰 Licensed & insured professionals</li>
            <li>24/7 Emergency response</li>
            <li>Certified in backflow prevention</li>
          </ul>
          <Button variant="primary" onClick={() => setShow(true)}>
            Learn More
          </Button>
        </Col>
      </Row>

      <Row>
        {[{
          icon: '⏱️', title: 'Fast Response', text: 'Rapid dispatch for emergencies.',
        },{
          icon: '💵', title: 'Transparent Pricing', text: 'No hidden fees, upfront quotes.',
        },{
          icon: '👷‍♂️', title: 'Expert Technicians', text: 'Experienced, friendly staff.',
        }].map((item, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="text-center h-100 shadow-sm">
              <Card.Body>
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <Card.Title className="mt-3">{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Our Mission</h5>
          <p>
            We are dedicated to delivering reliable plumbing services, ensuring transparency and excellence in every job.
          </p>

          <h5>Meet Our Team</h5>
          <p>
            A dedicated crew of certified plumbers and specialists, passionate about quality and customer satisfaction.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default About;
