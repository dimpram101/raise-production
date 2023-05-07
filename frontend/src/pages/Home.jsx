import Navbar from "../Components/Landing_page/Navbar";
import ServiceCard from "../Components/Landing_page/ServiceCard";
import Footer from "../Components/Landing_page/Footer";

const Home = () => {

  return(
    <>
      <div className="bg-[#073054] h-full">
        <Navbar />

        <div className="pt-72 flex flex-col font-poppins items-center">
          <div className="text-[72px] text-white font-[900] flex flex-col items-center">
              <h1>LAYANAN <span className="text-[#ECB365] ">EDITING</span> </h1>
              <h1>SEMUA MENJADI MUDAH</h1>
          </div>

          <div className="pt-6 text-xl">
            <p className="text-[#ECB365]">Menghadirkan Jasa Layanan Untuk Anda</p>
          </div>

          <div className="pt-10 ">
            <button type="button" className="text-white bg-[#ECB365] hover:bg-[#e19f42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-[16px] px-2 py-2 text-center font-poppins mr-3 md:mr-0 ">GET STARTED</button>

            <button type="button" className="ml-6 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#073054] rounded-lg border hover:border-[#ECB365] border-white hover:text-[#ECB365]">
              <div className="flex">
                <div>
                  Lihat Selengkapnya
                </div>

                <svg aria-hidden="true" className="pl-3 w-10 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              
              </div>
            </button>

          </div>

          <div className="text-[72px] mt-96 text-white font-[900]">
            <h1>Tentang Kami</h1>
          </div>

          <div className="mt-6 text-w text-[#ECB365]">
            <p className="text-center">Kami adalah tim profesional yang berbakat dan berpengalaman di bidang <br/> kami masing-masing, dan kami bersatu untuk menciptakan sesuatu yang <br/>luar biasa.</p>
          </div>


          <div className="mt-28 grid  grid-cols-2 gap-14">
            
            <div className="flex flex-col pl-28">
              <h1 className="text-2xl text-[#ECB365]">Pengalaman Tim</h1>
                <p className=" text-xl text-justify text-white pt-3">Kami adalah sebuah tim profesional yang terdiri dari orang-orang yang berpengalaman dan ahli di bidangnya masing-masing. Dengan latar belakang yang beragam, kami bergabung bersama untuk memberikan pengalaman terbaik kepada pelanggan kami.</p>
            </div>


            <div className="flex flex-col pr-28">
                <h1 className="text-2xl text-[#ECB365]">Komunikasi Yang Cepat</h1>
                <p className="text-justify text-xl text-white pt-3">Tim kami dikenal dengan kecepatan dan responsivitasnya yang luar biasa. Kami memahami bahwa setiap permintaan atau pertanyaan dari pelanggan penting untuk direspon dengan cepat dan akurat, dan itulah sebabnya kami selalu siap sedia untuk membantu Anda</p>
            </div>

            <div className="flex flex-col pl-28">
                <h1 className="text-2xl text-[#ECB365]">Harga Terbaik</h1>
                <p className="text-justify text-xl text-white pt-3">Salah satu keunggulan kami adalah harga yang murah dan terjangkau. Kami memahami bahwa harga merupakan salah satu faktor yang sangat penting bagi pelanggan dalam memilih produk atau layanan. Oleh karena itu, kami selalu berusaha untuk menawarkan harga yang sesuai dengan anggaran pelanggan, tanpa mengorbankan kualitas atau fitur dari produk atau layanan kami</p>
            </div>

            <div className="flex flex-col pr-28">
                <h1 className="text-2xl text-[#ECB365]" >Kualitas</h1>
                <p className="text-justify text-xl text-white pt-3">Kualitas adalah salah satu fokus utama kami. Kami menyadari bahwa pelanggan kami membutuhkan produk dan layanan yang andal dan berkualitas, dan kami berusaha untuk memenuhi ekspektasi tersebut dengan memberikan produk dan layanan yang terbaik.</p>
              </div>
          </div>


          <div className="text-[72px] mt-60 text-white font-[900]">
            <h1>Layanan Kami</h1>
          </div>

          <div className="mt-6 text-xl text-[#ECB365]">
            <p className="text-center">Kami menyediakan fitur yang memungkinkan pelanggan menyesuaikan <br/> layanan kami berdasarkan kebutuhan mereka dan dengan mudah melihat perkiraan harga. <br />perkiraan harga.</p>
          </div>

          <div className="mt-20">
            <ServiceCard />  
          </div>
          
          <div className="text-[72px] mt-80 text-white font-[900]">
            <h1>Kontak Kami</h1>
          </div>

          <div className="mt-6 text-xl text-[#ECB365]">
            <p className="text-center">Silakan hubungi kami untuk pertanyaan atau informasi lebih lanjut tentang <br/> layanan kami. Kami siap membantu Anda dengan segala yang Anda <br />butuhkan.</p>
          </div>

          <div className="flex flex-row mt-20 mr-16">
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div>
                    <img className="h-[32px] " src="./assets/logo/whatsapp.png" alt="" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-[32px] font-semibold text-[#ECB365]">Whatsapp</h1>
                  </div>
                </div>
              </div>
              <p className="text-white pt-6">Alessandro Benaya Pinem  +62-8950-1189-6 <br />Ramadhan Djibran Sanjaya +62-1276-3321-93</p>

            </div>

            <div className="ml-80">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div>
                    <img className="h-[32px] mx-auto " src="./assets/logo/instagram.png" alt="" />
                  </div>
                  <div className="pl-3">
                    <h1 className="text-[32px] font-semibold text-[#ECB365]">Instagram</h1>
                  </div>
                </div>
              </div>

              <p className="text-white pt-6 px-8">@RaiseProduction</p>
            </div>

          </div>

        </div>

        <div className="mt-80">
          <Footer />
        </div>
       
      </div>
    </>

  );

}

export default Home;