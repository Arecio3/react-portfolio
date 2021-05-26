import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

const Cards = ({ projects }) => {
  return (
    <div>
      <CardDeck>
        <Card
          style={{ width: "18rem", marginBottom: "5%" }}
          bg=''
          variant="white"
        >
          <Card.Img variant="top" src={projects.img} />
          <Card.Body>
            <Card.Title className='text-center' style={{ fontSize: 30 }}>{projects.title}</Card.Title>
            <Card.Text>{projects.description}</Card.Text>
            <Button variant="primary" href={projects.link}>
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
