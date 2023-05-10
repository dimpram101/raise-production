// import Navbar from "../../component/admin/Navbar";

import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/admin/Sidebar";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth)
  });

  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
