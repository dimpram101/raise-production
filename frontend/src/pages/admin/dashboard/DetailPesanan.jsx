import { Link } from "react-router-dom";

const DetailPesanan = () => {
  return (
    <div className="p-3 font-poppins">
      <div className="">
        <Link className="text-white" to={"/dashboard/pesanan-pelanggan"}>
          {"< Kembali"}
        </Link>
      </div>
      <div className="w-[1000px] mx-auto h-fit bg-[#041C32] py-8 px-10">
        <h2 className="text-white text-center text-4xl">CUSTOMER ORDER</h2>
        <div className="flex flex-col mt-12 gap-8">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-2xl text-[#ECB365]">ORDER NO 2</p>
            <div className="flex flex-row gap-3 text-xl">
              <div className="bg-green-400 rounded-lg px-5 py-2 cursor-pointer">
                TERIMA
              </div>
              <div className="bg-red-600 rounded-lg px-5 py-2 cursor-pointer">
                TOLAK
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Category</p>
            <textarea
              className="h-16 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg"
              readOnly
              value={"AWKOAOKWOAKWOAWOK"}
            ></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Deskripsi</p>
            <textarea
              className="h-48 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg overflow-y-auto"
              readOnly
              value={"AWKOAOKWOAKWOAWOK"}
            ></textarea>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Link Komponen</p>
            <input
              type="text"
              className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent"
              value={"Tidak ada"}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl text-[#ECB365]">Contoh Referensi</p>
            <input
              type="text"
              className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent"
              value={"https://drive.google.com"}
            />
          </div>
          <div className="flex flex-col gap-5 text-[#ECB365] text-xl border-b-2 border-t-2 border-[#ECB365] py-3 px-1">
            <div className="flex flex-row justify-between">
              <p>Color Grading</p>
              <p>15.000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Sound & Design</p>
              <p>15.000</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Motion Graphic</p>
              <p>2.500/Per frame</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Deadline</p>
              <p>12-05-2023</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 text-[#ECB365] text-xl">
            <div className="flex flex-row justify-between font-bold">
              <p>Total Harga</p>
              <p>150.000</p>
            </div>
            <button className="bg-[#ECB365] text-black py-2 rounded-md font-bold text-2xl">
              AJUKAN HARGA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
