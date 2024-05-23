import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Vendors from '../../Pages/Vendors/Vendors'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Customers from '../../Pages/Customers/Customers'
import Appointment from '../../Pages/Appointment/Appointment'

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/customers" element={<Customers />} />
      </Routes> 
  )
}

export default Router
