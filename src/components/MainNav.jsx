import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import File from "./MainNav/File"
import Language from "./MainNav/Language"
import InvoiceNumber from "./MainNav/InvoiceNumber"
import DisplayTotal from "./MainNav/DisplayTotal"
import Logo from "./MainNav/Logo"

import stamp from "../img/stamp.png"

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md">
      <img src={stamp} alt="" className="stamp"/>
        <NavbarBrand href="/">Invoice</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <File/>
            <Language/>
            <InvoiceNumber/>
            <DisplayTotal/>
            <Logo/>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
