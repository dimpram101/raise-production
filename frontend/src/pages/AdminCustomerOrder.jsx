const AdminCustomerOrder = () => {

    return(
        <>
            <div className="bg-[#073054] relative w-auto h-full flex py-[49px] justify-center">
                <div className="flex flex-col items-center gap-[32px] py-[48px] bg-[#04293A] w-[1054px] h-[800px] rounded-[8px]">
                    <div className=" flex flex-row justify-between gap-8 w-[980px] h-[36px]">
                        <p className="font-poppins font-normal text-[24px] text-teal-50">Pesanan Pelanggan</p>
                        <div className="flex flex-row justify-center items-center gap-[12px]"> 
                            <p className="font-poppins font-normal text-[24px] text-[#ECB365]">Filter</p>
                            <img src="./assets/icon/Filter ICON.png" alt="" />
                        </div>
                    </div>

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
                </div>
            </div>
        </>
    );

}

export default AdminCustomerOrder;