import { useEffect, useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [phone, onPhoneChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [verifPassword, onVerifPasswordChange] = useInput();

  useEffect(() => {
    if (name && email && phone && password && verifPassword) {
      if (password === verifPassword) {
        return setDisable(false);
      }
    }

    return setDisable(true);
  }, [name, email, phone, password, verifPassword])

  const onSubmitHandler = () => {
    setLoading(true);
    axios.post("http://localhost:5000/user/register", {
      nama: name,
      email,
      noHP: phone,
      password,
      confirmPassword: verifPassword,
    })
      .then((response) => { 
        console.log(response);
      })
      .catch((error) => { 
        console.log(error);
        setError("Gagal register")
       })
      .finally(setLoading(false)) 
  }

  return (
    <>
      <div className="bg-[#073054] h-screen flex flex-col justify-center">
        <div className="flex flex-col mx-auto p-10 bg-[#04293A] h-[786px] w-[544px] shadow-2xl border-2 border-[#ECB365]">
          <div className="font-poppins flex flex-col items-center">
            {error && (
              <div>
                {error}
              </div>
            )}
            <h1 className="text-[72px] font-bold text-white">Daftar</h1>

            <form className="pt-6">
              <Input label="Nama" value={name} onChange={onNameChange} placeholder={"Contoh : Yoga Tiara Wiguna"} required />
              <Input label="Email" value={email} onChange={onEmailChange} placeholder={"Contoh: name@gmail.com"} required />
              <Input label="Nomor Telepon" value={phone} onChange={onPhoneChange} placeholder={"Contoh : 08**********"} required />

              <div className="mb-3">
                <label htmlFor="password" className="block mb-2 text-[24px]  text-[#ECB365]">Password</label>
                <input type="password" id="password" className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-[500px] p-2.5" placeholder="" value={password} onChange={onPasswordChange} required />
                
                <div className="mt-3">
                  <label htmlFor="verifPassword" className="block mb-2 text-[24px]  text-[#ECB365]">Verifikasi Password</label>
                  <input type="Password" id="verifPassword" className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-[500px] p-2.5" placeholder="" value={verifPassword} onChange={onVerifPasswordChange} required />
                </div>
              </div>
            </form>

            <div className="mt-3">
              {loading ? (
                <div>Loading</div>
              ) : (
                <button
                  
                  type="button"
                  className={`text-white ${disable ? "bg-gray-800" : "bg-[#ECB365] hover:bg-[#e19f42]"} h-[48px] w-[500px] rounded`}
                  disabled={disable} onClick={onSubmitHandler}
                  
                >
                  DAFTAR
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Register;

