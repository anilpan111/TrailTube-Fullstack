import axios from "axios";
const backendAPI = import.meta.env.VITE_BACKEND_API

export class VideoUploadAPI{
    async upload(videoData){
        try {
            const formData = new FormData();
            formData.append('title',videoData.videoTitle)
            formData.append('description',videoData.description)

            if(videoData.thumbnail[0]){
                formData.append('thumbnail',videoData.thumbnail[0])
            }
            if(videoData.videoFile[0]){
                formData.append('videoFile',videoData.videoFile[0])
            }

            const response = await axios.post(`${backendAPI}/api/v1/video/uploadVideo`,formData,
                {
                    withCredentials: true
                }
            )
            return response;
        } catch (error) {
            // console.error("ERR:",error)
            throw error;
        }
    }
}


const uploadVideoAPI = new VideoUploadAPI()

export default uploadVideoAPI