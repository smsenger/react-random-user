import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card';

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Some Randos</h1>
      </header>
        <UserCard />
    </div>
  );
}

export default App;
