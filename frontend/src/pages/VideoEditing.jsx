/* eslint-disable no-unused-vars */
import { useState } from "react";
import Calendar from "../Components/Calendar";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const VideoEditing = () => {
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
  }

  const [kategori, setKategori] = useState();
  const [deskripsi, setDeskripsi] = useState();
  const [motionGraphicFrame, setMotionGraphicFrame] = useState(0);
  const [motionGraphicFramePrice, setMotionGraphicFramePrice] = useState();
  const [takeVideo, setTakeVideo] = useState(0);
  const [takeVideoPrice, setTakeVideoPrice] = useState();
  const [date, setDate] = useState(new Date());
  const [linkReferensi, setLinkReferensi] = useState();
  const [kustom, setKustom] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandle = () => {
    console.log(kustom);
    if (motionGraphicFrame > 0) {
      kustom.push({
        jenis: "Motion Graphic",
        jumlah: `${motionGraphicFrame}`,
        harga: `${motionGraphicFramePrice}`,
      });
    }

    if (takeVideo > 0) {
      kustom.push({
        jenis: "Take Video",
        jumlah: `${takeVideo}`,
        harga: `${takeVideoPrice}`,
      });
    }

    console.log(kategori, linkReferensi);

    api
      .post("/project-video/create", {
        kategori,
        deskripsi,
        kustom,
        deadline: date,
        link_referensi: linkReferensi,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const addKustom = (value) => {
    if (kustom.find((e) => e.jenis === value.jenis)) {
      setKustom(kustom.filter((val) => val.jenis != value.jenis));
    } else {
      setKustom(old => [...old, value]);
    }
  };

  const handlingPlusMotionGraphic = () => {
    setMotionGraphicFrame((pref) => pref + 1);

    setMotionGraphicFramePrice(
      (prefPrice) => (prefPrice = 2500 * (motionGraphicFrame + 1))
    );
  };

  const handlingMinusMotionGraphic = () => {
    if (motionGraphicFrame > 0) {
      setMotionGraphicFrame((pref) => pref - 1);

      setMotionGraphicFramePrice(() => motionGraphicFramePrice - 2500);
    }
  };

  const handlingPlusTakeVideo = () => {
    setTakeVideo((pref) => pref + 1);

    setTakeVideoPrice((prefPrice) => (prefPrice = 350000 * (takeVideo + 1)));
  };

  const handlingMinusTakeVideo = () => {
    if (takeVideo > 0) {
      setTakeVideo((pref) => pref - 1);

      setTakeVideoPrice(() => takeVideoPrice - 350000);
    }
  };

  return (
    <>
      <div className="bg-[#073054] h-[1500px]">
        <div className="pt-52 flex flex-col font-poppins items-center">
          <div className="text-[72px] text-white font-[900] flex flex-col items-center">
            <div className="flex">
              <div className=" bg-[#ECB365] p-1 rounded-lg shadow-sm">
                <img src="./assets/icon/ICON VIDEO.png" alt="" />
              </div>

              <div className="ml-8">
                <h1>
                  Video <span className="text-[#ECB365] ">Editing</span>{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-[#04293A] w-[678px] h-full mt-16 rounded shadow-2xl">
            <div className="font-poppins flex flex-col text-[#ECB365] items-center p-[24px]">
              <h1 className="text-[20px]">Customer Fiver</h1>

              <div className="w-[630px] mt-20">
                <label
                  htmlFor="kategori"
                  className="block mb-2 text-sm font-medium "
                >
                  Kategori
                </label>
                <select
                  id="kategori"
                  className="bg-[#04293A] border border-[#ECB365] text-white  text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5 "
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                >
                  <option>Kategori 1</option>
                  <option>Kategori 2</option>
                  <option>Kategori 3</option>
                  <option>Kategori 4</option>
                </select>

                <div className="pt-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium "
                  >
                    Deskripsi Video
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="bg-[#04293A] border border-[#ECB365] text-white  text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5"
                    placeholder="Tuliskan deskripsi yang anda inginkan"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  ></textarea>
                </div>

                <div className="pt-6 flex justify-between">
                  <p className="text-sm">Color Grading</p>
                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      15.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Color Grading",
                          harga: "15000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-1 flex justify-between">
                  <p className="text-sm">Sound & Design</p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      25.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Sound Design",
                          harga: "25000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <p className="text-sm">Subtitle</p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      50.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Subtitle",
                          harga: "50000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-1 flex justify-between">
                  <p className="text-sm">Thumbnail</p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      100.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Thumbnail",
                          harga: "100000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-1 flex justify-between">
                  <p className="text-sm">Asembly Video</p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      30.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Asembly Video",
                          harga: "30000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-1 flex justify-between">
                  <p className="text-sm">Skrip Video</p>

                  <div className="flex items-center mb-4">
                    <label
                      htmlFor="default-checkbox"
                      className=" text-sm font-medium "
                    >
                      30.000
                    </label>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 ml-3 text-[#ECB365] focus:ring-gray-800 bg-[#04293A] border-gray-300 "
                      onClick={() =>
                        addKustom({
                          jenis: "Skrip Video",
                          harga: "30000",
                        })
                      }
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <label
                    htmlFor="harga-motion-graphic"
                    className="block mb-2 text-sm  text-[#ECB365] dark:text-white"
                  >
                    Motion Graphic
                  </label>

                  <div className="flex justify-between">
                    <div>
                      <input
                        type="number"
                        id="harga-motion-graphic"
                        value={motionGraphicFramePrice}
                        className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5"
                        placeholder="Total harga"
                        readOnly
                      />
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                      <label
                        htmlFor="default-checkbox"
                        className=" text-sm font-medium "
                      >
                        Per Frame / 2.500
                      </label>
                      <div className="flex flex-row ml-3 text-white">
                        <div className="">
                          <button
                            type="button"
                            onClick={() => handlingMinusMotionGraphic()}
                            className=""
                          >
                            -
                          </button>
                        </div>
                        <div className=" w-3 mx-4 ">
                          <p>{motionGraphicFrame}</p>
                        </div>
                        <div>
                          <button
                            onClick={() => handlingPlusMotionGraphic()}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label
                    htmlFor="harga-motion-graphic"
                    className="block mb-2 text-sm  text-[#ECB365] dark:text-white"
                  >
                    Take Video (Daerah Balikpapan)
                  </label>

                  <div className="flex justify-between">
                    <div>
                      <input
                        type="number"
                        id="harga-motion-graphic"
                        value={takeVideoPrice}
                        className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5"
                        placeholder="Total harga"
                        readOnly
                      />
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                      <label
                        htmlFor="default-checkbox"
                        className=" text-sm font-medium "
                      >
                        Per hari / 350.000
                      </label>
                      <div className="flex flex-row ml-3 text-white">
                        <div className="">
                          <button
                            type="button"
                            onClick={() => handlingMinusTakeVideo()}
                            className=""
                          >
                            -
                          </button>
                        </div>

                        <div className=" w-3 mx-4 ">
                          <p>{takeVideo}</p>
                        </div>

                        <div>
                          <button
                            onClick={() => handlingPlusTakeVideo()}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm  text-[#ECB365] dark:text-white"
                  >
                    Referensi
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-full p-2.5"
                    placeholder="Berupa link google drive"
                    value={linkReferensi}
                    onChange={(e) => setLinkReferensi(e.target.value)}
                  />
                </div>

                <div className="pt-3">
                  <label
                    htmlFor="harga-motion-graphic"
                    className="block mb-2 text-sm  text-[#ECB365] dark:text-white"
                  >
                    Deadline
                  </label>

                  <div className="flex justify-between mb-1">
                    <div>
                      {/* <input type="number" id="harga-motion-graphic" value={takeVideoPrice} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5" placeholder="" disabled /> */}
                      <Calendar
                        date={date}
                        onChange={(date) => setDate(date)}
                      />
                    </div>

                    <div className="flex items-center mb-4 mt-2 mr-10 ">
                      <label
                        htmlFor="calendar"
                        className=" text-sm font-medium mr-3"
                      >
                        Pilih tanggal
                      </label>
                      <img src="./assets/icon/Calender ICon.png" alt="" />
                    </div>
                  </div>

                  <div className="pt-3">
                    <p className="text-sm">
                      Mohon Perhatian Pemintaan Dibawah 3 Hari <br />
                      Biaya Akan Dikenakan 2 kali lipat !.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-full rounded"
                      onClick={onSubmitHandle}
                    >
                      Tambahkan Pesanan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoEditing;
