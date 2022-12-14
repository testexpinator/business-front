import React from "react";
import { Button, Form } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Titlebar = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div className="w-50">
          <h6 className="mb-0">Showing 1 - {props.Data}</h6>
        </div>
        <div className="w-50 d-flex gap-10">
          <Form.Select
            onChange={(e) => props.DataFilter(e.target.value)}
            aria-label="Default select example"
          >
            <option value="">Sort Results</option>
            <option value="1">Sort by Most Reviews</option>
            <option value="A-Z">Sort by Name A-Z</option>
            <option value="Z-A">Sort by Name Z-A</option>
          </Form.Select>
          <Button className="bg-light border-0">
            <FaList className="fs-5 text-black" />
          </Button>
          <Button className="bg-light border-0">
            <BsFillGrid3X3GapFill className="fs-5 text-black" />
          </Button>
          <Button className="bg-light border-0">
            <MdLocationPin className="fs-5 text-black" />
          </Button>
        </div>
      </div>
      <h2 className="fw-bold">{props.Title}</h2>
      <hr />
    </div>
  );
};

export default Titlebar;
