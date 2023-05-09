
import './App.css';
import React, {Component} from 'react';
import People from './pages/People'
function App() {

  routes = (
  <Routes>

    <Route exact = { true } path = '/' element={ <People /> } />
    <Route Path='/people/new' element={<NewPerson />} />

  </Routes> 
  );

  return (
    <div className="App">
      App.js
    <header>
       <h1>People App</h1>
    </header>
    <main>
      <People />
    </main>
    </div>
  );
}

export default App;
