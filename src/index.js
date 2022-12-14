import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
import Findt from "./CommonComponents/Findt";
import Find from "./CommonComponents/Find";
import Titlebar from "./CommonComponents/Titlebar";
import Product from "./CommonComponents/product";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  BrowserRouter,
  Routes,
  Route,
  MemoryRouter as Router,
} from "react-router-dom";
import Login from "./Auth/Login";
import Accommodation from "./Components/BusinessDirectory/Accommodation";
import DealsOffers from "./Components/BusinessDirectory/DealsOffers";
import FoodDining from "./Components/BusinessDirectory/FoodDining";
import Shopping from "./Components/BusinessDirectory/Shopping";
import ProfessionalServices from "./Components/BusinessDirectory/ProfessionalServices";
import CompanyReview from "./Components/CompanyReview/CompanyReview";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Accommodation" element={<Accommodation />} />
        <Route path="/DealsOffers" element={<DealsOffers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/FoodDining" element={<FoodDining />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/CompanyReview" element={<CompanyReview />} />
        <Route
          path="/ProfessionalServices"
          element={<ProfessionalServices />}
        />
        {/* <Route path="/schedule" element={<Schedule />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
