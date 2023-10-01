import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import HelpMeOut from '../Components/HelpMeOut'
import Recording from '../Components/Recording'
import VideoReady from "./VideoReady";
import LoginSignup from "./LoginSignup";
import LandingPage from "./LandingPage";

function Extention() {
  const [recording, setRecording] = useState(false);
  const [screenCaptureStream, setScreenCaptureStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  const startRecording = async () => {
    try {
      const streamId = await requestScreenCapturePermission();
      if (!streamId) return;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } },
      });

      const newMediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      newMediaRecorder.onstop = () => {
        // Handle recording stopped
        const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });

        fetch('https://kahuna-chrome-extension.onrender.com/api/upload', {
          method: 'POST',
          body: videoBlob,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      newMediaRecorder.start();
      console.log('Recording');

      setRecording(true);
      setScreenCaptureStream(stream);
      setMediaRecorder(newMediaRecorder);
      navigate('/recording');
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.pause();
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'paused') {
      mediaRecorder.resume();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && (mediaRecorder.state === 'recording' || mediaRecorder.state === 'paused')) {
      mediaRecorder.stop();
      setRecording(false);
      navigate('/video');
    }
  };

  const cancelRecording = () => {
    if (mediaRecorder && (mediaRecorder.state === 'recording' || mediaRecorder.state === 'paused')) {
      mediaRecorder.stop();
    }
  
    setRecording(false);
    setRecordedChunks([]);
    setTimer(0);
    navigate('/');
  };
  

  const requestScreenCapturePermission = async () => {
    return new Promise((resolve) => {
      chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], (streamId) => {
        resolve(streamId);
      });
    });
  };

  useEffect(() => {
    let intervalId;
  
    if (recording) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
  
    return () => {
      clearInterval(intervalId);
    };
  }, [recording]);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (mediaRecorder) {
        mediaRecorder.ondataavailable = null;
        mediaRecorder.onstop = null;
      }
    };
  }, [mediaRecorder]);

  const formatTime = () => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const remainingSeconds = timer % 60;
  
    return `${hours}:${minutes}:${remainingSeconds}`;
  }

  return (
       <>
         <Routes>
           <Route path='/' element={<HelpMeOut startRecording={startRecording} recording={recording} />}/>
           <Route path='/recording' element={<Recording stopRecording={stopRecording} pauseRecording={pauseRecording} resumeRecording={resumeRecording} recording={recording} formatTime={formatTime} cancelRecording={cancelRecording} />}/>
           <Route path="/video" element={<VideoReady mediaBlobUrl={screenCaptureStream} />} />
           <Route path="/signup" element={<LoginSignup />} />
           <Route path="/home" element={<LandingPage />} />
         </Routes>
     </>
  );
}

export default Extention;