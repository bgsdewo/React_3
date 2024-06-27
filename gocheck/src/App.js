import React from "react";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">Go Check</span>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Ada yg mau dicatat?</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        <li>Makan</li>
        <li>Tidur</li>
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        praesentium!
      </span>
    </footer>
  );
}

export default App;
