import React from 'react';

import Item from "./Item"

const Items = () => {
  return (
    <React.Fragment>
      <table className="inventory">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Item />
        </tbody>
      </table>
      <button className="add noprint" title="Add Item">+</button>
    </React.Fragment>
  );
}

export default Items;
