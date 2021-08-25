import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormError } from './FormError';

class CardNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      formError: { cardNumber: '' },
      cardNumberValid: false,
    };
  }

  handleUserCardInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldCardNumber, value) {
    let fieldValidationError = this.state.formError;
    let cardNumberValid = this.state.cardNumberValid;

    switch (fieldCardNumber) {
      case 'cardNumber':
        cardNumberValid = value.length === 10 && value.match(/^[0-9]+$/);
        fieldValidationError.cardNumber = cardNumberValid
          ? ''
          : 'is invalid - you have to enter 10-digits number';
        break;
    }

    this.setState(
      { formError: fieldValidationError, cardNumberValid: cardNumberValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.cardNumberValid });
  }

  render() {
    return (
      <main className="main">
        <form className="form" method="GET">
          <Link to="/">
            <button
              className="button"
              type="submit"
              disabled={!this.state.formValid}
            >
              Finish
            </button>
          </Link>
          <label htmlFor="cardNumber" className="label">
            Type your card’s number:
          </label>
          <input
            className="input input-card"
            type="text"
            name="cardNumber"
            required
            autoFocus
            value={this.state.cardNumber}
            onChange={this.handleUserCardInput}
          ></input>
        </form>
        <div className="wrong-input">
          <FormError formError={this.state.formError} />
        </div>
      </main>
    );
  }
}
export default CardNumber;
