
import EditProfile from "../Components/EditProfile";
import EditProfileModal from "../Components/EditProfileModal";
import { useState } from "react";


const Profile = () => {

  const [openModalName, setOpenModalName] = useState("hidden");
  const [openModalTelp, setOpenModalTelp] = useState("hidden");
  const [openModelPass, setOpenModalPass] = useState("hidden");
  const [input, setInput] = useState("");

  const ShowModalPass = () => {
    setInput("hidden");
    setOpenModalPass("")
  }


  const HiddingModalPass = () => {
    setOpenModalPass("hidden")
  }

  const ShowModalName = () => {
    setInput("hidden");
    setOpenModalName("");
   
  };

  const HiddingModalName = () => {
    setOpenModalName("hidden");
  }

  const ShowModalTelp = () => {
    setOpenModalTelp("");
    setInput("hidden");
  }

  const HiddingModalTelp = () => {
    setOpenModalTelp("hidden");
  }


  return (
    <>
      <div className={`h-[1300px] pt-48 flex flex-col items-center font-poppins`}>
        <h1 className="text-[72px] font-[900] text-white">Akun <span className="text-[#ECB365] ">Saya</span></h1>

        <div className="bg-[#04293A] rounded w-[678px] h-[576px] mt-20 flex flex-col items-center">
          <div className="relative w-[100px] h-[100px] mt-10 overflow-hidden bg-gray-900 rounded-full">
            <svg
              className="absolute w-[80px] h-[80px] text-white right-[10px] top-1 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="mt-20">
            <EditProfile  modal_behavior={() => ShowModalName()} title="Nama" margin_left="ml-60" content="yoga Tiara Wiguna"/>
            <EditProfile modal_behavior={() => ShowModalTelp()} title="Nomor Telepon" margin_left="ml-40" content="0823232323" />
            <EditProfile title="Email" margin_left="ml-[250px]" button_hidden="hidden" content="yga@gmail.com" />
            

            <div className="pt-20 flex flex-col items-center">
              <button onClick={() => ShowModalPass()}
                type="button"
                className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-96 rounded"
              >
                Ubah Password
              </button>
            </div>

          </div>

         
          <EditProfileModal hiddingInput={input}  state={openModalName} closeModal={() => HiddingModalName()} title="Ubah Nama" subTitle="Nama"  />
          <EditProfileModal hiddingInput={input} state={openModalTelp} closeModal={() => HiddingModalTelp()} title="Ubah Nomor Telepon " subTitle= "Nomor Telepon" />
          <EditProfileModal hiddingInput={input} state={openModelPass} closeModal={() => HiddingModalPass()} title="Ubah Password " subTitle="Password Baru" />

        
        
        </div>

      </div>
    </>

  );
}

export default Profile;

