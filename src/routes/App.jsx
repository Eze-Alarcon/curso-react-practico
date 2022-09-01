import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Layout from '../containers/Layout'

// Pages
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'

// styles
import '../styles/global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />			
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter> 


  )
}


export default App 


