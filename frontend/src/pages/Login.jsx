const Login = () => {
  return(
    <>
      <div className="bg-[#073054] h-screen flex flex-col justify-center">
        <div className="flex flex-col mx-auto p-10 bg-[#04293A] h-[576px] w-[544px] shadow-2xl border-2 border-[#ECB365]">
          <div className="font-poppins flex flex-col items-center">
            <h1 className="text-[72px] font-bold text-white">Masuk</h1>
      
            <form className="pt-6">
              <div class="mb-6">
                <label for="email" class="block mb-2 text-[24px]  text-[#ECB365] dark:text-white">Email</label>
                <input type="email" id="email" class="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-[500px] p-2.5" placeholder="Contoh: name@gmail.com" required/>
              </div>

              <div class="mb-3">
                <label for="password" class="block mb-2 text-[24px]  text-[#ECB365]">Password</label>
                <input type="password" id="password" class="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-[500px] p-2.5" placeholder="" required />
                <div className="pt-2 flex justify-end">
                  <a href="" className="text-[#ECB365] hover:text-[#e19f42]">Lupa Password ?</a>
                </div>
              </div>
            </form>

            <div>
              <button type="button" className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-[500px] rounded">MASUK</button>
              
              <div className="pt-3">
                <label for="daftar_button" class="block mb-2  text-[16px]  text-[#ECB365]">Belum mempunyai akun ? </label>
                <button type="button" id="daftar_button" className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-[500px] rounded">DAFTAR</button>

              </div>
            </div>
          </div>

          </div>
      </div>
    </>

  );

}

export default Login;