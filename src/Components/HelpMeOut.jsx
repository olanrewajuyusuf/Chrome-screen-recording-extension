// import React from 'react'

const HelpMeOut = ({startRecording, recording}) => {
  return (
    <div className="w-[300px] h-[400px] mx-auto my-20 p-3 shadow-sm shadow-black rounded-xl">
        <span className='flex justify-between items-center'>
            <img src="/images/logoH.png" alt="logo" />
            <span className='flex items-center gap-3'>
                <img src="/images/setting-2.png" alt="setting" />
                <img src="/vid/close.png" alt="close" />
            </span>
        </span>
        <p className='font-work text-[#413C6D] mt-3'>This extension helps you record and share help videos with ease.</p>
        <span className='flex justify-evenly items-center font-bold mt-5'>
            <div className='grid place-items-center'>
                <img src="/vid/monitor.png" alt="monitor" />
                <small className='text-[#928FAB]'>Full screen</small>
            </div>
            <div className='grid place-items-center'>
                <img src="/vid/copy.png" alt="screen" />
                <small className='text-[#120B48]'>Current Tab</small>
            </div>
        </span>
        <div className="mt-5 border-[#120B48] border-2 font-inter text-sm rounded-xl px-[10px] flex justify-between items-center py-[10px]">
            <span className='flex items-center gap-3 text-[#120B48] font-work font-semibold'>
                <img src="/vid/video-camera.png" alt="camera" />
                Camera
            </span>
            <div className="bg-[#120B48] w-12 rounded-xl py-[2px] pr-[2px]">
                <div className="w-5 h-5 rounded-full bg-white float-right"></div>
            </div>
        </div>
        <div className="mt-5 border-[#120B48] border-2 font-inter text-sm rounded-xl px-[10px] flex justify-between items-center py-[10px]">
            <span className='flex items-center gap-3 text-[#120B48] font-work font-semibold'>
                <img src="/vid/microphone.png" alt="microphone" />
                Audio
            </span>
            <div className="bg-[#120B48] w-12 rounded-xl py-[2px] pr-[2px]">
                <div className="w-5 h-5 rounded-full bg-white float-right"></div>
            </div>
        </div>
        <button 
        className="bg-[#120B48] text-white py-2 w-full mt-5 font-work rounded-xl"
        onClick={startRecording}
        disabled={recording}
        >
            Start Recording
        </button>
    </div>
  )
}

export default HelpMeOut