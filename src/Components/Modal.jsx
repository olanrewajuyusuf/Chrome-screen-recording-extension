import { Link } from 'react-router-dom';

const Modal = ({modal, setModal}) => {

  const handleClick = () => {
    setModal(false);
  }
  return (
    <>
    {modal && (
    <div className='absolute top-[-12px] left-0 w-full h-full bg-[#000000AA] flex justify-center items-center'>
        <div className='bg-[#F2F4F7] rounded-3xl pt-10 pb-32 text-center'>
            <img src="Videoimg/close-circle.png" alt="close" className=' float-right mr-10' onClick={handleClick} />
            <div className='w-[60%] mx-auto'>
              <img src="Videoimg/kite.png" alt="kite" className='w-[100%] mx-auto'/>
              <p className='text-xl text=[#08051E] font-work mt-5'>Your video link has been sent to <span className='font-semibold text-[#120B48]'>johnmark@gmail.com</span></p>
              <p className='text=[#141414] font-work mt-14'>Would you need to view this video later? Save to your account now!</p>
              <button className='bg-[#120B48] text-white font-work py-4 px-8 cursor-pointer rounded-xl mt-5'>Save video</button>
              <p className='text-[#7E7E7E] font-work mt-8'>
              Don’t have an account? 
              <Link to='/signup' className='text-[#120B48] font-semibold underline font-sora ml-1'>Create account</Link>
              </p>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Modal