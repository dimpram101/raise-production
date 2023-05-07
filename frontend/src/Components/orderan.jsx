const Orderancustomer = () => {
    return(
        <>
            <div className="flex flex-col items-start gap-[24px] w-auto h-auto">
                        <div className="border-2 border-[#ECB365] flex flex-col items-start rounded-[8px] px-[24px] py-[12px] w-[982px] h-[238px]">
                            <div className="flex flex-row justify-between items-start gap-[12] w-[934px] h-[214px]">
                                <div className="flex flex-col items-start gap-[18px] w-[414px] h-[214px]">
                                    <div className="flex flex-row gap-[8px]">
                                        <p className="font-poppins font-normal text-[24px] text-[#ECB365]">Pesanan No :</p>
                                        <p className="font-poppins font-normal text-[24px] text-[#ECB365]"></p>
                                    </div>
                                    <div className="flex flex-row gap-[8px]">
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ECB365]">Kategori :</p>
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ECB365]"></p>
                                    </div> 
                                    <div className="flex flex-row gap-[8px]">
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ffffff]">Tanggal Pemesanan :</p>
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ECB365]"></p>
                                    </div>
                                    <div className="flex flex-row gap-[8px]">
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ffffff]">Status :</p>
                                        <p className="flex font-poppins font-normal text-[24px] text-[#ECB365]"></p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center w-[188px] h-[214px]">       
                                    <div className="bg-[#064663] p-[8px] rounded-[4px]">
                                        <p className="font-poppins font-normal text-[24px] text-[#ffffff]">Selengkapnya</p>
                                    </div>         
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default Orderancustomer;