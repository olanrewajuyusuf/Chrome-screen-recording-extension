import { useState } from "react"
import { Link } from "react-router-dom";

const VideoRepoSingle = () => {
    const [email, setEmail] = useState('');

  return (
    <div className="px-[100px]">
        <nav className='flex justify-between items-center py-8'>
            <img src="/images/logoH.png" alt="logo" />
            <div className='flex justify-center items-center gap-2 cursor-pointer'>
                <img src="/images/profile-img.png" alt="profile-avatar" />
                <p className='font-work text-[#141414]'>John Mark</p>
                <img src="/images/arrow-down.png" alt="arrow" />
            </div>
        </nav>
        <div>
            <p className="font-work text-[#141414BB]"><Link to='/home'>Home</Link> / Recent videos / <span className="text-[#413C6D] font-semibold">How To Create A Facebook Ad Listing</span></p>
            <p className="font-sora font-bold text-xl text-[#141414] flex items-center gap-5 my-5">
                How To Create A Facebook Ad Listing
                <img src="/Videoimg/edit.png" alt="edit" />
            </p>
        </div>
        <img src="/images/card.png" alt="card" className="w-full" />
        <div className="grid grid-cols-2 gap-20">
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
                >
                    Send
                </button>
            </div>
            <div className='relative mt-14'>
                <input type="text" value='https://www.helpmeout/Untitled_Video_20232509' className='input px-3 bg-[#FAFAFA] border-[#929292] border-[1px]' />
                <img src="/images/copy2.png" alt="copy" className='w-20 absolute right-5 top-[50%] translate-y-[-50%] bg-[#FAFAFA] ' />
            </div>
        </div>
        <div className='text-[#08051E] mt-14'>
                <p className='font-bold font-sora'>Share your video</p>
                <div className='flex justify-start items-center flex-wrap gap-3 mt-2'>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="/Videoimg/fb.png" alt="facebook" />
                        Facebook</button>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="/Videoimg/whatsapp.png" alt="whatsapp" />
                        Whatsapp</button>
                    <button className='flex items-center gap-2 rounded-md font-inter border-[1px] border-[#0A0628] py-3 px-4'>
                        <img src="/Videoimg/telegram.png" alt="telegram" />
                        Telegram</button>
                </div>
            </div>
        <img src="/images/titlebar.png" alt="video" className='mt-20' />
        <img src="/images/content.png" alt="video" className='w-full mt-10' />
    </div>
  )
}

export default VideoRepoSingle