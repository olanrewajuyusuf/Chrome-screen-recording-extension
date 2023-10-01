import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 lg:px-[100px] md:px-[50px] px-[30px]  mx-auto py-28 border-t-2 border-gray-200'>
        <section className='md:text-left text-center'>
            <h1 className='font-sora text-5xl font-bold'>Show Them <br /> Don't Just Tell</h1>
            <p className='font-inter text-[20px] mt-5 md:mr-16'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <button className='bg-[#120B48] font-sora text-white rounded-md p-5 mt-10 mx-auto md:mx-0 flex items-center gap-3'>
              Install HelpMeOut
              <img src="images/arrow-right.png" alt="arrow" />
            </button>
        </section>
        <section className='relative grid grid-cols-2 justify-center items-center gap-5 mt-[100px] md:mt-0'>
            <img src="images/frame2.png" alt="frame" className='w-full' />
            <img src="images/frame3.png" alt="frame" className='w-full' />
            <img src="images/frame1.png" alt="frame" className='long-img' />
            <img src="images/grid1.png" alt="grid" className='w-[50%] absolute top-[-13%] right-[-7%] -z-10' />
            <img src="images/grid2.png" alt="grid" className='w-[50%] absolute bottom-[-18%] left-[-6%] -z-10' />
        </section>
    </div>
  )
}

export default About