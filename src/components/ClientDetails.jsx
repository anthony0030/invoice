import React from 'react';

const ClientDetails = () => {
  return (
    <React.Fragment>
      <input
        type="text"
        className="clientDetails"
        placeholder="Companys Name"
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="Customers name"
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="occupation"
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="ΑΦΜ"
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="ΔΟΥ"
      />
    </React.Fragment>
  );
}

export default ClientDetails;
