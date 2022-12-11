import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
const MovieCard = ({ elem, handleDelete }) => {
  return (
    <div>
      <Card style={{ width: "20rem", margin: 30 }}>
        <Card.Img variant="top" src={elem.urlPoster} style={{ height: 500 }} />
        <Card.Body>
          <Card.Title
            style={{
              backgroundColor: "rgba(80, 31, 160, 0.315)",
              textAlign: "center",
              color: "rgb(255, 255, 255)",
              textShadow: "2px 2px 4px blue",
            }}
          >
            {elem.title}
          </Card.Title>
          <Card.Text>{elem.description}</Card.Text>
          <Rating initialValue={elem.rating} size={30} />

          <Button
            variant="primary"
            style={{
              backgroundColor: "rgb(151, 31, 32)",
              borderColor: "rgb(72, 21, 40)",
              color: "rgb(255, 249, 250)",
              textShadow: "2px 2px 4px rgb(96, 11, 13)",
              marginLeft: 40,
            }}
            onClick={() => handleDelete(elem)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
