import React from "react";
import { Navbar } from "react-bootstrap";

import styles from "./style.module.scss";

import NavigationItems from "../NavigationItems";
import NavigationItemsUser from "../NavigationItemsUser";

export default function Navigation({brand}) {
  return (
    <div className={styles.Navigation}>
      <Navbar>
        <Navbar.Brand href="/home">
          <span>{brand}</span>
        </Navbar.Brand>
        <NavigationItems navItem={["BBBBB", "AAAAA"]} />
        <NavigationItemsUser />
      </Navbar>
    </div>
  );
}
