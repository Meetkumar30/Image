import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image1, deleteImage1 }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1.urls.small} />
      <Card.Body>
        <Card.Title>{image1.title.toUpperCase}</Card.Title>
        <Card.Text>{image1.description || image1.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage1(image1.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
