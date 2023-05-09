/* eslint-disable react/prop-types */
const Input = ({ label, value, onChange, placeholder, type="text", required }) => {
  return (
    <div className="mb-6">
      <label htmlFor={label} className="block mb-2 text-[24px]  text-[#ECB365] dark:text-white">{label}</label>
      <input type={type} id={label} className="bg-[#04293A] border border-[#ECB365] text-white text-sm rounded focus:ring-[#ECB365] focus:border-[#ECB365] block w-[500px] p-2.5" placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </div>
  );
}
 
export default Input;