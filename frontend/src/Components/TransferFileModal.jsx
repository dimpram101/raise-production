// eslint-disable-next-line react/prop-types
const TransderFileModal = ({behavior, hidding}) => {
  return (
    <>
      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={` ${behavior} fixed visible bg-black/40 flex items-center flex-row  top-0 left-0 right-0 z-50 h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  `}>
        <div className="relative w-full max-w-2xl mx-auto max-h-full">
         
          <div className="relative bg-white h-[700px] rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-start justify-between p-4  rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
               
              </h3>
              <button type="button" onClick={hidding} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>


            <div className="flex flex-col mt-6 items-center">
              <img src="./assets/dummy/bukti-transfer.jpg" alt="" />
            </div>
         
          
         
        
          </div>
        </div>
      </div>

    </>
  );
}

export default TransderFileModal;