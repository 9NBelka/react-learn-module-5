import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {


  return ( 
    <>
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<div>Home page</div>}/>
        <Route path="/about" element={<div>About page</div>}/>
        <Route path="/profile" element={<div>Profile page</div>}/>
      </Routes>
    </>
  )
}

export default App
