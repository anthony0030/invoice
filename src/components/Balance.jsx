import React from 'react';

const Meta = (props) => {
  const { SetState, state } = props;
  const { tax, subtotal } = state;
  return (
    <table className="balance">
      <tbody>
        <tr>
          <th>Subtotal</th>
          <td>€ {subtotal}</td>
        </tr>
        <tr>
          <th>
            TAX&nbsp;
            <input
              type="number"
              min="0"
              max="100"
              defaultValue="26"
              onBlur={(event) => SetState("tax", event.target.value)}
            />%
          </th>
          <td>€ {(tax / 100) * subtotal}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>€ {(tax / 100) * subtotal + subtotal}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Meta;
