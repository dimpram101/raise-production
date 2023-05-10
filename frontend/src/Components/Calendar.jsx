import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
  const [date, setDate] = useState(null);

 

  return (
    <>

    
      <DatePicker selected={date} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5" onChange={date => setDate(date)} />
      
    </>

  );

}

export default Calendar;