import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const About = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="py-4 px-5">
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
            <p>
              We’ve served residential and commercial clients with reliable,
              affordable, and innovative plumbing solutions for the past 5
              years.
            </p>
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
          {[
            {
              icon: "⏱️",
              title: "Fast Response",
              text: "Rapid dispatch for emergencies.",
            },
            {
              icon: "💵",
              title: "Transparent Pricing",
              text: "No hidden fees, upfront quotes.",
            },
            {
              icon: "👷‍♂️",
              title: "Expert Technicians",
              text: "Experienced, friendly staff.",
            },
          ].map((item, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="text-center h-100 shadow-sm">
                <Card.Body>
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
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
              We are dedicated to delivering reliable plumbing services,
              ensuring transparency and excellence in every job.
            </p>

            <h5>Meet Our Team</h5>
            <p>
              A dedicated crew of certified plumbers and specialists, passionate
              about quality and customer satisfaction.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <div className="">
        <h1 className="text-center px-4 py-5">Our Mission</h1>
        <p className="lh-lg fs-6 text-start text-end fw-medium text-center p-3 text-lowercase">
          “Our mission is to deliver prompt, high‑quality plumbing solutions
          that homeowners and businesses can rely on—every time. We uphold
          integrity, respect, and professionalism in every call, ensuring
          transparent communication and fair pricing. By continuously investing
          in our team’s training and embracing modern technology, we guarantee
          efficient and lasting repairs. Above all, we aim to build trusted
          relationships with our community by treating every service as if it
          were our own home.
        </p>
        <h2 className="text-center px-5 py-4">Our Vision</h2>
        <p className="lh-lg fs-6 text-start text-end fw-medium text-center p-3 text-lowercase">
          We envision becoming the trusted pillar of our community, known for
          delivering impeccable plumbing solutions with unwavering integrity and
          respect. By combining cutting‑edge technology and continuous training,
          we aim to set a higher standard of service excellence that exceeds
          customer expectations pierpointplumbing.com +15 robinsplumbing.com +15
          ut.company +15 . Our goal isn’t just to fix pipes—it’s to build
          lasting relationships rooted in reliability, professionalism, and
          genuine care . In doing so, we aspire to leave every home and business
          better off than we found them, fostering trust and making a meaningful
          difference in people’s lives and their communities. Let me know if
          you'd like to tweak the tone or style!
        </p>
      </div>
        {/* Company History */}
        <div className="py-4">
          <h1 className="text-center fw-normal text-warning-emphasis">
            Our History
          </h1>
          <p className="text-center fw-light bg-danger-emphasis p-3">
            Our plumbing company has proudly served the community for over a
            decade, building a reputation for reliability and quality
            workmanship. Founded by certified professionals, we began with a
            mission to provide fast, honest, and affordable plumbing solutions.
            We've grown through word-of-mouth, offering residential and
            commercial services with dedication, skill, and customer
            satisfaction.
          </p>
        </div>
     
     
      {/* Floating Social Media Buttons */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/254758849440"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            style={{ width: "50px", height: "50px" }}
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "50px", height: "50px" }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
  </div>
    </div>
  );
};

export default About;
