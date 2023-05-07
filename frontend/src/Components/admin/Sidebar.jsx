import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="fixed w-64 bg-[#064663] h-screen mr-64">
        <div className="px-3 py-6">
          <div className="text-center text-3xl font-bold text-poppins mb-12">
            <h2 className="text-[#ECB365]">
              Admin <span className="text-white">Panel</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg text-[#ECB365]">
            <Link to={"/dashboard"}>
              <div className="px-6 py-2 rounded-lg"> Dashboard</div>
            </Link>
            <Link to={"/dashboard/pesanan-pelanggan"}>
            <div className="px-6 py-2 rounded-lg">Pesanan Pelanggan</div>
            </Link>
            <Link to={"/dashboard/riwayat-pesanan"}>
            <div className="px-6 py-2 rounded-lg">Riwayat Pesanan</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
