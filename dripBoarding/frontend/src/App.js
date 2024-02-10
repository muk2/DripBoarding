import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel, Row, Col, Card} from 'react-bootstrap';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter, Link } from 'react-router-dom';
import Snowboard from './SnowPage';
import Accessories from './Access';
import logo from './logo.svg'; // Your logo here
import clothingImage1 from './clothing.jpeg'; // Replace with actual image paths
import clothingImage2 from './clothing2.jpg';

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setIsDrawerOpen(open);
    };
  return (
    
    <div>
      {/* Navigation Bar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clothing Store
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This empty Toolbar is used to offset the content below the AppBar */}

      {/* Drawer Component */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Men" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Women" />
          </ListItem>
          {/* Add more items if needed */}
        </List>
      </Drawer>
  
  

      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clothingImage1}
            alt="Latest Collection"
          />
          <Carousel.Caption>
            <h3>Winter Collection 2024</h3>
            <p>Explore the latest trends in winter fashion.</p>
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
