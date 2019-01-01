import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


import ON from "../../img/color/on.png"
import OFF from "../../img/color/off.png"

import EL from "../../img/flags/gr.png"
import EN from "../../img/flags/en.png"

import Legal from "../../img/legal/legal.png"
import Normal from "../../img/legal/normal.png"

const Language = (props) => {
  const { SetState } = props;
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Logo</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => SetState("logoColor", true)}>
          <img src={ON} alt="ON Logo" />&nbsp;ON
        </DropdownItem>
        <DropdownItem onClick={() => SetState("logoColor", false)}>
          <img src={OFF} alt="OFF Logo" />&nbsp;OFF
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => SetState("logoLanguage", "en")}>
          <img src={EN} alt="English Flag" />&nbsp;English
        </DropdownItem>
        <DropdownItem onClick={() => SetState("logoLanguage", "el")}>
          <img src={EL} alt="Greek Flag" />&nbsp;Greek
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => SetState("logoLegal", true)}>
          <img src={Legal} alt="Legal" />&nbsp;Legal
        </DropdownItem>
        <DropdownItem onClick={() => SetState("logoLegal", false)}>
          <img src={Normal} alt="Normal" />&nbsp;Normal
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
}

export default Language;
