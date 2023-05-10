/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const Calendar = (props) => {
  return (
    <>    
      <DatePicker selected={props.date} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded  block w-[410px] p-2.5" onChange={props.onChange} value={props.date} />
    </>

  );

}

export default Calendar;