import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel, Row, Col, Card} from 'react-bootstrap';

import logo from './logo.svg'; // Your logo here
import clothingImage1 from './clothing.jpeg'; // Replace with actual image paths
import clothingImage2 from './clothing2.jpg';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Clothing Store Logo"
            />
            Clothing Store Name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#kids">Kids</Nav.Link>
              <Nav.Link href="#sale">Sale</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothingImage1}
            alt="Latest Collection"
          />
          <Carousel.Caption>
            <h3>Summer Collection 2024</h3>
            <p>Explore the latest trends in summer fashion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothingImage2}
            alt="Exclusive Deals"
          />
          <Carousel.Caption>
            <h3>Exclusive Weekend Deals</h3>
            <p>Don't miss out on our special weekend offers!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>

      {/* Main Content */}
      <Container>
        <Row className="mt-4">
          {/* Example Product Card */}
          <Col sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for other products */}
        </Row>
      </Container>

    </div>
  );
}

export default App;
