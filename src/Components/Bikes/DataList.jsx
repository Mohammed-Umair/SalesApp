import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataItems } from "./DataItems";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { width } from "dom-helpers";

export const DataList = () => {
  const selePord = useSelector((state) => state.ProductsReducer.Products); // this is redux 1 step
  // console.log("===>", selePord);

  const dispatch = useDispatch(); //// this is redux 2 step
  const [data, setData] = useState([]);
  const [filData, setfilData] = useState(data);
  const [txtSearch, setTxtSearch] = useState("");
  const handlesearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toUpperCase().includes(txtSearch.toUpperCase())
    );
    txtSearch !== "" ? setfilData(filteredData) : setfilData(data);
  };

  const CallData = async () => {
    if (selePord) {
      setData(selePord);
    } else {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
      dispatch({
        ////  redux 3 step
        // we dispatch  an object       this is imporve the berter performance  it take 2(tupe,payload/data)
        type: "ADD_PRODUCTS",
        data: result.data,
      });
    }
  };

  useEffect(() => {
    CallData();
  }, []);
  useEffect(() => {
    handlesearch();
  }, [txtSearch, data]);

  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            onChange={(e) => setTxtSearch(e.target.value)}
            placeholder="Search..."
            type="text"
            style={{ width: "700px" }}
          />
        </Col>
        <Col lg={2}>
          <Button onClick={() => handlesearch()}>Search</Button>
        </Col>
      </Row>
      <Row>
        {filData.map((items) => (
          <Col>
            <DataItems items={items} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
