import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="outline-success">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
