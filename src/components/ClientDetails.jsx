import React from 'react';

const ClientDetails = (props) => {
  const { SetState } = props;
  return (
    <React.Fragment>
      <input
        type="text"
        className="clientDetails"
        placeholder="Companys Name"
        onChange={(event) => SetState("companyName", event.target.value)}
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="Customers name"
        onChange={(event) => SetState("customerName",event.target.value)}
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="occupation"
        onChange={(event) => SetState("customerOccupation", event.target.value)}
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="ΑΦΜ"
        onChange={(event) => SetState("AFM", event.target.value)}
      />
      <br/>
      <input
        type="text"
        className="clientDetails"
        placeholder="ΔΟΥ"
        onChange={(event) => SetState("DOY", event.target.value)}
      />
    </React.Fragment>
  );
}

export default ClientDetails;
