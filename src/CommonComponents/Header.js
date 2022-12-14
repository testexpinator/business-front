import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../assets/circle.png";
import { Button, Form, InputGroup, Navbar, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div>
      <Container>
        <Row className="py-3 align-items-center">
          <Col xs={3} lg={3}>
            <img className="img-fluid header-logo" src={Logo} />
          </Col>
          <Col xs={9} lg={9}>
            <div className="d-flex justify-content-end align-items-center gap-10 ">
              <div className="">
                {/* <Form.Select aria-label="Default select example">
                  <option>Select Language</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select> */}
              </div>
              {/* <div className="">
                <p className="mb-0 text-muted">+971 526622242</p>
              </div> */}
              <div className="">
                <Link to="/login" className="text-muted text-decoration-none">
                  Member Login
                </Link>
              </div>
              <div className="">
                <Button className="bg-danger rounded text-white fs-6 fw-bold border-0">
                  Bussinessness- Add your company
                  <RiArrowDropRightLine className="fs-3" />
                </Button>
              </div>
            </div>
          </Col>
          <Col className="text-web-end" xs={12} lg={12}>
            <div className="d-flex w-25 justify-content-end">
              <InputGroup size="sm" className="">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control
                  aria-label=""
                  aria-describedby="inputGroup-sizing-sm"
                  type="search"
                />
              </InputGroup>
              <Button className="bg-primary text-white border-0 ms-2 rounded">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" variant="light" className="py-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                to="/DealsOffers"
              >
                Deals & Offers
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                to="/Accommodation"
              >
                Accommodation
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                to="/FoodDining"
              >
                Food & Dining
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                to="/Shopping"
              >
                Shopping
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                to="/ProfessionalServices"
              >
                Professional Services
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                href=""
              >
                All Categories
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                href=""
              >
                Jobs
              </Link>
              <Link
                className="border-end px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                href=""
              >
                Things To do
              </Link>
              <Link
                className=" px-4 text-center fs-6 text-dark py-3 text-decoration-none"
                href=""
              >
                Events
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
