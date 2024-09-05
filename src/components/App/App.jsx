// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage'
import NotFoundPage from '../../pages/NotFoundPage.jsx/NotFoundPage'
import PaymentDetailsPage from '../../pages/PaymentDetailsPage/PaymentDetailsPage'
function App() {


  return ( 
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/payments" element={<PaymentsPage />}/>
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
