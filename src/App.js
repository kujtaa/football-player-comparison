import React from 'react';
import './App.css';
import Comparison from './components/Comparison';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Football Player Comparison</h1>
      </header>
      <main>
        <Comparison />
      </main>
    </div>
  );
}

export default App;