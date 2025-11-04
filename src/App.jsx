
import './App.css'
import ParentLogin from './pages/ParentLogin'
import ChildLogin from './pages/ChildLogin'
import { Routes, Route} from 'react-router-dom';
import ParentRegister from './pages/ParentRegister';
import React from 'react';

function App() {

  return (
    <>
     
     <Routes>
      <Route path="/" element={<ParentLogin />} />
      <Route path="/child" element={<ChildLogin/>}/>
      <Route path='/parent' element={<ParentRegister/>}/>

      </Routes >
    </>
  )
}

export default App
