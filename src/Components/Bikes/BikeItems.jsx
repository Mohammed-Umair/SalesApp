import { Button, Card } from "react-bootstrap";
import "./BikeItems.css";
export const BikeItems = ({ items }) => {
  return (
    <Card style={{ width: "18rem" }} className="bike">
      <Card.Img variant="top" src={items.url} height={"200px"} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>{items.model}</Card.Text>
        <Button variant="primary">{items.price}</Button>
      </Card.Body>
    </Card>
  );
};
