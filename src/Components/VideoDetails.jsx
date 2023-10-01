// import React from 'react'

const VideoDetails = ({email, setEmail, handleSendEmail, mediaBlobUrl}) => {
  return (
    <div className='grid grid-cols-2 gap-20 lg:px-[100px] md:px-[50px] px-[30px] py-16 mx-auto'>
        <section className='border-l-5 border-gray-200'>
            <h2 className='text-4xl font-sora font-bold'>Your video is ready!</h2>
            <span>
                <p className='font-sora text-[#727272] mt-10'>Name</p>
                <span className='text-[#413C6D] text-2xl font-sora font-bold flex items-center gap-5 mt-[5px]'>
                    Untitled_Video_20232509 
                    <img src="Videoimg/edit.png" alt="edit" />
                </span>
            </span>
            <div className='relative mt-14'>
                <input 
                type="email" 
                placeholder='enter email of receiver' 
                className='input px-6' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <button 
                className='bg-[#605C84] text-white rounded-md py-[5px] px-[10px] absolute top-[50%] translate-y-[-50%] right-5'
                onClick={handleSendEmail}
                >
                    Send
                </button>
            </div>
            <div className='relative mt-14'>
                <p className='text-[#141414] font-sora text-xl font-bold'>Video Url</p>
                <input type="text" value='https://www.helpmeout/Untitled_Video_20232509' className='input px-3 bg-[#FAFAFA] border-[#929292] border-[1px]' />
                <img src="images/copy.png" alt="copy" className='w-20 absolute right-5 top-[47%] bg-[#FAFAFA] ' />
            </div>
            <div className='text-[#08051E] mt-14'>
                <p className='font-bold font-sora'>Share your video</p>
                <div className='flex justify-start items-center flex-wrap gap-3 mt-2'>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="Videoimg/fb.png" alt="facebook" />
                        Facebook</button>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="Videoimg/whatsapp.png" alt="whatsapp" />
                        Whatsapp</button>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="Videoimg/telegram.png" alt="telegram" />
                        Telegram</button>
                </div>
            </div>
        </section>
        <section className='border-l-2 border-gray-200 pl-8'>
            <video src={mediaBlobUrl} controls autoPlay loop className="w-full" />
            <img src="Videoimg/transcript.png" alt="video" className='w-full mt-20' />
        </section>
    </div>
  )
}

export default VideoDetails