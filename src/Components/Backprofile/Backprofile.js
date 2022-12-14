import React from "react";
import { Button } from "react-bootstrap";
import Cosmo from "../../assets/cosmo.jpg";

export default function Backprofile() {
  return (
    <div className="mt-5 border bg-light p-3 rounded text-center">
      <img className="rounded mb-3 img-fluid" src={Cosmo} />
      <Button className="d-block w-100">Back to profile</Button>
    </div>
  );
}
