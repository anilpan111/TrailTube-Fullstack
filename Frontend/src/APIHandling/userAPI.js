import axios from "axios";
const backendAPI = import.meta.env.VITE_BACKEND_API


export class UserAPI{
    async signUp(userData){
        try {
            // extracting email and password for login
            const credentials = {
                email: userData.email,
                password: userData.password
            };

            const formData =new FormData();
            formData.append('fullName',userData.fullName)
            formData.append('userName',userData.userName)
            formData.append('email',userData.email)
            formData.append('password',userData.password)
            if(userData.avatar[0]){
              formData.append('avatar',userData.avatar[0])
            }
            if(userData.coverImage[0]){
              formData.append('coverImage',userData.coverImage[0])
            }
      
            const response= await axios.post(`${backendAPI}/api/v1/user/register`,formData,
              {
                withCredentials: true
              }
            );
            // console.log("Response for register",response.data)
            if(response){
               
               return await  this.login(credentials)
            }
          } catch (error) {
            // console.log("Error:",error)
            throw error
          }
    }

    async login(userData){
        try {
            const response = await axios.post(
              `${backendAPI}/api/v1/user/login`,
              {
                email: userData.email,
                password: userData.password
              },
              {
                withCredentials: true
              }
            )
            
            return response;
      
          } catch (error) {
            // console.log("Error in api class")
            // console.log("ERROR anil: ",error)
            throw error
          }
    }

    async getCurrentUser(){
        try {

          const response= await axios.get(`${backendAPI}/api/v1/user/getCurrentUser`,
            {
              withCredentials: true
            }
          ) 
          return response;

        } catch (error) {
          console.error("ERR:",error)
          throw error
        }
    }

    async getChannelProfile(channelUserName){
      try {
        return await axios.get(`${backendAPI}/api/v1/user/c/${channelUserName}`,
          {
            withCredentials: true
          }
        )
      } catch (error) {
        throw error
      }
    }
}

const userAPI = new UserAPI();

export default userAPI