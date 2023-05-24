import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
import CustomerPages from "./pages/CustomerPages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import PesananPelanggan from "./pages/admin/dashboard/PesananPelanggan";
import DashboardIndex from "./pages/admin/dashboard/DashboardIndex";
import DetailPesanan from "./pages/admin/dashboard/DetailPesanan";
import RiwayatPesanan from "./pages/admin/dashboard/RiwayatPesanan";
// import AuthContext from "./context/AuthContext";
import { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import getDecodedToken from "./api/getDecodedToken";
// import AuthContextProvider from "./context/AuthContextProvider";
import Test from "./pages/test";

function App() {
  const [auth, setAuth] = useState(null);
  const token = localStorage.getItem("accessToken")

  useEffect(() => {
    if (token) {
      getDecodedToken().then((res) => {
        setAuth(res);
      });
    }
  }, [setAuth, token]);

  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/*" element={<CustomerPages />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardIndex />} />
            <Route path="pesanan-pelanggan" element={<PesananPelanggan />} />
            <Route path="riwayat-pesanan" element={<RiwayatPesanan />} />
            <Route path="pesanan-pelanggan/:id" element={<DetailPesanan />} />
          </Route>  
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
