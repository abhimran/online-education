import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop/Shop';



function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Shop></Shop>
    </React.Fragment>
  );
}

export default App;
