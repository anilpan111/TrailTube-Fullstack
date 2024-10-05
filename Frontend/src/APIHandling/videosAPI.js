import axios from "axios";
const backendAPI = import.meta.env.VITE_BACKEND_API

export class VideoAPI{
    async allVideos(){
        try {
            // console.log("env varable:",backendAPI)
            const videos = await axios.get(`${backendAPI}/api/v1/video`,
                {
                    withCredentials: true
                }
            )
            return videos
        } catch (error) {
            throw error
        }
    }
    async getOneVideo(videoId){
        try {
            const video = await axios.get(`${backendAPI}/api/v1/video/play/${videoId}`,
                {
                    withCredentials: true
                }
            )
            if(video){
                return video
            }
        } catch (error) {
            throw error;
        }
    }
}

const videoAPI = new VideoAPI()
export default videoAPI