import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from 'react-bootstrap/CardDeck'

const Cards = ({ projects }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} bg={'light'}>
        <Card.Img variant="top" src={projects.img} />
        <Card.Body>
          <Card.Title>{projects.title}</Card.Title>
          <Card.Text>
           {projects.description}
          </Card.Text>
          <Button variant="primary" href={projects.link}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
