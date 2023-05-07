import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminCustomerOrder from './pages/AdminCustomerOrder'
import AdminHistoryCustomer from './pages/AdminHistoryCustomer'

import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/Admin-CustomerOrder' element={<AdminCustomerOrder/>}></Route>
        <Route path='/Admin-HistoryCustomer'element={<AdminHistoryCustomer/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
