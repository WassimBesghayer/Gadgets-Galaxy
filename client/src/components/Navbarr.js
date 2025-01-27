import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/Home"><Link to="/"><img id='logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F9%2FElectronics-Gadget-PNG-Photos.png&f=1&nofb=1&ipt=a13bd86c7c67299da12e977ed81e21d5055579dd21d67381016b59213e2b3831&ipo=images'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Best Sellers</Nav.Link>
            <Nav.Link href="#action2">Discounts</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Smart Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Smart Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Embedded Systems</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Remote Controllers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Electronic Componenets</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"><Link to="/Orders">Orders</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr