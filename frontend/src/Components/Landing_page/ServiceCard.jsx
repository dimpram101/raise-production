const ServiceCard = () => {
  return(
    <>
      <div className="bg-[#04293A] text-[#04293A] w-[847px] h-[376px] ">
        <div className="grid grid-cols-3 p-[24px] gap-[32px]">
          <button type="button" className="bg-[#ECB365] w-[245px] h-[328px]">
            <div className="hover:scale-125  duration-300">
              <div className="py-[99px]">
                <div className="px-[80px]">
                  <img className="hover:" src="./assets/icon/ICON VIDEO.png" alt="" />
                  
                </div>
                <div className="pt-3   px-[63px]">
                  <h1 className="mt-2 ">Produksi Video</h1>
                </div>
              </div>

            </div>
          </button>

          <button className = "bg-[#ECB365] w-[245px] h-[328px]">
            <div className="hover:scale-125  duration-300">
              <div className="py-[99px]">
                <div className="px-[80px]">
                  <img className=" " src="./assets/icon/ICON POSTER.png" alt="" />
                </div>
                <div className="pt-3 px-[62px]">
                  <h1 className="mt-2 ">Produksi Poster</h1>
                </div>
              </div>
            </div>
          </button>

          <button className="bg-[#ECB365] w-[245px] h-[328px]">
            <div className="hover:scale-125  duration-300">
              <div className="py-[99px]">
                <div className="px-[80px]">
                  <img className=" " src="./assets/icon/ICON LOGO.png" alt="" />
                </div>
                <div className="pt-3   px-[63px]">
                  <h1 className="mt-2 ">Produksi Logo</h1>
                </div>
              </div>
            </div>
          </button>
        </div>


        
      </div>
    </>

  );

}


export default ServiceCard;