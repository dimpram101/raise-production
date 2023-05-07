import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Dashboard from './pages/admin/Dashboard'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
