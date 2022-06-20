import React, { Component } from 'react'
import{Navbar ,Nav, FormControl , Container , Form , Button} from "react-bootstrap";
import logo from "./logo123.png";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class header extends Component {
  render() {
    return (
     <>
      <Navbar  fixed="top"collapsen0nSelect expand = "md" bg="dark" variant = "dark">
        <Container>
            <Navbar.Brand href ="/">
                <img
                src={logo}
                height="50"
                width ="50"
                className="d-inline-block align-top"
                alt="Logo"
                />React
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id = "responsive-navbar-nav">
            <Nav className = "mr-auto">
                <Nav.Link href = "/"> Home </Nav.Link>
                <Nav.Link href = "/about"> About us </Nav.Link>
                <Nav.Link href = "/contacts"> Contacts </Nav.Link>
                <Nav.Link href = "/blog"> Blog </Nav.Link>
            </Nav>
            <Form inline >
                <FormControl
                type ="text"
                placeholder = "Search"
                className = "mr-sm-2"
                />
                <Button variant = "outline-info">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar> 

      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" coponent={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/blog" component={Blog}/>
        </Switch>
      </Router>
     </>
    );
  }
}
