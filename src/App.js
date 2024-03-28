import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinux } from "react-icons/fa";
import { Routes,  Route,  Link, } from 'react-router-dom';
//import Home from './Home';
import About from './page/About';


function JumbotronExample() {
  return (
    <Container className="py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
          <span className="fs-4">아이고 내 손주</span>
        </a>
      </header>

      <Container className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="py-5">
          <h1 className="display-5 fw-bold"><Link to="/"><FaLinux /></Link></h1>
          {/*<p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>*/}
          {/*<Button variant="primary" size="lg"></Button>*/}
          <Routes>
          <Route path="/about" element={<About />}></Route>
          </Routes>   
        </div>
      </Container>

      <Row className="align-items-md-stretch">
        <Col md={6}>
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>적용되나?</h2>
            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
            <Button variant="outline-light">Example button</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Add borders</h2>
            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
            <Button variant="outline-secondary">Example button</Button>
          </div>
        </Col>
      </Row>

      <footer className="pt-3 mt-4 text-body-secondary border-top">
        &copy; 2024
      </footer>
    </Container>
  );
}

export default JumbotronExample;
