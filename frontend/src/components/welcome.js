import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
const Welcome = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={8}
          lg={6}
          style={{ marginLeft: 'auto', marginRight: 'auto', width: 'auto' }}
        >
          <Card
            style={{ marginLeft: 'auto', marginRight: 'auto', width: 'auto' }}
          >
            <Card.Body>
              <Card.Title>Welcome </Card.Title>
              <Card.Text>
                This is very first project in .js that retrieves photos using
                Unsplash API. To start any search any term in the input field.
              </Card.Text>
              <Button
                variant="primary"
                href="https://unsplash.com"
                target="_black"
              >
                Learn more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Welcome;
