
const VideoRepoMain = () => {
  return (
    <div>
        <nav className='flex justify-between items-center px-[100px] py-8'>
            <img src="images/logoH.png" alt="logo" />
            <div className='flex justify-center items-center gap-2 cursor-pointer'>
                <img src="images/profile-img.png" alt="profile-avatar" />
                <p className='font-work text-[#141414]'>John Mark</p>
                <img src="images/arrow-down.png" alt="arrow" />
            </div>
        </nav>
        <section className='flex justify-between items-center px-[100px] mt-5 pb-8 border-b-[1px] border-[#E7E7ED]'>
            <div>
                <h2 className='text-[#141414] text-3xl font-bold font-sora'>Hello, John Mark</h2>
                <p className='text-[#141414BB] font-work '>Here are your recorded videos</p>
            </div>
            <div className='w-[30%] relative'>
                <input 
                type="search" 
                placeholder='Search for a particular video'
                className='w-full bg-[#E7E7ED] rounded-lg py-6 pl-14 border-[1px] border-[#B6B3C6] outline-none text-[#B6B3C6]'
                 />
                <img src="images/search.png" alt="search-icon" className='absolute top-[50%] translate-y-[-50%] left-5' />
            </div>
        </section>
    </div>
  )
}

export default VideoRepoMain