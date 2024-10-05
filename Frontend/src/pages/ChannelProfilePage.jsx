import React, { useEffect, useState } from 'react'

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import subscriptionApi from '../APIHandling/subscriptionAPI';
import userAPI from '../APIHandling/userAPI';

function ChannelProfilePage() {
  const userData = useSelector((state)=>state.auth.userData);
  const loginStatus = useSelector((state)=>state.auth.status);
  const navigate = useNavigate();
  const {userName}=useParams();
  const [isSubscribed,setIsSubscribed]= useState(false);
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  const [channelDetails,setChannelDeatails]=useState('');

  const handleSubscribe = async ()=>{
    if(!loginStatus){
      setIsLoggedIn(true)
    }
    try {
      const subscribe = await subscriptionApi.subscribe(userName)
      if(subscribe){
        setIsSubscribed(true)
        console.log("Subscribe data:",subscribe)
      }
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(()=>{
    (
        async ()=>{
            if(loginStatus){
              try {
                const subscriptionStatus = await subscriptionApi.isSubscribed(userName)
                if(subscriptionStatus){
                  setIsSubscribed(subscriptionStatus.data.data)
                    // console.log("Is subcribed:",subscriptionStatus.data.data)
                }

                
            } catch (error) {
                console.error(error)
            }
            }
        }
    )()
  },[userName])

  useEffect(()=>{
    (
      async ()=>{
        try {
          const channelProfile = await userAPI.getChannelProfile(userName);
                if(channelProfile){
                  setChannelDeatails(channelProfile.data.data)
                  // console.log("Channel data:",channelProfile.data.data)
                }
        } catch (error) {
          console.log("ERR",error)
        }
      }
    )()
  },[userName])
  // console.log("UserData",userData)
  return (
    <div className="text-white md:ml-[15%]  max-w-[100%]  z-0 flex flex-col  mx-auto  bg-[#1A1A1C]  h-auto mt-24">
      <div className="flex flex-col items-center w-full bg-gray-900 text-white">
        <div
          className="relative w-full h-48 md:h-64 bg-cover bg-colorLevel4"
          style={{ backgroundImage: `url('${channelDetails?.coverImage}')` }}
        >
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2">
            <img
              src={channelDetails?.avatar || '/defaultDP.jpg'}
              alt="Profile"
              className="w-32 h-32 md:w-52 md:h-52 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="mt-16 w-full md:max-w-4xl p-4 text-center">
          <h1 className="text-2xl font-bold">{channelDetails?.fullName}</h1>
          <div className="flex justify-center mt-2 space-x-4">
            <p>{channelDetails?.subscriberCount} Subscribers</p>
            <p>{channelDetails?.channelSubscribedCount} Channels Subscribed</p>
          </div>
          <button className="mt-4 px-4 py-2 rounded bg-blue-600"
          onClick={handleSubscribe}
          >
            { isSubscribed ? 'Subscribed':'Subscribe'}
          </button>
        </div>
      </div>
      {isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-0">
          <div className=" bg-opacity-60 p-8 rounded-xl shadow-2xl text-center bg-colorLevel1">
            <h1 className="text-5xl font-bold text-colorLevel3">Login to subscribe <span className="text-colorLevel4"></span> !</h1>
            
            <button
              className="mt-8 px-8 py-3 bg-colorLevel3 text-white rounded-lg"
              onClick={() => {
                setIsLoggedIn(false)

              }}
            >
              ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChannelProfilePage
