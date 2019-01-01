import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      description: "",
      price: "",
      quantity: 1
    };
  }

  updatePrice(event) {
    console.log(this)
    this.setState({
      price: Number(event.target.value)
    });
  }

  updateQuantity(event) {
    this.setState({
      quantity: Number(event.target.value)
    });
  }

  updateItem(event) {
    this.setState({
      item: event.target.value
    });
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  render() {
    return (
      <tr>
        <td>
          <button className="cut" title="Remove Item">-</button>
          <input
            type="text"
            value={this.state.item}
            onChange={event => this.updateItem(event)}
          />
          {/* Item */}
        </td>
        <td>
          <input
            type="text"
            value={this.state.description}
            onChange={event => this.updateDescription(event)}
          />
          {/* Description */}
        </td>
        <td>
          <input
            type="number"
            value={this.state.price}
            onChange={event => this.updatePrice(event)}
          />
          {/* Rate */}
        </td>
        <td>
          <input
            type="number"
            value={this.state.quantity}
            onChange={event => this.updateQuantity(event)}
          />
          {/* Quantity */}
        </td>
        <td>
          &euro; {this.state.price * this.state.quantity }
          {/* Price */}
        </td>
      </tr>
    );
  }
}

export default Item;
