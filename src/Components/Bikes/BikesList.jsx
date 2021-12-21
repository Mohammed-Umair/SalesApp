import React, { useState, useEffect } from "react";
import { BikeItems } from "./BikeItems";
import { bikes } from "../../services/bikes";
import { Row, Col, Button } from "react-bootstrap";
import { width } from "dom-helpers";

export const BikesList = () => {
  const [filBike, setfilBike] = useState(bikes);
  const [txtSearch, setTxtSearch] = useState("");
  const handlesearch = () => {
    const filteredBikes = bikes.filter((item) =>
      item.name.toUpperCase().includes(txtSearch.toUpperCase())
    );
    txtSearch !== "" ? setfilBike(filteredBikes) : setfilBike(bikes);
  };
  useEffect(() => {
    handlesearch();
  }, [txtSearch]);

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
        {filBike.map((items) => (
          <Col>
            <BikeItems items={items} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
