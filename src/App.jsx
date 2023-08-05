import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VerticalBar from './components/VerticalBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="App-content">
        <VerticalBar />
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
