import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = () => {
    axios.post("http://localhost:5000/user/login", {
      email,
      password
    }, {
      withCredentials: true,
    }).then(response => {
      console.log(response);
    }).catch(error => console.log(error))
  }

  return (
    <div className="font-poppins">
      <div className="grid min-h-screen justify-items-center items-center">
        <div className="flex flex-col justify-between w-[544px] h-[446px] bg-[#04293A] py-6 px-3 border-2 border-[#ECB365] gap-4">
          <h1 className="text-6xl text-white font-bold text-center mt-5">
            Admin
          </h1>
          <form onSubmit={onSubmitForm}>
            <div className="flex flex-col w-full gap-[24px] px-3 pb-2">
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-[#ECB365]">Email</p>
                <input
                  type="text"
                  className="bg-transparent rounded-md border border-[#ECB365] text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl text-[#ECB365]">Kata sandi</p>
                <input
                  type="password"
                  className="bg-transparent rounded-md border border-[#ECB365] text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-[#ECB365] rounded-md h-12 text-white" type="submit">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
