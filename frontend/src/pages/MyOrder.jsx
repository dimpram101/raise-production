import { useEffect, useState } from "react";
import api from "../api/api";
import moment from "moment";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const [videos, setVideos] = useState([]);
  const [graphics, setGraphics] = useState([]);
  const [isVideo, setIsVideo] = useState(true);

  useEffect(() => {
    api
      .get("/user/all-projects")
      .then((res) => {
        const videos = res.data.video;
        const graphics = res.data.graphic;
        setVideos([...videos]);
        setGraphics([...graphics]);
      })
      .catch((err) => console.error(err));
  }, [setVideos, setGraphics]);

  return (
    <>
      <div className=" bg-[#073054] h-[1500px]">
        <div className="pt-52 flex flex-col font-poppins items-center">
          <div className="text-[72px] text-white font-[900] flex flex-col items-center">
            <div className="flex">
              <div className="ml-8">
                <h1>
                  Pesanan <span className="text-[#ECB365] ">Saya</span>{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-10 text-white flex flex-row gap-4 mb-4">
            <p>Filter : </p>
            <div className="flex flex-row">
              <button
                className={
                  (isVideo
                    ? "bg-[#ECB365] text-black "
                    : "bg-transparent text-white") +
                  " border border-black px-3 rounded-l-lg"
                }
                onClick={() => setIsVideo((prev) => !prev)}
              >
                Video
              </button>
              <button
                className={
                  (isVideo
                    ? "bg-transparent text-white "
                    : "bg-[#ECB365] text-black ") +
                  " border border-black px-3 rounded-r-lg"
                }
                onClick={() => setIsVideo((prev) => !prev)}
              >
                Graphics
              </button>
            </div>
          </div>

          <div className=" bg-[#04293A] w-[678px] h-full rounded shadow-2xl">
            <div className=" font-poppins flex flex-col text-[#ECB365] items-center p-[24px]">
              <h1 className="text-[20px]">Riwayat Pemesanan</h1>
            </div>

            <div>
              <div className=" p-[24px]">
                {/* <div className="flex">
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
                        <h1>
                          Kategori: <span>Pembuatan Poster</span>
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-white">Lihat Selengkapnya</h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-[72px] w-[125px] bg-red-800 mt-0.5 ml-6 rounded border border-[#ECB365] ">
                    <button>
                      <div className="p-[23px] pl-[26px]">
                        <h1 className="text-white">Batalkan</h1>
                      </div>
                    </button>
                  </div>
                </div> */}

                {videos.length > 0 &&
                  isVideo &&
                  videos.map((video, index) => (
                    <div
                      key={video._id}
                      className="w-full h-fit mt-6 border border-[#ECB365] text-[#ECB365] p-2 rounded"
                    >
                      <div className="flex justify-between">
                        <div>
                          <h1>Pesanan nomor {index + 1}</h1>
                        </div>

                        <div>
                          <h1>
                            status: <span>Disetujui</span>
                          </h1>
                        </div>
                      </div>

                      <div className="flex justify-between pt-3 w-full overflow-hidden">
                        <h1>Deskripsi : {video.deskripsi}</h1>
                      </div>

                      <div className="flex justify-between pt-3">
                        <div>
                          <h1>
                            Deadline :{" "}
                            {moment(video.deadline).format("YYYY-MM-DD")}
                          </h1>
                        </div>

                        <div>
                          <Link to={"/myorder/" + video._id}>
                            <h1 className="text-white">Lihat Selengkapnya</h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                {graphics.length > 0 &&
                  !isVideo &&
                  graphics.map((graphic) => (
                    <div
                      key={graphic._id}
                      className="w-full h-[80px] mt-6 border border-[#ECB365] text-[#ECB365] p-2 rounded"
                    >
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
                          <h1>Deadline : {graphic.deadline}</h1>
                        </div>

                        <div>
                          {/* <Link to={"/myoder/"+} */}
                          <h1 className="text-white">Lihat Selengkapnya</h1>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
