import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import { useParams } from 'react-router-dom'
function VideoPlayerPage() {
    // const {name}=useParams();
  return (
    <div>
        
        <VideoPlayer/>
        {/* <h1 className='text-white'>hello {name} anil</h1> */}
    </div>
  )
}

export default VideoPlayerPage
