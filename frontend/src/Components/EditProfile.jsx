// eslint-disable-next-line react/prop-types
const EditProfile = ({title, content, margin_left, button_hidden, modal_behavior}) => {
  return (
    <>
      <div className="mt-6">
        <div className="flex font-poppins text-lg text-white ">
          <p>{title}</p>

          <p className={`${margin_left} mr-6`}>{content}</p>

          <a href="#" onClick={modal_behavior} className={`text-[#ECB365] ${button_hidden}`}>Ubah</a>

        </div>
        


      </div>
    </>

  );
}

export default EditProfile;