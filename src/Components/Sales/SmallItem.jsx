import { Card,Button,Row} from "react-bootstrap";
import "./SmallItems.css"
export const SmallItem = ({title,desc,price,url}) => {
  return (
    <div className="zaki">
      <Card  style={{ width: "18rem"  }}>
        <Card.Img variant="top" src={url} height="400px" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
          <Button variant="primary"> {price}  </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
