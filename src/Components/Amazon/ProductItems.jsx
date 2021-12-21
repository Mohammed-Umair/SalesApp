import "./ProductItem.css";
import { Card, Button, Row, Col } from "react-bootstrap";
export const ProductItems = ({ title, price, desc, cat, rating, url }) => {
  return (
    <Row className="item">
      <Col lg={3}>
        <img src={url} height="200px" width="180px" alt="" />
      </Col>
      <Col lg={9}>
        <Card className="text-center">
          <Card.Header>{cat}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{rating}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Button variant="primary">{price}</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
