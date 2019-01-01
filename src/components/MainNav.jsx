import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
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
    const {
      toggleLanguage,
      toggleDisplayTotal,
      toggleLogoColor,
      toggleLogoLanguage,
      toggleLogoLegal,
      toggleInvoiceNumber
    } = this.props;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src={stamp} alt="" className="stamp" />
          &nbsp;
          Invoice
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <File/>
            <Language toggleLanguage={toggleLanguage}/>
            <InvoiceNumber toggleInvoiceNumber={toggleInvoiceNumber}/>
            <DisplayTotal toggleDisplayTotal={toggleDisplayTotal}/>
            <Logo
              toggleLogoColor={toggleLogoColor}
              toggleLogoLanguage={toggleLogoLanguage}
              toggleLogoLegal={toggleLogoLegal}
            />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
