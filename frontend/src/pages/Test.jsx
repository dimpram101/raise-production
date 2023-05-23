/* eslint-disable react/jsx-no-undef */
import TransderFileModal from "../Components/TransferFileModal";
import { useState } from "react";


const Test = () => {
  const [modal, setModal] = useState("hidden");


  const showModal = () => {
    setModal("");
  };

  const hiddingModal = () => {
    setModal("hidden");
  };
  return (
    <>
      <div  className="p-3 font-poppins">
        <TransderFileModal behavior={modal} hidding={() => hiddingModal()} />
        <div className="">
          {/* <Link className="text-white" to={"/dashboard/pesanan-pelanggan"}>
            {"< Kembali"}
          </Link> */}
        </div>
          <div className="w-[1000px] mx-auto h-fit bg-[#041C32] py-8 px-10 rounded-lg">
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-center text-4xl">
                CUSTOMER ORDER No.
              </h2>
              <p className="text-white text-center text-xl">asasasasasas</p>
            </div>
            <div className="flex flex-col mt-12 gap-8">
              <div className="flex flex-row justify-between items-center ">
                {/* <p className="text-2xl text-[#ECB365]">ORDER NO 2</p> */}
                <div className="flex flex-row items-center gap-3">
                  <p className="text-[#ECB365]">Status</p>
                  <input
                    type="text"
                    className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg min-w-full"
                
                    // onChange={(e) => setNewStatus(e.target.value)}
                  />
                </div>
                <div className="flex flex-row gap-3 text-xl">
                  <div
                    className="bg-green-400 rounded-lg px-5 py-2 cursor-pointer"
                    // onClick={() => onUpdateSubmit(false)}
                  >
                    UPDATE
                  </div>
                  <div
                    className="bg-red-600 rounded-lg px-5 py-2 cursor-pointer"
                    
                  >
                    TOLAK
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[#ECB365]">
                <div className="text-md ">Riwayat Status</div>
           
                    <div  className="flex flex-row justify-between w-1/2">
                      <p >sasasasas</p>
                      <p >sasasasasasa</p>
                    </div>
                
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl text-[#ECB365]">Category</p>
                <textarea
                  className="h-16 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg"
                  value=""
                  readOnly
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl text-[#ECB365]">Deskripsi</p>
                <textarea
                  className="h-48 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg overflow-y-auto"
                  readOnly
                  value=""
                ></textarea>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl text-[#ECB365]">Contoh Referensi</p>
                <input
                  type="text"
                  className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent"
                  value=""
                />
              </div>
              <div className="flex flex-col gap-5 text-[#ECB365] text-xl border-b-2 border-t-2 border-[#ECB365] py-3 px-1">
  
                  <div  className="flex flex-row justify-between">
                    <p>asasasasa</p>
                    <p>
                      sasasasasasasa
                    </p>
                  </div>
                
                <div className="flex flex-row justify-between">
                  <p>Deadline</p>
                  <p>assasasasa</p>
                </div>
              </div>
              <div className="flex flex-col  text-[#ECB365] text-xl">
                <div className="flex flex-row justify-between font-bold">
                  <p>Total Harga</p>
                  <p className="ml-[500px] mt-2">Rp </p>
                  <input
                    type="text"
                  className="border-1  border-[#ECB365] focus:ring-[#ECB365] focus:border-[#ECB365]  text-[#ECB365] rounded-lg  bg-transparent text-lg "

                  // onChange={(e) => setNewStatus(e.target.value)}
                  />
                </div>

                <div className="flex flex-row mt-6 justify-between font-bold">
                  <div className="flex">
                    <p>Bukti Transaksi : </p>
                    <p className="ml-3"> file</p>
                  </div>

                  <div>
                    <button 
                      type="button"
                      onClick={() => showModal()}
                      className="text-white p-1 text-sm bg-[#ECB365] hover:bg-[#e19f42] h-[30px] w-40 rounded"
                    >
                      Buka File
                    </button>
                  </div>
                </div>

              <div className="mt-6">
             
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "

                />

                <label
                  htmlFor="default-checkbox"
                  className="font-medium ml-6"
                >
                  Verifikasi Bukti
                </label>
                
              </div>
            
               
              </div>
            </div>
          </div>
       
      </div>
    </>

  );
}

export default Test;