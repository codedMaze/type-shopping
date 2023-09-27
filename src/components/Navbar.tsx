import React from "react";

import { Link } from "react-router-dom";
import { Container, Nav, Navbar as NavContainer } from "react-bootstrap";

const Navbar: React.FC = () => {
  return (
    <NavContainer className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={Link} to="">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="store">
            Store
          </Nav.Link>
        </Nav>
      </Container>
    </NavContainer>
  );
};

export default Navbar;
