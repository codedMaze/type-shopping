import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
