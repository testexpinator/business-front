import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, ButtonGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary mt-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center py-3 newsletter">
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant=""
                  className="text-white fs-6 fw-bold px-4 py-2"
                >
                  Join Our Newsletter
                </Button>
                <Button
                  variant=""
                  className="text-white fs-6 fw-bold px-4 py-2"
                >
                  Click to Subscribe
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="single_footer">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <a href="#">+971 526622242</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="single_footer single_footer_address">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="single_footer single_footer_address">
                <h4>Search</h4>
                <ul>
                  <li>
                    <a href="#">Categories</a>
                  </li>
                  <li>
                    <a href="#">Deals & Offers</a>
                  </li>
                  <li>
                    <a href="#">Blog </a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Popular Attractions & Events</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="single_footer single_footer_address">
                <h4>Website</h4>
                <ul>
                  <li>
                    <a href="#">Add Your Business</a>
                  </li>
                  <li>
                    <a href="#">Member Login</a>
                  </li>
                  <li>
                    <a href="#">Password Retrieval </a>
                  </li>
                  <li>
                    <a href="#">Advertise With Us</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-5">
              <p className="copyright">
                © 2022{" "}
                <a href="#" className="text-white text-decoration-none">
                  Healthizzle{" "}
                </a>
                All Rights Reserved Terms of Use Privacy Policy.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
