// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage'
import NotFoundPage from '../../pages/NotFoundPage.jsx/NotFoundPage'
function App() {


  return ( 
    <>
      <h1>React Router</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/payments" element={<PaymentsPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
