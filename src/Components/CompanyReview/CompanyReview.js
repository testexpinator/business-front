import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import ExportApi from "../../Api/ExportApi";
import Backprofile from "../Backprofile/Backprofile";
import Socialshare from "./Socialshare";
export default function CompanyReview() {
  let inputFields = {
    overall:"",
    service: "",
    responsiveness: "",
    expertise: "",
    results: "",
    communication: "",
    company: "",
    email: "",
  };

  const [rating, setRating] = useState({ ...inputFields });

  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  //   const GetListData = (
  //     service,
  //     responsiveness,
  //     expertise,
  //     results,
  //     communication,
  //     company,
  //     email
  //   ) => {
  //     ExportApi.Review()
  //       .then((resp) => {
  //         if (resp.data) {
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };
  // };

  const ratingChanged = (value, name) => {
    console.log("first", rating[name], value);
    rating[name] = value;
    setRating(rating);
    console.warn({ rating });
  };

  const handleSubmit = async () => {
    console.log("rating ", rating);
    let data = await fetch("http://localhost:3005/review/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rating),
    });
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Col lg="4">
          <div className="profile-sticky">
            <Backprofile />
            <Socialshare />
          </div>
        </Col>
        <Col lg="8">
          <div className="mt-5 border bg-light">
            <h5 className="bg-primary text-white p-2">
              Write a Review for 1762 DIFC
            </h5>
            <div className="p-3">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    <span className="text-danger">*</span> Enter a title for
                    your review
                  </Form.Label>
                  <Form.Control type="text" placeholder="" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    <span className="text-danger">*</span> Enter your review
                  </Form.Label>
                  <div className="custom-textarea position-relative">
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder=""
                      required
                    />
                    <span className="bg-light border-top d-block position-absolute character-count">
                      Characters : 0
                    </span>
                  </div>
                </Form.Group>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75 fs-4 fw-bold">
                      Rate Your Experience (5 is Best)
                    </p>
                    <div className="d-flex justify-content-between align-items-center custom-numbering w-25">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Overall Rating</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        name="average"
                        onChange={(e) => ratingChanged(e, "overall")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Service</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        name="service"
                        onChange={(e) => ratingChanged(e, "service")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Responsiveness</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        name="responsiveness"
                        onChange={(e) => ratingChanged(e, "responsiveness")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Expertise</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        name="expertise"
                        onChange={(e) => ratingChanged(e, "expertise")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Results</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        name="results"
                        onChange={(e) => ratingChanged(e, "results")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <p className="w-75">Communication</p>
                    <div className="w-25">
                      <ReactStars
                        count={5}
                        onChange={(e) => ratingChanged(e, "communication")}
                        size={30}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    <span className="text-danger">*</span> Enter Your Name or
                    Company
                  </Form.Label>
                  <Form.Control type="text" placeholder="" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    <span className="text-danger">*</span> Enter Email Address
                  </Form.Label>
                  <Form.Control type="email" placeholder="" required />
                </Form.Group>
                <div className="bg-white p-3 mb-5 border rounded">
                  <Form.Group className="" controlId="formBasicCheckbox1">
                    <Form.Check
                      type="checkbox"
                      label="* I understand that the name I choose to enter for this review will be stored, publicly available, and searchable on this website. I understand that I may request that the website remove this information at any time."
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicCheckbox2">
                    <Form.Check
                      type="checkbox"
                      label="* I understand that the email address I enter here will be stored on the website, but will not be publicly visible nor searchable, except for by the Administrators of the website. I understand that I may be contacted at this email address by the Administrator of the website."
                    />
                  </Form.Group>
                </div>
                <Button
                  variant="success"
                  type="submit"
                  className="b-block w-100 fw-normal py-2 fs-5"
                  onClick={() => handleSubmit()}
                >
                  Continue
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
