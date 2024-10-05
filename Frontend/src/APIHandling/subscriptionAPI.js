import axios from "axios";
const backendAPI = import.meta.env.VITE_BACKEND_API
export class SubscriptionAPI{
    async subscribe(channelUserName){
        try {
            // console.log("channel username in api class:",channelUserName)
            const response = await axios.post(`${backendAPI}/api/v1/subscribe/sub/${channelUserName}`,
                {
                    withCredentials: true
                }
            )
            return response;
        } catch (error) {
            throw error
        }
    }

    async isSubscribed(userName){
        try {
            const response = await axios.get(`${backendAPI}/api/v1/subscribe/profile/${userName}`,
                {
                    withCredentials: true
                }
            )
            if(response){
                return response
            }
        } catch (error) {
            throw error
        }
    }
}

const subscriptionApi = new SubscriptionAPI()

export default subscriptionApi