import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../react.png';
export default function Navbar() {
    return (
        <div className="main-div">
            <Container fluid>
  
  <Row>
       <nav className="nav-links">
                    <ul>
                    <li>
                        <Col> <img src={logo} />
                        <figcaption className="caption">
                            REACT
                            </figcaption></Col> 
                        </li>
                        <li>
                        <Col> <Link to="/" className="link">Todo App</Link></Col> 
                        </li>
                        <li>
                        <Col> <Link to="/product" className="link">Products</Link></Col> 
                        </li>
                        <li>
                        <Col> <Link to="/contact" className="link">Contact</Link></Col> 
                        </li>
                        <li>
                        <Col> <Link to="/services" className="link">Services</Link></Col> 
                        </li>
                       
                    </ul>
                </nav>
  
    
  </Row>
</Container>
        </div>
    )
}
