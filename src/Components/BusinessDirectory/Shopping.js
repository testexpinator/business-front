import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExportApi from "../../Api/ExportApi";
import Find from "../../CommonComponents/Find";
import Findt from "../../CommonComponents/Findt";
import Loadmore from "../../CommonComponents/Loadmore";
import Product from "../../CommonComponents/product";
import Titlebar from "../../CommonComponents/Titlebar";

const Shopping = () => {
  const [Data, setData] = useState([]);
  const [DataDp, setDataDp] = useState([]);
  const [LodeMoreCount, setLodeMoreCount] = useState(2);
  const [Force, setForce] = useState(2);

  const GetListData = () => {
    ExportApi.Listing()
      .then((resp) => {
        if (resp.data) {
          console.log(resp.data);
          setData(resp.data);
          setDataDp(resp.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const GetListDataLodeMore = () => {
    ExportApi.Page(LodeMoreCount)
      .then((resp) => {
        if (resp.data) {
          setLodeMoreCount(LodeMoreCount + 1);
          console.log(resp.data);
          setData([...Data, ...resp.data]);
          setDataDp([...Data, ...resp.data]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetListData();
  }, []);

  const DataFilter = (value) => {
    if (value == "A-Z") {
      //   alert();
      Data.sort((a, b) => (a.name > b.name ? 1 : -1));
      setData(Data);
      setForce(Force + 1);
    } else if (value == "Z-A") {
      Data.sort((b, a) => (a.name > b.name ? 1 : -1));
      setData(Data);
      setForce(Force + 1);
    } else {
      setData(DataDp);
      setForce(Force + 1);
    }
  };
  const DataFilterByName = (eData) => {
    setData(eData);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs={9} lg={9}>
            <Titlebar
              Data={Data.length}
              DataFilter={DataFilter}
              Title={"Shopping"}
            />
            {Data ? <Product Data={Data} /> : null}
            {Data.length > 0 ? (
              <Loadmore GetListDataLodeMore={GetListDataLodeMore} />
            ) : null}
          </Col>
          <Col xs={3} lg={3}>
            <Findt DataFilterByName={DataFilterByName} Data={Data} />
            <Find />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shopping;
