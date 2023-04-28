import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  return (   
    <>  
    <Router>    
      <Navbar title="Ajeet Kumar Pathak"  mode={mode}/>
      <div className='container my-3'> 
      <Routes >
        <Route exact  path="/about" element={<About/>}/>
        <Route exact  path="/home" element={<Home/>}/>
        <Route exact  path="/" element={<TextForm heading="Enter the text to analyse" />}/>
        
        {/* <Route path="/">
        <TextForm heading="Enter the text to analyse" />
        </Route> */}
      </Routes >     
      </div>     
      
      </Router>
    </>
    
  );
}

export default App;
