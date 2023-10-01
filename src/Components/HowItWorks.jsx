import React from 'react'

const HowItWorks = () => {
  return (
    <div id='howitworks' className='my-28'>
      <h2 className='text-center text-4xl font-sora font-bold'>How it works</h2>
      <div className='lg:px-[100px] md:px-[50px] px-[30px] mx-auto grid grid-col-1 md:grid-cols-3 lg:gap-20 gap-5 justify-center items-center mt-16 text-center'>
        <section className='flex flex-col justify-center items-center gap-5'>
          <h3 className='number'>1</h3>
          <h3 className='font-inter font-bold text-2xl text-[#1B233D] mt-3'>Record Screen</h3>
          <p className='font-work text-[20px] text-[#616163]'>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
          <img src="images/rec-pic.png" alt="RecordingPicture" className='w-full' />
        </section>
        <section className='flex flex-col justify-center items-center gap-5'>
          <h3 className='number'>2</h3>
          <h3 className='font-inter font-bold text-2xl text-[#1B233D] mt-3'>Share Your Recording</h3>
          <p className='font-work text-[20px] text-[#616163]'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          <img src="images/rec-pic.png" alt="RecordingPicture" className='w-full' />
        </section>
        <section className='flex flex-col justify-center items-center gap-5'>
          <h3 className='number'>3</h3>
          <h3 className='font-inter font-bold text-2xl text-[#1B233D] mt-3'>Learn Effortlessly</h3>
          <p className='font-work text-[20px] text-[#616163]'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          <img src="images/rec-pic.png" alt="RecordingPicture" className='w-full' />
        </section>
      </div>
    </div>
  )
}

export default HowItWorks