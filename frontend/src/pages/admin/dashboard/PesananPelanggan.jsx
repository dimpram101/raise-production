import { useEffect, useState } from "react";
import PesananCard from "../../../Components/admin/PesananCard";
import api from "../../../api/api";

const PesananPelanggan = () => {
  const [isVideo, setIsVideo] = useState(true);
  const [videos, setVideos] = useState([]);
  const [graphics, setGraphics] = useState([]);

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
    <div>
      <div className="bg-[#073054] relative w-auto h-full flex py-[49px] justify-center">
        <div className="flex flex-col items-center gap-[32px] py-[48px] bg-[#04293A] w-[1054px] h-fit rounded-[8px]">
          <div className=" flex flex-row justify-between gap-8 w-[980px] h-[36px]">
            <p className="font-poppins font-normal text-[24px] text-teal-50">
              Pesanan Pelanggan
            </p>
            <div className="flex flex-row justify-center items-center gap-[12px]">
              <p className="font-poppins font-normal text-[24px] text-[#ECB365]">
                Filter :
              </p>
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
                  Graphic
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {isVideo &&
              videos.length > 0 &&
              videos.map((video, index) => <PesananCard key={video._id} video={video} index={index + 1}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesananPelanggan;
