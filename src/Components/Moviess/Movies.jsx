import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { data } from "./moviesList";
const Movies = () => {
  const [flim, setFlim] = useState(data);
  const [txtSearch, setTxtSearch] = useState("");
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const handleSearch = () => {
    const FilteredMovie = data.filter((item) =>
      item.Name.toLowerCase().includes(txtSearch.toLowerCase())
    );
    txtSearch !== "" ? setFlim(FilteredMovie) : setFlim(data);
  };
  return (
    <div>
      <div>
        <Row>
          <Col lg={8}>
            <input
              onChange={(e) => setTxtSearch(e.target.value)}
              type="search"
              name=""
              id=""
              placeholder={"Search..."}
              style={{ width: "700px" }}
            />
          </Col>
          <Col lg={4}>
            <Button onClick={() => handleSearch()}>Search</Button>
          </Col>
        </Row>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {flim.map((item) => (
          <div>
            <Card
              style={{
                width: "300px",
                margin: "15px",
                padding: "10px",
                border: "solid black 5px",
                borderRadius: "15px",
              }}
            >
              <Card.Img variant="top" src={item.img} height="300px" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Name: <b>{item.Name}</b>{" "}
                </Card.Title>
                <Card.Text> {item.cat}</Card.Text>
                <Card.Text> {item.Cast}</Card.Text>
                <Card.Text> {item.Year}</Card.Text>
                <ReactStars
                  value={item.rating}
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                ,<Button variant="primary">Buy:{item.buy}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
