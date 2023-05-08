import "./index.scss";

function App() {
  return (
    <div className="App">
      <button className="modal-btn">Open</button>
      <div className="overlay">
        <div className="modal">
          <svg></svg>
          <img />
        </div>
      </div>
    </div>
  );
}

export default App;
