import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Revenue from './pages/Revenue';
import Post from './components/Post';
import Terminal1 from './components/Terminal';
import { FaStopwatch20 } from 'react-icons/fa';
import Stag0 from './pages/Stag0';
import Stag1 from './pages/Stag1';
import Stag2 from './pages/Stag2';
import Stag3 from './pages/Stag3';
import Stag4 from './pages/Stag4';
import Header1 from './components/Header';
import Tab1 from './components/Tabs';
// Render the component

function App() {
  return (
    
    <>
    
    
    
    <div className='Appy'>
    
    <BrowserRouter>
    
    <Header1></Header1>
    <div style={{"display":"flex"}}>
    <Sidebar></Sidebar>
    {/* <Post></Post> */}
    <div className='foot_mark'>
    
    <Routes>
      <Route path='/overview' element={<Overview></Overview>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/analytics' element={<Analytics></Analytics>}/>
      <Route path='/overview/users' element={<Users></Users>}/>
      <Route path='/overview/revenue' element={<Revenue></Revenue>}/>
      <Route path='/install' element={<Stag0></Stag0>}/>
      <Route path='/s0' element={<Stag0></Stag0>}/>
      <Route path='/s1' element={<Stag1></Stag1>}/>
      <Route path='/s2' element={<Stag2></Stag2>}/>
      <Route path='/s3' element={<Stag3></Stag3>}/>
      <Route path='/s4' element={<Stag4></Stag4>}/>
      
    </Routes>
    
    
    {/* <Footer data={"hello"}></Footer> */}
    <Terminal1></Terminal1>
    
    </div>
    </div>
    </BrowserRouter>
    </div>
    
    </>
    
  );
}

export default App;
