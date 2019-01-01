import React from 'react';

const Meta = (props) => {
  const { setTax } = props;
  return (
    <table className="balance">
      <tbody>
        <tr>
          <th>Subtotal</th>
          <td>€ 26</td>
        </tr>
        <tr>
          <th>
            TAX&nbsp;
            <input
              type="number"
              min="0"
              max="100"
              defaultValue="26"
              onBlur={(event) => setTax(event.target.value)}
            />%
          </th>
          <td>€ 6.76</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>€ 32.76</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Meta;
