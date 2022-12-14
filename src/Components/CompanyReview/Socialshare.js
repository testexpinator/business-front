import React from "react";
import { Button } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaShareAlt,
  FaShareSquare,
} from "react-icons/fa";

export default function Socialshare() {
  return (
    <div className="mt-3 border bg-light p-3 rounded text-center">
      <h5 className="text-center text-grey p-2 fs-5 mb-3">
        <FaShareSquare className="me-2" />
        Share This Page
      </h5>

      <div className="d-flex align-items-center justify-content-center social-media-btn">
        <Button
          className="border-0 rounded-0 px-4 py-1"
          style={{ background: "#4267B2" }}
        >
          <FaFacebookF />
        </Button>
        <Button
          className="border-0 rounded-0 px-4 py-1 mx-2"
          style={{ background: "#55acee" }}
        >
          <FaTwitter />
        </Button>
        <Button
          className="border-0 rounded-0 px-4 py-1"
          style={{ background: "#95D03A" }}
        >
          <FaShareAlt />
        </Button>
      </div>
    </div>
  );
}
