import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardNumber from './components/CardNumber';
import TypeNick from './components/TypeNick';
import { validate } from 'json-schema';
import { initialValues } from './components/Validate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/typenick"
            render={() => (
              <TypeNick validate={validate} initialValues={initialValues} />
            )}
          ></Route>
          <Route
            path="/cardnumber"
            render={() => (
              <CardNumber validate={validate} initialValues={initialValues} />
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <main>
      <Link to="/typenick">
        <button className="btn btn-info">GetStarted</button>
      </Link>
    </main>
  );
}

export default App;
