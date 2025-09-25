import { useState } from 'react'
import { Routes, Route } from 'react-router';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>                    {/* Add the Routes component to wrap our individual routes*/}
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;