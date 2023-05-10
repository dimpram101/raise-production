import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import CustomerPages from './pages/CustomerPages'
import Login from './pages/Login'
import Register from './pages/Register'

import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import PesananPelanggan from "./pages/admin/dashboard/PesananPelanggan";
import DashboardIndex from "./pages/admin/dashboard/DashboardIndex";
import DetailPesanan from "./pages/admin/dashboard/DetailPesanan";
import RiwayatPesanan from "./pages/admin/dashboard/RiwayatPesanan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
      <Route path='/*' element={<CustomerPages/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
          <Route path="" element={<DashboardIndex />} />
          <Route path="pesanan-pelanggan" element={<PesananPelanggan />} />
          <Route path="riwayat-pesanan" element={<RiwayatPesanan />} />
          <Route path="pesanan-pelanggan/:id" element={<DetailPesanan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
