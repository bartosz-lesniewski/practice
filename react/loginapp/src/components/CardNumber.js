import React from 'react';
import { Link } from 'react-router-dom';

function CardNumber() {
  return (
    <main className="main">
      <form className="form" method="GET">
        <Link to="/">
          <button className="button" type="submit">
            Finish
          </button>
        </Link>
        <label htmlFor="card-number" className="label">
          Type your card’s number:
        </label>
        <input
          className="input input-card"
          type="text"
          name="card-number"
          required
          autoFocus
        ></input>
      </form>
      <div className="wrong-input"></div>
    </main>
  );
}

export default CardNumber;
