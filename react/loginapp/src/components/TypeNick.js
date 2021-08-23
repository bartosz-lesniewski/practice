import React from 'react';
import { Link } from 'react-router-dom';

function TypeNick() {
  return (
    <main>
      <Link to="/cardnumber">
        <button className="button">Next</button>
      </Link>
      <h1>Type your nickname</h1>
      <input></input>
    </main>
  );
}

export default TypeNick;
