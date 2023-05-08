// import Navbar from "../../component/admin/Navbar";

import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/admin/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <Outlet/>
      </div>
    </>
  );
};

export default Dashboard;
