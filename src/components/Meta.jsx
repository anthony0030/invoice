import React from 'react';

const Meta = (props) => {
  const { SetState, state } = props;
  const {tax, subtotal} = state;
  return (
    <table className="meta">
      <tbody>
        <tr>
          <th>Invoice&nbsp;#</th>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <th>Date</th>
          <td>
            <input
              type="date"
              onBlur={(event) => SetState("invoiceDate", event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th>Ammout</th>
          <td>€ {(tax / 100) * subtotal + subtotal}</td>
        </tr>
      </tbody>
    </table>
   );
}

export default Meta;
