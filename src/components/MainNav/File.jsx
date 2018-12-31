import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const File = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>File</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>New</DropdownItem>
        <DropdownItem>Save</DropdownItem>
        <DropdownItem>Open</DropdownItem>
        <DropdownItem>Serilize</DropdownItem>
        <DropdownItem>Unserialize</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default File;
