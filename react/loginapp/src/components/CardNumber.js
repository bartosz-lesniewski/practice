import React from 'react';
import { Link } from 'react-router-dom';

function CardNumber() {
  return (
    <main>
      <Link to="/">
        <button className="button">Finish</button>
      </Link>
      <h1>Type your card’s number</h1>
      <input></input>
    </main>
  );
}

export default CardNumber;
