import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Titlebar from "./CommonComponents/Titlebar";
import Product from "./CommonComponents/product";
import Findt from "./CommonComponents/Findt";
import Find from "./CommonComponents/Find";
import Loadmore from "./CommonComponents/Loadmore";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={9} lg={9}>
            <Titlebar />
            <Product />
            <Loadmore />
          </Col>
          <Col xs={3} lg={3}>
            <Findt />
            <Find />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
