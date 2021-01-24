import React from "react";
import { Nav } from "react-bootstrap";

export default function NavigationItemsUser() {
  return (
    <Nav>
      <Nav.Link href="/asede">
        <span>Lorem Ipsum</span>
      </Nav.Link>
      <Nav.Link href="/">
        <span>Dolor Sit</span>
      </Nav.Link>
    </Nav>
  );
}
