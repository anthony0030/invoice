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
      subtotal: 0
    };
  }

  setCompanyName = (value) => {
    this.setState({
      companyName: value,
    });
  }

  setCustomerName = (value) => {
    this.setState({
      customerName: value,
    });
  }

  setCustomerOccupation = (value) => {
    this.setState({
      customerOccupation: value,
    });
  }

  setAFM = (value) => {
    this.setState({
      AFM: value,
    });
  }

  setDOY = (value) => {
    this.setState({
      DOY: value,
    });
  }

  toggleLogoColor = (value) => {
    this.setState({
      logoColor: value,
    });
  }

  toggleLogoLanguage = (value) => {
    this.setState({
      logoLanguage: value,
    });
  }

  toggleLogoLegal = (value) => {
    this.setState({
      logoLegal: value,
    });
  }

  toggleLanguage = (value) => {
    this.setState({
      language: value,
    });
  }

  toggleDisplayTotal = (value) => {
    this.setState({
      displayTotal: value,
    });
  }

  toggleInvoiceNumber = (value) => {
    this.setState({
      displayInvoiceNumber: value,
    });
  }

  setTax = (value) =>{
    console.log("heloooo")
    console.log(value)
    this.setState({
      tax: value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <MainNav
          toggleLogoColor={this.toggleLogoColor}
          toggleLogoLanguage={this.toggleLogoLanguage}
          toggleLogoLegal={this.toggleLogoLegal}
          toggleLanguage={this.toggleLanguage}
          toggleDisplayTotal={this.toggleDisplayTotal}
          toggleInvoiceNumber={this.toggleInvoiceNumber}
        />
        <div className="page">
          <Header/>
          <ClientDetails
            setCompanyName={this.setCompanyName}
            setCustomerName={this.setCustomerName}
            setCustomerOccupation={this.setCustomerOccupation}
            setAFM={this.setAFM}
            setDOY={this.setDOY}
          />
          <Meta/>
          <Items/>
          <Balance setTax={this.setTax}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
