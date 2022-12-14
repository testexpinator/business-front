import React from "react";
import { Button } from "react-bootstrap";

const Loadmore = ({ GetListDataLodeMore }) => {
  return (
    <div>
      <Button
        onClick={() => GetListDataLodeMore()}
        variant="primary"
        type="button"
        className="d-block w-100 text-capatlize fs-5 fw-bold mt-5"
      >
        Click to load more Result
      </Button>
    </div>
  );
};

export default Loadmore;
