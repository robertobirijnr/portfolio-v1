import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';


function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
