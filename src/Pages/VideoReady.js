import Header from '../Components/Header'
import VideoReadyMain from '../Components/VideoReadyMain'
import Footer from '../Components/Footer'
import Modal from '../Components/Modal'
import { useState } from 'react'

const VideoReady = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSendEmail = (e)=>{
    if(email) {
      setModal(true);
    }
  }

  return (
    <div className='mt-3 relative'>
        <Header />
        <VideoReadyMain email={email} setEmail={setEmail} handleSendEmail={handleSendEmail} />
        <Footer />
        <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default VideoReady