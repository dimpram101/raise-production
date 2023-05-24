import { useState } from "react";
// eslint-disable-next-line react/prop-types
const EditProfileModal = ({title,subTitle, state, closeModal, hiddingInput }) => {
  const [changeName, setChangeName] = useState()
  const [changeNoTelp, setChangeNoTelp] = useState()
  const [changePass, setChangePass] = useState()

  return (
    <>
      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={` ${state} fixed visible bg-black/40 flex items-center flex-row  top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="mx-auto">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg    text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                <form className="space-y-6" action="#">
                  <div className={hiddingInput}>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{subTitle}</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-[#ECB365] focus:ring-[#ECB365] focus:border-[#ECB365] text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={changeName}  required />
                  </div>

                  <div className={hiddingInput}>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{subTitle}</label>
                    <input type="text" name="telp" id="telp" className="bg-gray-50 border border-[#ECB365] focus:ring-[#ECB365] focus:border-[#ECB365] text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={changeNoTelp} required />
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{subTitle}</label>
                    <input type="password" name="password" id="password" className="bg-gray-50 border border-[#ECB365] focus:ring-[#ECB365] focus:border-[#ECB365] text-gray-900 text-sm rounded-lg block w-full p-2.5" value={changePass} required/>
                  </div>
              
                  <div className="pt-6 flex flex-col items-center justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-white bg-[#ECB365] hover:bg-[#e19f42] h-[48px] w-96 rounded"
                    >
                      Simpan 
                    </button>
                  </div>                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>

  );
}

export default EditProfileModal;