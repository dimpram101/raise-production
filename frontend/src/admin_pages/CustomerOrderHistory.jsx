import AdminFilter from "../Components/AdminFilter_Dropdown"
import Orderancustomer from "../Components/orderan";
const CustomerOrderHistory = () => {
    return(
        <>
            <div className="bg-[#073054] relative w-auto h-full flex py-[49px] justify-center">
                <div className="flex flex-col items-center gap-[32px] py-[48px] bg-[#04293A] w-[1054px] h-[800px] rounded-[8px]">
                    <div className=" flex flex-row justify-between gap-8 w-[980px] h-[36px]">
                        <p className="font-poppins font-normal text-[24px] text-teal-50">Riwayat Pemesanan Pelanggan</p>
                        <div className="flex flex-row justify-center items-center gap-[12px]"> 
                            <p className="font-poppins font-normal text-[24px] text-[#ECB365]">Filter</p>
                            <AdminFilter />
                        </div>
                    </div>
                    <div>
                        <Orderancustomer />
                    </div>
                </div>
            </div>
        </>
    );

}

export default CustomerOrderHistory;