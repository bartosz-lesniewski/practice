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
        fieldValidationError.nickname = nicknameValid
          ? ''
          : 'is invalid - it have to be minimum 3 chars and maximum 20 chars. You can use chars, digits, dash and underscore.';
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

  render() {
    return (
      <main className="main">
        <form className="form" method="GET">
          <Link to="/cardnumber">
            <button
              className="btn btn-info"
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
            placeholder="Type your nickname:"
            className="form-control"
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
