import VideoDetails from './VideoDetails';
import { Link } from 'react-router-dom';

const VideoReadyMain = ({email, setEmail, handleSendEmail, mediaBlobUrl}) => {
  return (
    <>
    <VideoDetails email={email} setEmail={setEmail} handleSendEmail={handleSendEmail} mediaBlobUrl={mediaBlobUrl} />
    <div className='text-center bg-[#E7E7ED] py-10'>
        <p className='text-[#141414] w-[635px] mx-auto font-sora text-xl font-bold'>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
        <button className='bg-[#120B48] text-white font-work py-4 px-8 cursor-pointer rounded-xl mt-10'>Save video</button>
        <p className='text-xl font-bold font-work text-[#7E7E7E] mt-10'>
            Don’t have an account? 
            <Link to='/signup' className='text-[#120B48] text-xl font-bold underline font-sora ml-1'>Create account</Link>
        </p>
    </div>
    </>
  )
}

export default VideoReadyMain