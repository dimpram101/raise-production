import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import CustomerPages from './pages/CustomerPages'
import Login from './pages/Login'
import Register from './pages/Register'

import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/*' element={<CustomerPages/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
       
      </Routes>
    </Router>


  )
}

export default App
