import { Button, Card } from "react-bootstrap";
import "./DataItems.css";
export const DataItems = ({ items }) => {
  return (
    <Card style={{ width: "18rem" }} className="data">
      <Card.Img variant="top" src={items.image} height={"200px"} />
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>{items.category}</Card.Text>
        <Button variant="primary">{items.price}</Button>
      </Card.Body>
    </Card>
  );
};
