const listItems = [
  { id: 1, title: "Eat", done: false },
  { id: 2, title: "Sleep", done: true },
];
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
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
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
