import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Findt = ({ Data, DataFilterByName }) => {
  const [Result, setResult] = useState([]);
  const filterData = (e) => {
    let Target = Data.filter((val, i) => val.name == e || val.body == e);
    setResult(Target);
  };
  return (
    <div>
      <div className="border p-3 bg-light rounded mt-5">
        <Form>
          <h3>Find</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>What do you need:</Form.Label>
            <Form.Control
              onChange={(e) => filterData(e.target.value)}
              type="text"
              placeholder="Find Business by Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Search by location:</Form.Label>
            <Form.Control
              onChange={(e) => filterData(e.target.value)}
              type="text"
              placeholder="City or Post Code"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={() => DataFilterByName(Result)}
            className="d-block w-100"
          >
            Search Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Findt;
