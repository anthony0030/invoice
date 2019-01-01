import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


import ON from "../../img/color/on.png"
import OFF from "../../img/color/off.png"

import EL from "../../img/flags/gr.png"
import EN from "../../img/flags/en.png"

import Legal from "../../img/legal/legal.png"
import Normal from "../../img/legal/normal.png"

const Language = (props) => {
  const { toggleLogoColor, toggleLogoLanguage, toggleLogoLegal } = props;
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Logo</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={ () => toggleLogoColor(true)}>
          <img src={ON} alt="ON Logo" />&nbsp;ON
        </DropdownItem>
        <DropdownItem onClick={ () => toggleLogoColor(false)}>
          <img src={OFF} alt="OFF Logo" />&nbsp;OFF
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => toggleLogoLanguage("en")}>
          <img src={EN} alt="English Flag" />&nbsp;English
        </DropdownItem>
        <DropdownItem onClick={() => toggleLogoLanguage("el")}>
          <img src={EL} alt="Greek Flag" />&nbsp;Greek
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => toggleLogoLegal(true)}>
          <img src={Legal} alt="Legal" />&nbsp;Legal
        </DropdownItem>
        <DropdownItem onClick={() => toggleLogoLegal(false)}>
          <img src={Normal} alt="Normal" />&nbsp;Normal
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>);
}

export default Language;
