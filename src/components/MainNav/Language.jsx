import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import EL from "../../img/flags/gr.png"
import EN from "../../img/flags/en.png"

const Language = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Language</DropdownToggle>
      <DropdownMenu right>
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
      </DropdownMenu>
    </UncontrolledDropdown>);
}

export default Language;
