// import TypeNick from './components/TypeNick';

function App() {
  const console = () => {
    const btn = document.querySelector('.button');
    window.console.log(btn);
  };

  return (
    <div className="App">
      <button className="button" onClick={console}>
        GetStarted
      </button>
      {/* <TypeNick /> */}
    </div>
  );
}

export default App;
