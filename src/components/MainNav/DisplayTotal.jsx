import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import ON from "../../img/total/on.png"
import OFF from "../../img/total/off.png"

const DisplayTotal = (props) => {
  const { SetState } = props;
  return (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>Display Total</DropdownToggle>
    <DropdownMenu right>
        <DropdownItem onClick={() => SetState("displayTotal", true)}>
        <img src={ON} alt="ON Logo" />
        &nbsp;
        ON
      </DropdownItem>
        <DropdownItem onClick={() => SetState("displayTotal", false)}>
        <img src={OFF} alt="OFF Logo" />
        &nbsp;
        OFF
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown> );
}

export default DisplayTotal;
