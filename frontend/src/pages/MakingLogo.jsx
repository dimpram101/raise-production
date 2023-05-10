/* eslint-disable no-unused-vars */
import { useState } from "react";
import Calendar from "../Components/Calendar";

const MakingLogo = () => {

  const [lotsOfPicture, setLotOfPicture] = useState(0);
  const [lotsOfPicturePrice, setLotOfPicturePrice] = useState();

  const handlingPlusLotsOfPicture = () => {
    setLotOfPicture((pref) => pref + 1)

    setLotOfPicturePrice((prefPrice) => (
      prefPrice = 25000 * (lotsOfPicture + 1)
    ));
  };

  const handlingMinusLotsOfPicture = () => {
    if (lotsOfPicture > 0) {
      setLotOfPicture((pref) => (
        pref - 1
      ));

      setLotOfPicturePrice(() => (
        lotsOfPicturePrice - 25000
      ));
    }
  };

  return (
    <>
      <div className="bg-[#073054] h-[1200px]">
        <div className="pt-52 flex flex-col font-poppins items-center">
          <div className="text-[72px] text-white font-[900] flex flex-col items-center">
            <div className="flex">
              <div className=" bg-[#ECB365] p-1 rounded-lg shadow-sm">
                <img src="./assets/icon/ICON LOGO.png" alt="" />
              </div>

              <div className="ml-8">
                <h1 >Pembuatan <span className="text-[#ECB365] ">Logo</span> </h1>
              </div>
            </div>
          </div>

          <div className="bg-[#04293A] w-[678px] h-full mt-16 rounded shadow-2xl">
            <div className="font-poppins flex flex-col text-[#ECB365] items-center p-[24px]">
              <h1 className="text-[20px]">Customer Fiver</h1>

              <div className="w-[630px] mt-20">
                <label htmlFor="kategori" className="block mb-2 text-sm font-medium ">Kategori</label>
                <select id="kategori" className="bg-[#04293A] border border-[#ECB365] text-white  text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5 ">
                  <option>Kategori 1</option>
                  <option>Kategori 2</option>
                  <option>Kategori 3</option>
                  <option>Kategori 4</option>
                </select>

                <div className="pt-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium ">Deskripsi Desain</label>
                  <textarea id="message" rows="4" className="bg-[#04293A] border border-[#ECB365] text-white  text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5" placeholder="Tuliskan deskripsi yang anda inginkan"></textarea>
                </div>

      

                <div className="pt-1">
                  <label htmlFor="harga-motion-graphic" className="block mb-2 text-sm  text-[#ECB365] dark:text-white">Jumlah Gambar</label>

                  <div className="flex justify-between">
                    <div>
                      <input type="number" id="harga-motion-graphic" value={lotsOfPicturePrice} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5" placeholder="Total harga" disabled />
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                      <label htmlFor="default-checkbox" className=" text-sm font-medium ">Per / 25.000</label>
                      <div className="flex flex-row ml-3 text-white">
                        <div className="">
                          <button type="button" onClick={() => handlingMinusLotsOfPicture()} className="">-</button>
                        </div>
                        <div className=" w-3 mx-4 ">
                          <p>{lotsOfPicture}</p>
                        </div>
                        <div>
                          <button onClick={() => handlingPlusLotsOfPicture()} type="button">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
            
                <div className="pt-1">
                  <label htmlFor="email" className="block mb-2 text-sm  text-[#ECB365] dark:text-white">Referensi</label>
                  <input type="email" id="email" className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5" placeholder="Berupa link google drive" required />
                </div>

                <div className="pt-3">
                  <label htmlFor="harga-motion-graphic" className="block mb-2 text-sm  text-[#ECB365] dark:text-white">Take Video (Daerah Balikpapan)</label>

                  <div className="flex justify-between mb-1">
                    <div>
                      {/* <input type="number" id="harga-motion-graphic" value={takeVideoPrice} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5" placeholder="" disabled /> */}
                      <Calendar/>
                    </div>

                    <div className="flex items-center mb-4 mt-2 mr-10 ">
                      <label htmlFor="calendar" className=" text-sm font-medium mr-3">Pilih tanggal</label>
                      <img src="./assets/icon/Calender ICon.png" alt="" />
                    </div>

                    
                  </div>

                  <div className="pt-3">
                    <p className="text-sm">Mohon Perhatian Pemintaan Dibawah 3 Hari <br/>Biaya Akan Dikenakan 2 kali lipat !.</p>
                  </div>

                  <div className="pt-6">
                    <button type="button" className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-full rounded">Tambahkan Pesanan</button>
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

export default MakingLogo;