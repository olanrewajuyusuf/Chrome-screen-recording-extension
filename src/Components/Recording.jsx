
const Recording = ({stopRecording, pauseRecording, recording, cancelRecording, formatTime}) => {
  return (
    <>
    <div className='record'>
        <div className='flex items-center border-r-[1px] border-white h-[50px] gap-5 pr-8'>
            <p className='font-inter'>{formatTime}</p>
            <div className='w-3 h-3 bg-[red] rounded-full'></div>
        </div>
        <div className='flex items-start gap-5 font-work'>
            <span className='grid place-items-center' onClick={pauseRecording} disabled={!recording}>
                <img src="/vid/pause1.png" alt="pause" />
                Pause
            </span>
            <span className='grid place-items-center' onClick={stopRecording} disabled={!recording}>
                <img src="/vid/stop1.png" alt="stop" />
                Stop
            </span>
            <span className='grid place-items-center'>
                <img src="/vid/vid1.png" alt="camera" />
                <span className='mt-[-10px]'>Camera</span>
            </span>
            <span className='grid place-items-center'>
                <img src="/vid/audio1.png" alt="microphone" />
                <span className='mt-[-10px]'>Mic</span>
            </span>
            <img src="/vid/delete.png" alt="delete" onClick={cancelRecording} disabled={!recording} />
        </div>
    </div>
    </>
  )
}

export default Recording