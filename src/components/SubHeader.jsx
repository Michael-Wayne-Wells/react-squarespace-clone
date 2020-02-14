import React from 'react';
import { Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

function SubHeader() {
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
      .bar {
        top: 250px;
      }
      `}
      </style>
      <Navbar  variant="dark" className="bar">

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
      </Navbar>
      </div>
    )

  }

  export default SubHeader;
