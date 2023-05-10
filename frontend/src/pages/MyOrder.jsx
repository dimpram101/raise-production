const MyOrder = () => {
  return (
    <>
      <div className=" bg-[#073054] h-[1500px]">
        <div className="pt-52 flex flex-col font-poppins items-center">
          <div className="text-[72px] text-white font-[900] flex flex-col items-center">
            <div className="flex">

              <div className="ml-8">
                <h1 >Pesanan <span className="text-[#ECB365] ">Saya</span> </h1>
              </div>
            </div>
          </div>

          <div className=" bg-[#04293A] w-[678px] h-full mt-16 rounded shadow-2xl">
            <div className=" font-poppins flex flex-col text-[#ECB365] items-center p-[24px]">
              <h1 className="text-[20px]">Riwayat Pemesanan</h1>
            </div>


            <div>
            <div className=" p-[24px]">
              <div className="flex">
                {/* Status proses persetujuan */}
                <div className="w-[481px] h-[80px] border border-[#ECB365] text-[#ECB365] p-2 rounded">
                  <div className="flex justify-between">
                    <div>
                      <h1>Pesanan nomor 2</h1>
                    </div>

                    <div>
                      <h1>
                        status: <span>Proses Persetujuan</span>
                      </h1>
                    </div>
                  </div>

                  <div className="flex justify-between pt-3">
                    <div>
                      <h1>Kategori: <span>Pembuatan Poster</span></h1>
                    </div>

                    <div>
                        <h1 className="text-white">Lihat Selengkapnya</h1>
                    </div>
                  </div>
                </div>
                {/* Status setuju */}
                <div className="h-[72px] w-[125px] bg-red-800 mt-0.5 ml-6 rounded border border-[#ECB365] ">
                  <button>
                    <div className="p-[23px] pl-[26px]">
                        <h1 className="text-white">Batalkan</h1>
                    </div>
                    
                  </button>
                </div>
              </div>

              <div className="w-full h-[80px] mt-6 border border-[#ECB365] text-[#ECB365] p-2 rounded">
                  <div className="flex justify-between">
                    <div>
                      <h1>Pesanan nomor 1</h1>
                    </div>

                    <div>
                      <h1>
                        status: <span>Disetujui</span>
                      </h1>
                    </div>
                  </div>

                  <div className="flex justify-between pt-3">
                    <div>
                      <h1>Kategori: <span>Edit Video</span></h1>
                    </div>

                    <div>
                      <h1 className="text-white">Lihat Selengkapnya</h1>
                    </div>
                  </div>
              </div>

              

            </div>
              
            </div>
          </div>

        
        </div>

      </div>
    </>

  );

}

export default MyOrder;