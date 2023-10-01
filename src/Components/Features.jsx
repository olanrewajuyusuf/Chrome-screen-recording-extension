import React from 'react'

const Features = () => {
  return (
    <div className='lg:px-[100px] md:px-[50px] px-[30px] py-16 mx-auto' id='features'>
      <h2 className='text-center text-3xl font-sora font-bold'>Features</h2>
      <p className='text-center text-[20px] text-[#616163] font-work mt-2'>Key Highlights of Our Extention</p>
      <div className='grid grid-col-1 md:grid-cols-2 justify-center items-center gap-10 mt-14'>
        <section>
          <div className='flex flex-col md:flex-row justify-center items-start gap-5 mr-4'>
            <img src="images/icon3.png" alt="icon" />
            <div>
              <h3 className='font-inter font-bold text-2xl text-[#1B233D]'>Simple Screen Recording</h3>
              <p className='text-[#616163] text-[20px] font-work mt-2'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
          </div>
          <div className='mt-8 flex flex-col md:flex-row justify-center items-start gap-5 mr-4'>
            <img src="images/icon1.png" alt="icon" />
            <div>
              <h3 className='font-inter font-bold text-2xl text-[#1B233D]'>Easy-to-Share URL</h3>
              <p className='text-[#616163] text-[20px] font-work mt-2'>Share your recpordings instantly with a single link. No attachments, no downloads.</p>
            </div>
          </div>
          <div className='mt-8 flex flex-col md:flex-row justify-center items-start gap-5 mr-4'>
            <img src="images/icon2.png" alt="icon" />
            <div>
              <h3 className='font-inter font-bold text-2xl text-[#1B233D]'>Revisit Recording</h3>
              <p className='text-[#616163] text-[20px] font-work mt-2'>Access and reviw your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
          </div>
        </section>
        <section>
          <img src="images/video-repo.png" alt="Video Repository" className='w-full' />
        </section>
      </div>
    </div>
  )
}

export default Features