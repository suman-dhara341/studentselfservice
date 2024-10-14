import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Admin from './Components/Admin'
import User from './Components/User'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/User' element={<User/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App




