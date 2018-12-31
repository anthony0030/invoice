import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


import ON from "../../img/color/on.png"
import OFF from "../../img/color/off.png"

import EL from "../../img/flags/gr.png"
import EN from "../../img/flags/en.png"

import Legal from "../../img/legal/legal.png"
import Normal from "../../img/legal/normal.png"

const Language = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Logo</DropdownToggle>
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
        <DropdownItem divider />
        <DropdownItem>
          <img src={EN} alt="English Flag" />
          &nbsp;
          English
        </DropdownItem>
        <DropdownItem>
          <img src={EL} alt="Greek Flag" />
          &nbsp;
          Greek
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <img src={Legal} alt="Legal" />
          &nbsp;
          Legal
        </DropdownItem>
        <DropdownItem>
          <img src={Normal} alt="Normal" />
          &nbsp;
          Normal
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
}

export default Language;
