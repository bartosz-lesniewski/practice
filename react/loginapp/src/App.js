import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardNumber from './components/CardNumber';
import TypeNick from './components/TypeNick';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/typenick" component={TypeNick}></Route>
          <Route path="/cardnumber" component={CardNumber}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <main>
      <Link to="/typenick">
        <button className="button">GetStarted</button>
      </Link>
    </main>
  );
}

export default App;
