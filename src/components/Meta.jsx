import React from 'react';

const Meta = () => {
  return (
    <table className="meta">
      <tbody>
        <tr>
          <th>Invoice&nbsp;#</th>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <th>Date</th>
          <td><input type="date" id="date"/></td>
        </tr>
        <tr>
          <th>Ammout</th>
          <td>€ 32.76</td>
        </tr>
      </tbody>
    </table>
   );
}

export default Meta;
