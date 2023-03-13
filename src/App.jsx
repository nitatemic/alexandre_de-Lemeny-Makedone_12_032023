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
      <main>
        <VerticalBar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
