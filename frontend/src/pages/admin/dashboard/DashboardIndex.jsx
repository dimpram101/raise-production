import { useNavigate } from "react-router-dom";

const DashboardIndex = () => {
  const navigate = useNavigate();

  const onClickRedirect = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 h-screen">
        <div
          className="w-96 h-[440px] bg-[#04293A] flex flex-col gap-10 items-center justify-around py-8 font-poppins shadow-xl rounded-sm cursor-pointer"
          onClick={() => onClickRedirect("/dashboard/riwayat-pesanan")}
        >
          <h2 className="text-white text-2xl">Pelanggan</h2>
          <img
            src="/assets/icon/user_profile.png"
            className="w-28 h-28 fill-white stroke-white"
          />
          <h2 className="text-[#ECB365] text-2xl">
            123 <span className="text-white">Pelanggan</span>
          </h2>
        </div>
        <div
          className="w-96 h-[440px] bg-[#04293A] flex flex-col gap-10 items-center justify-around py-8 font-poppins shadow-xl rounded-sm cursor-pointer"
          onClick={() => onClickRedirect("/dashboard/pesanan-pelanggan")}
        >
          <h2 className="text-white text-2xl">Pesanan</h2>
          <img
            src="/assets/icon/order.png"
            className="w-28 h-28 fill-white stroke-white"
          />
          <h2 className="text-[#ECB365] text-2xl">
            3 <span className="text-white">Pesanan</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
