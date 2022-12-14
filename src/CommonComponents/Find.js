import React from "react";
import { Button, Form } from "react-bootstrap";

const Find = () => {
  return (
    <div>
      <div className="border p-3 bg-light rounded mt-5">
        <Form>
          <h3>Find</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What do you need:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select an option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Specializing in:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select an option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="" className="d-block w-100">
            Search Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Find;
