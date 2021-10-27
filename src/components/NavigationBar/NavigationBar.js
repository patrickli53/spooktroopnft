import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../resources/SpookTroop Logo crop 1.png';
import './styles.css';

const NavigationBar = () => {
    return (
        <>
        <Navbar expand='lg' className='nav navbg' variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="253"
                height="73"
                className="logoimg"
              />{' '}
            </Navbar.Brand>
            <Container>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav >
                        <Nav.Link className='navnav' href="#home">MINT</Nav.Link>
                        <Nav.Link className='navnav' href="#Roadmap">Roadmaps</Nav.Link>
                        <Nav.Link className='navnav' href="#Rarity">Rarity</Nav.Link>
                        <Nav.Link className='navnav' href="#FAQ">FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}

export default NavigationBar
