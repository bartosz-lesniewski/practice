import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormError } from './FormError';
// import Validation from './Validate';

class TypeNick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      formError: { nickname: '' },
      nicknameValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationError = this.state.formError;
    let nicknameValid = this.state.nicknameValid;

    switch (fieldName) {
      case 'nickname':
        nicknameValid =
          value.length > 2 &&
          value.length <= 20 &&
          value.match(/^[0-9a-zA-Z_\-]+$/);
        fieldValidationError.nickname = nicknameValid ? '' : 'is invalid';
        break;
    }

    this.setState(
      { formError: fieldValidationError, nicknameValid: nicknameValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.nicknameValid });
  }

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }
  render() {
    return (
      <main className="main">
        <form className="form" method="GET">
          <Link to="/cardnumber">
            <button
              className="button"
              type="submit"
              disabled={!this.state.formValid}
            >
              Next
            </button>
          </Link>
          <label htmlFor="nickname" className="label">
            Type your nickname:
          </label>
          <input
            className="input input-nickname"
            type="text"
            name="nickname"
            required
            autoFocus
            value={this.state.nickname}
            onChange={this.handleUserInput}
          ></input>
        </form>
        <div className="wrong-input">
          <FormError formError={this.state.formError} />
        </div>
      </main>
    );
  }
}
export default TypeNick;
