/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react"
import { Nav, Navbar } from "react-bootstrap"

import Search from "./Search"

import "./styles.css"

const App = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      className="px-4 py-8"
      fixed="top"
    >
      <Navbar.Brand>SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto align-items-end px-3">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Products</Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-end px-3">
          <Search />
          <Nav.Link className="pl-4">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default App
