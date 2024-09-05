// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
function App() {


  return ( 
    <>
      <h1>React Router</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<div>Home page</div>}/>
        <Route path="/payments" element={<div>Payments page</div>}/>
      </Routes>
    </>
  )
}

export default App
