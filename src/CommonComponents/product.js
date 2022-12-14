import React from "react";
import { Button } from "react-bootstrap";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import Cosmo from "../assets/cosmo.jpg";

const Product = ({ Data }) => {
  return (
    <div>
      {Data?.map((val, i) => {
        return (
          <div key={i} className="d-flex justify-content-between mt-5 gap-10">
            <div className="w-25">
              <img className="rounded img-fluid product-img" src={Cosmo} />
            </div>
            <div className="w-50">
              <div className="d-flex justify-content-between align-items-center">
                <a href="" className="text-decoration-none fs-4 fw-bold">
                  {val.description}
                </a>
                <Button className="bg-light p-0 border-0">
                  <BsFillSuitHeartFill className="fs-5 text-secondary" />
                </Button>
              </div>
              <p className="text-muted">{val.body}</p>
              <Button className="border-0">
                <IoCallSharp className="fs-5 text-white me-2" />
                See Phone Number
              </Button>
            </div>
            <div className="w-25">
              <div className="bg-light rounded border p-3">
                <Button
                  variant="success"
                  className="border-0 d-block w-100 mb-3"
                >
                  View Listing
                </Button>
                <Button className="border-0 d-block w-100">Send Message</Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
