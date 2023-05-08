import { Link } from "react-router-dom";

const DetailPesanan = () => {
  return (
    <div className="p-3 font-poppins">
      <div className="">
        <Link className="text-white" to={"/dashboard/pesanan-pelanggan"}>
          {"< Kembali"}
        </Link>
      </div>
      <div className="w-[1000px] mx-auto h-screen bg-[#041C32] py-8 px-10">
        <h2 className="text-white text-center text-4xl">CUSTOMER ORDER</h2>
        <div className="flex flex-col mt-12 gap-8">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-2xl text-[#ECB365]">ORDER NO 2</p>
            <div className="flex flex-row gap-3 text-xl">
              <div className="bg-green-400 rounded-lg px-3 py-2 cursor-pointer">
                TERIMA
              </div>
              <div className="bg-red-600 rounded-lg px-3 py-2 cursor-pointer">
                TOLAK
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Category</p>
            <textarea className="h-16 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg" readOnly value={"AWKOAOKWOAKWOAWOK"}></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Deskripsi</p>
            <textarea className="h-48 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg" readOnly value={"AWKOAOKWOAKWOAWOK"}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
