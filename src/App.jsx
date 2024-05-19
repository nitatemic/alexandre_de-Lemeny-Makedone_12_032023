import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Error from './components/Error';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <MainPage /> } />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;
