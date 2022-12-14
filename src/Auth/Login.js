import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ExportApi from "../Api/ExportApi";
import { Button, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [smShowLogin, setSmShowLogin] = useState(false);
  const [smShowForgot, setSmShowForgot] = useState(false);
  const [err, setErr] = useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be 6 characters long")
        .required("Enter your password"),
      email: Yup.string()
        .email("Please enter valid email address")
        .required("Enter your email"),
    }),
    onSubmit: (values) => {
      ExportApi.UserLogin(values.email, values.password)
        .then((resp) => {
          if (resp.data) {
            if (resp.data.code == 200) {
              localStorage.setItem("Token", resp.data.data[0].token);
              localStorage.setItem("username", resp.data.data[0].first_name);
              navigate("/webinar/dashboard");
            } else {
              setErr(true);
              setErr(resp.data.message);
            }
          }
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <Container>
        <Row>
          <form className="mx-auto w-50" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                placeholder="name@example.com"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </Form.Group>
            <h6
              onClick={() => {
                setSmShowForgot(true);
                setSmShowLogin(false);
              }}
            >
              Forgot Password ?
            </h6>
            <Button className="btn-filled" type="submit">
              Submit
            </Button>
          </form>
        </Row>
      </Container>
    </>
  );
};
export default Login;
