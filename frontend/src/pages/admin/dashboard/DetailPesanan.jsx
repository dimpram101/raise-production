import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TransderFileModal from "../../../Components/TransferFileModal";
import api from "../../../api/api";
import moment from "moment";

const DetailPesanan = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(0);
  const [newStatus, setNewStatus] = useState("");
  const [linkAkhir, setLinkAkhir] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState("hidden");

  const showModal = () => {
    setModal("");
  };

  const hiddingModal = () => {
    setModal("hidden");
  };

  const onUpdateSubmit = (tolak = false) => {
    if (tolak) {
      api
        .put("/project-video/" + id, {
          newStatus: "DITOLAK",
        })
        .then(() => navigate(0))
        .catch((err) => console.error(err));
    } else {
      api
        .put("/project-video/" + id, {
          newStatus,
          harga: totalPrice,
          linkAkhir
        })
        .then(() => navigate(0))
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
        if (!totalPrice) setTotalPrice(currentPrice);
      })
      .catch((err) => console.error(err));
  }, [id, setDetail, totalPrice]);

  console.log(detail);
  return (
    <div className="p-3 font-poppins">
      {!detail ? (
        <TransderFileModal behavior={modal} hidding={() => hiddingModal()} imgPath={""}/>
      ) : (
        <TransderFileModal behavior={modal} hidding={() => hiddingModal()} imgPath={detail.payment.path}/>
      )}
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
                  <div
                    key={status.keterangan}
                    className="flex flex-row justify-between w-1/2"
                  >
                    <p key={status}>{status.keterangan}</p>
                    <p key={status}>
                      {moment(status.tanggalUpdate).format("YYYY-MM-DD")}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-[#ECB365]">Link Akhir</p>
              <textarea
                className="h-16 border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent text-lg"
                value={detail.linkHasilAkhir || linkAkhir}
                onChange={e => setLinkAkhir(e.target.value)}
              ></textarea>
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
                <p className="ml-[500px] mt-2">Rp </p>
                <input
                  type="text"
                  value={totalPrice
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")}
                  onChange={(e) => setTotalPrice(e.target.value)}
                  className="border-1  border-[#ECB365] focus:ring-[#ECB365] focus:border-[#ECB365]  text-[#ECB365] rounded-lg  bg-transparent text-lg "
                />
              </div>

              <div className="flex flex-row mt-6 justify-between font-bold">
                <div className="flex">
                  <p>Bukti Transaksi : </p>
                  {/* <p className="ml-3"> file</p> */}
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

                <label htmlFor="default-checkbox" className="font-medium ml-6">
                  Verifikasi Bukti
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPesanan;
