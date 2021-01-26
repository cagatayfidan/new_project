import React from "react";
import { Nav, Col, Row } from "react-bootstrap";
import style from './style.module.scss'
export default function NavigationItemsUser() {
  return (
    <Nav className={style.navigationItemUser}>
      <Row>
        <Col xs={"6"}>
          <Nav.Link href="/asede">
            <span>Lorem</span>
          </Nav.Link>
        </Col>
        <Col xs={"6"}>
          <Nav.Link href="/">
            <span>Ipsum</span>
          </Nav.Link>
        </Col>
      </Row>
    </Nav>
  );
}
