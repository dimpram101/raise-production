import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import PesananPelanggan from "./pages/admin/dashboard/PesananPelanggan";
import DashboardIndex from "./pages/admin/dashboard/DashboardIndex";
import DetailPesanan from "./pages/admin/dashboard/DetailPesanan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardIndex />} />
          <Route path="pesanan-pelanggan" element={<PesananPelanggan />} />
          <Route path="pesanan-pelanggan/:id" element={<DetailPesanan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
