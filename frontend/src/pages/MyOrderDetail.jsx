import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const MyOrderDetail = () => {
  const [detail, setDetail] = useState(null);
  const [transferFile, setTransferFile] = useState();
  const [image, setImage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmitTransfer = () => {
    const file = new FormData();
    file.append("file", image);
    file.append("status", "Mengirim Pembayaran");

    api
      .put("/project-video/payment/" + id, file, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate(0))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get("/project-video/" + id)
      .then((res) => {
        setDetail(res.data.payload);
      })
      .catch((err) => console.error(err));
  }, [id, setDetail]);

  return (
    <div className="p-3 font-poppins mt-32">
      {detail && (
        <div className="w-[1000px] mx-auto h-fit bg-[#041C32] py-8 px-10 rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-center text-4xl">
              CUSTOMER ORDER No.
            </h2>
            <p className="text-white text-center text-xl">{detail._id}</p>
          </div>
          <div className="flex flex-col mt-12 gap-8">
            <div className="flex flex-col gap-2 text-[#ECB365]">
              <div className="text-md ">Riwayat Status</div>
              {detail.status &&
                detail.status.map((status, i) => (
                  <div key={i} className="flex flex-row justify-between w-1/2">
                    <p>{status.keterangan}</p>
                    <p>{moment(status.tanggalUpdate).format("YYYY-MM-DD")}</p>
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
              {detail.harga && !detail.payment.isPaid && (
                <>
                  <label
                    className="block mb-2 text-sm font-medium dark:text-white"
                    htmlFor="user_avatar"
                  >
                    Silahkan Input Bukti Transfer
                  </label>
                  <input
                    className="block w-full text-sm  border rounded-lg cursor-pointer border-[#ECB365] text-[#ECB365]  bg-transparent"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    value={transferFile}
                    onChange={(e) => {
                      setTransferFile(e.target.value);
                      setImage(e.target.files[0]);
                    }}
                  />
                  <div className="mt-1 text-sm ">File berupa .jpg dan .png</div>
                </>
              )}
              <div className="font-bold pt-1 ">
                <p>Trsnsfer ke rek. 1180212091 bank BNI a.n Ramadhan Djibran Sanjaya</p>
              </div>
              <div className="flex flex-row justify-between font-bold pb-4 border-b-2 border-b-[#ECB365]">
                <p>Total Harga</p>
                <p>
                  {detail.harga &&
                    detail.harga.replace(
                      /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                      "."
                    )}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-xl text-[#ECB365] w-32">Link Akhir</p>
                <input
                  type="text"
                  className="w-full border-1 border-[#ECB365] text-[#ECB365] rounded-lg cursor-default bg-transparent"
                  value={detail.linkHasilAkhir || "Sedang dikerjakan"}
                  readOnly
                />
              </div>
              <div className="pt-6">
                {detail.harga ? (
                  !detail.payment.isPaid ? (
                    <>
                      <button
                        type="button"
                        className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-full rounded"
                        onClick={onSubmitTransfer}
                      >
                        Kirim Bukti
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href={"http://localhost:5000/" + detail.payment.path}
                        className=""
                      >
                        <button className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-full rounded">
                          Lihat Bukti Pembayaran
                        </button>
                      </a>
                    </>
                  )
                ) : (
                  <p>Harap Tunggu verifikasi</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrderDetail;
