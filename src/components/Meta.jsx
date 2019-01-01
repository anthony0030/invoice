import React from 'react';

const Meta = (props) => {
  const { SetState, state } = props;
  const { tax, subtotal, displayInvoiceNumber} = state;
  return (
    <table className="meta">
      <tbody>
        { displayInvoiceNumber?
          <tr>
            <th>Invoice&nbsp;#</th>
            <td><input type="text"/></td>
          </tr>
        : null }
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
