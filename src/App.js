import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import EmpData from './components/EmpData.js';
import EmpForm from './components/EmpForm.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    // <Navbar>
    //   <Routes>
    //             <Route path='/'>
    //               <EmpForm />
    //             </Route>
    //             <Route path='/employee-list' component={EmpData}>
    //             </Route>
    //   </Routes>
    // </Navbar>

    <div>
      <EmpForm />
      
    </div>
  );
}

export default App;
