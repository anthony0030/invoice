import React, { Component } from 'react';
import './App.css';
import './css/custom.css';
import './css/style.css';
import MainNav from "./components/MainNav"
import Header from "./components/Header";
import ClientDetails from "./components/ClientDetails";
import Items from "./components/Items";
import Meta from "./components/Meta";
import Balance from "./components/Balance";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoColor: true,
      logoLanguage: "en",
      logoLegal: true,
      language: "en",
      displayTotal: true,
      displayInvoiceNumber: true,
      tax: 24,
      invoiceNumber: "",
      invoiceDate: "",
      companyName: "",
      customerName: "",
      customerOccupation: "",
      AFM: "",
      DOY: "",
      subtotal: 1
    };
  }

  SetState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { displayTotal } = this.state
    return (
      <React.Fragment>
        <MainNav SetState={this.SetState}/>
        <div className="page">
          <Header/>
          <ClientDetails SetState={this.SetState}/>
          <Meta SetState={this.SetState} state={this.state}/>
          <Items/>
          { displayTotal?
            <Balance SetState={this.SetState} state={this.state}/>
          :null }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
