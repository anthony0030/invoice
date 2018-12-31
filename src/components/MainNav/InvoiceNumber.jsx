import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import ON from "../../img/number/on.png"
import OFF from "../../img/number/off.png"

const InvoiceNumber = () => {
  return (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>Invoice Number</DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>
        <img src={ON} alt="ON Logo" />
        &nbsp;
        ON
      </DropdownItem>
      <DropdownItem>
        <img src={OFF} alt="OFF Logo" />
        &nbsp;
        OFF
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown> );
}

export default InvoiceNumber;
