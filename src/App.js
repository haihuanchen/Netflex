import React from 'react';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Front-end of Netflex App</h1>
      <Row title="Netflex Originals" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;
