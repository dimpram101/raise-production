/* eslint-disable react/prop-types */
const GaleryCard = ({src, title, toContent}) => {
  return (
    <>
      <div className="bg-[#04293A] h-[450px] w-[458px] rounded shadow-lg">
        <div className="p-[24px]">
          <img className="w-[410px] border-4  border-[#ECB365]" src={src} alt="" />

          <div className="flex flex-col items-center font-poppins pt-6">
            <h1 className=" text-white text-xl ">{title}</h1>

            <div className="pt-6">
              <button
                type="button"
                src={toContent}
                className="text-white bg-[#ECB365] hover:bg-[#e19f42] focus:ring-4 focus:outline-none focus:ring-[#ECB365] font-medium rounded-md text-[20px] px-2 py-2 text-center font-poppins mr-3 md:mr-0 "
              >
                View video
              </button>
            </div>
          </div>
        </div>


      </div>

    </>

  );
}

export default GaleryCard;