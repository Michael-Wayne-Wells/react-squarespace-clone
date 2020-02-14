import React from 'react';
import { Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

function NavigationBar() {
  return(
    <div>
    <style jsx>{`
      .logoImage{
        width: 40px;
        borderRadius: 99999px;
        margin: 10px;
      }
      .navbar {
        padding-left: 50px;
        color:
        background-color: rgba(0,0,0,0)
      }
      .login{
        color: white;
        padding: 30px;
        font-size: 14px;
      }
      .login:hover{
        color: white;
      }
      .btn-nav {
        background-color: white;
        border: none;
        color: black;
        padding: 15px 28px;
        margin: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
      }
      .navbar-dark .navbar-nav .nav-link {
        color: rgba(255,255,255, 1);
      }
      .mr-auto {
        margin: 0 auto;
      }
      `}
      </style>
      <Navbar  variant="dark">
      <Navbar.Brand href="#home"><img  className="logoImage" src="https://www.buildateam.io/wp-content/uploads/2018/07/logo-Squarespace.png"></img>CIRCLESPACE</Navbar.Brand>
      <Nav className="mr-auto">
      <NavDropdown title="TOUR" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="TEMPLATES" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="SUPPORT" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      </Nav>
      <Nav.Link className="login" href="#link">LOG IN</Nav.Link>
      <button className="btn-nav">GET STARTED</button>

      </Navbar>
      </div>
    )
  }

  export default NavigationBar;
