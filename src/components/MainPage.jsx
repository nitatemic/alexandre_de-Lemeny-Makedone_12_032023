import React from 'react';
import Navbar from './Navbar';
import VerticalBar from './VerticalBar';
import Dashboard from './Dashboard';

export default function MainPage() {
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
