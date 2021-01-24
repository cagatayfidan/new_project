import React from "react";
import { Nav } from "react-bootstrap";

export default function NavigationItems({ navItem }) {
  return (
    <Nav className="mr-auto">
      {navItem.map((value, index) => {
        return (
          <Nav.Link key={index}>
            <span>{value}</span>
          </Nav.Link>
        );
      })}
    </Nav>
  );
}
