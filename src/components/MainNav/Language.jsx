import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import EL from "../../img/flags/gr.png"
import EN from "../../img/flags/en.png"

const Language = (props) => {
  const { SetState } = props;
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Language</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => SetState("language", "en")}>
          <img src={EN} alt="English Flag" />
          &nbsp;
          English
        </DropdownItem>
        <DropdownItem onClick={() => SetState("language", "el")}>
          <img src={EL} alt="Greek Flag" />
          &nbsp;
          Greek
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
}

export default Language;
