import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import moment from "moment";

const DetailPesanan = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(0);
  const [newStatus, setNewStatus] = useState("");
  const navigate = useNavigate();

  const onUpdateSubmit = (tolak = false) => {
    if (tolak) {
      api
        .put("/project-video/" + id, {
          newStatus: "DITOLAK",
        })
        .then((res) => navigate(0))
        .catch((err) => console.error(err));
    } else {
      api
        .put("/project-video/" + id, {
          newStatus,
          harga: totalPrice
        })
        .then((res) => navigate(0))
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    api
      .get("/project-video/" + id)
      .then((res) => {
        let kustom = res.data.payload.kustom;
        setDetail(res.data.payload);

        let currentPrice = 0;
        kustom.forEach((val) => {
          currentPrice += parseInt(val.harga);
        });

        setTotalPrice(currentPrice);
      })
      .catch((err) => console.error(err));
  }, [id, setDetail]);

  return (
    <div className="p-3 font-poppins">
      <div className="">
        <Link className="text-white" to={"/dashboard/pesanan-pelanggan"}>
          {"< Kembali"}
        </Link>
      </div>
      {detail && (
        <div className="w-[1000px] mx-auto h-fit bg-[#041C32] py-8 px-10 rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-center text-4xl">
              CUSTOMER ORDER No.
            </h2>
            <p className="text-white text-center text-xl">{detail._id}</p>
          </div>
          <div className="flex flex-col mt-12 gap-8">
            <div className="flex flex-row justify-between items-center ">
              {/* <p className="text-2xl text-[#ECB365]">ORDER NO 2</p> */}
              <div className="flex flex-row items-center gap-3">
                <p className="text-[#ECB365]">Status</p>
                <input
                  type="text"
                  className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg min-w-full"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-3 text-xl">
                <div
                  className="bg-green-400 rounded-lg px-5 py-2 cursor-pointer"
                  onClick={() => onUpdateSubmit(false)}
                >
                  UPDATE
                </div>
                <div
                  className="bg-red-600 rounded-lg px-5 py-2 cursor-pointer"
                  onClick={() => onUpdateSubmit(true)}
                >
                  TOLAK
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[#ECB365]">
              <div className="text-md ">Riwayat Status</div>
              {detail.status &&
                detail.status.map((status) => (
                  <div key={status.keterangan} className="flex flex-row justify-between w-1/2">
                    <p key={status}>{status.keterangan}</p>
                    <p key={status}>{moment(status.tanggalUpdate).format("YYYY-MM-DD")}</p>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-[#ECB365]">Category</p>
              <textarea
                className="h-16 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg"
                value={detail.kategori}
                readOnly
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-[#ECB365]">Deskripsi</p>
              <textarea
                className="h-48 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg overflow-y-auto"
                readOnly
                value={detail.deskripsi}
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-[#ECB365]">Contoh Referensi</p>
              <input
                type="text"
                className="border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent"
                value={detail.link_referensi}
              />
            </div>
            <div className="flex flex-col gap-5 text-[#ECB365] text-xl border-b-2 border-t-2 border-[#ECB365] py-3 px-1">
              {detail.kustom.map((val, i) => (
                <div key={i} className="flex flex-row justify-between">
                  <p>{val.jenis}</p>
                  <p>
                    {val.harga
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
              ))}
              <div className="flex flex-row justify-between">
                <p>Deadline</p>
                <p>{moment(detail.deadline).format("YYYY-MM-DD")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[#ECB365] text-xl">
              <div className="flex flex-row justify-between font-bold">
                <p>Total Harga</p>
                <p>
                  {totalPrice
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                </p>
              </div>
              {/* <button className="bg-[#ECB365] text-black py-2 rounded-md font-bold text-2xl">
                AJUKAN HARGA
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPesanan;
