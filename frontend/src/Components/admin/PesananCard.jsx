/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";

const PesananCard = ({ video }) => {

  console.log(video.status[(video.status.length - 1)]);
  return (
    <>
      <div className="flex flex-col items-start gap-[24px] w-auto h-auto">
        <div className="border-2 border-[#ECB365] flex flex-col items-start rounded-[8px] px-[24px] py-[12px] w-[982px] h-[238px]">
          <div className="flex flex-row justify-between items-start gap-[12] w-[934px] h-[214px]">
            <div className="flex flex-col items-start gap-[18px] w-[414px] h-[214px]">
              <div className="flex flex-row gap-[8px]">
                <p className="font-poppins font-normal text-[20px] text-[#ECB365]">
                  Pesanan No : {video._id}
                </p>
                <p className="font-poppins font-normal text-[20px] text-[#ECB365]"></p>
              </div>
              <div className="flex flex-row gap-[8px]">
                <p className="flex font-poppins font-normal text-[20px] text-[#ECB365]">
                  Kategori : {video.kategori}
                </p>
                <p className="flex font-poppins font-normal text-[20px] text-[#ECB365]"></p>
              </div>
              <div className="flex flex-row gap-[8px]">
                <p className="flex font-poppins font-normal text-[20px] text-[#ffffff]">
                  Deadline : {moment(video.deadline).format("YYYY-MM-DD")}
                </p>
                <p className="flex font-poppins font-normal text-[20px] text-[#ECB365]"></p>
              </div>
              <div className="flex flex-row gap-[8px]">
                <p className="flex font-poppins font-normal text-[20px] text-[#ffffff]">
                  Status : {video.status.length > 0 ? video.status[video.status.length - 1].keterangan : "Belum Dikerjakan"}
                </p>
                <p className="flex font-poppins font-normal text-[20px] text-[#ECB365]"></p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-[188px] h-[214px]">
              <div className="bg-[#064663] p-[8px] rounded-[4px]">
                <Link to={"/dashboard/pesanan-pelanggan/" + video._id}>
                  <p className="font-poppins font-normal text-[20px] text-[#ffffff]">
                    Selengkapnya
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PesananCard;
