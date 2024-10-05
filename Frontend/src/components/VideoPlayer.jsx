import React, { useEffect, useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router-dom";
import videoAPI from "../APIHandling/videosAPI";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useSelector } from "react-redux";

// import subscriptionApi from "../APIHandling/subscriptionAPI";
import { useNavigate } from "react-router-dom";

function VideoPlayer() {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [comment,setComment] =useState('')
  const [like,setLike]=useState(false)
  const [dislike,setDislike]=useState(false)

  const userData = useSelector((state)=>state.auth.userData)

  const navigate = useNavigate();
 
  useEffect(() => {
    (async () => {
      try {
        const response = await videoAPI.getOneVideo(videoId);
        if (response) {
          setVideoDetails(response.data.data);
          // console.log("Video response:",response.data.data)
        }
      } catch (error) {}
    })();
  }, [videoId]);

  const handleComment = (event)=>{
    setComment(event.target.value)
  }

  const handleLikes = ()=>{
    setLike(true)
  }

  // console.log("Subscribed data:",subscriptionData)

  return (
    <div className="text-white bg-colorLevel1 h-screen md:ml-[15%]  px-2  z-0 md:flex   mx-auto mt-32">
      <div className="w-full h-[50%] md:w-[70%] md:h-[80%] ">
        <div className="  w-full h-[50%] md:h-[65%] my-auto md:p-4 p-2 bg-colorLevel2 rounded-2xl">
          <video
            src={videoDetails?.videoFile}
            controls
            className="w-full h-full md:h-[100%]  rounded-2xl shadow-xl"
          ></video>
        </div>
        <div className="h-[10rem] md:h-[25%] md:pl-4 px-2 md:pt-4">
          <h1 className="font-bold truncate pl-3">{videoDetails?.title}</h1>
          <div className="md:flex flex-col md:pr-4 mt-2 h-full w-full">
            <div className="flex justify-between items-center drop-shadow-xl shadow-2xl my-auto">
              <div className="flex items-center">
                <img
                  src={videoDetails?.avatar}
                  alt="Profile"
                  className="rounded-[50%] border-2 shadow-lg w-12 h-12 md:w-20 md:h-18"
                />
                <div className="pl-4">
                  <p className="tex-sm font-bold truncate">
                    {videoDetails?.channelName}
                  </p>
                  <p className="text-colorLevel3">@{videoDetails?.channelUserName}</p>
                </div>
              </div>
              <button className="rounded-xl bg-colorLevel5 w-auto h-12 px-10 hover:bg-colorLevel3"
              onClick={()=>{
                // setIsSubscribed(!isSubscribed)
                // handleSubscirbe(videoDetails?.channelUserName)
                navigate(`/profile/${videoDetails?.channelUserName}`)
              }}
              >
                View profile
              </button>
            </div>
            <div className="mt-2 md:mt-4 w-full flex justify-between items-center text-center px-4">
              <div className={!like?"text-colorLevel4 ":"text-colorLevel3 "}>
                <button 
                onClick={()=>{
                  setLike(true)
                  setDislike(false)
                }}
                >
                  <AiFillLike size={30} />
                </button>
                <p>{!like?'Like':'Liked'}</p>
              </div>
              <div className={!dislike?"text-colorLevel4 ":"text-colorLevel3 "}>
                <button
                onClick={()=>{
                  setDislike(true)
                  setLike(false)
                }}
                >
                  <AiFillDislike size={30} />
                </button>
                <p>{!dislike?'Dislike':'Disliked'}</p>
              </div>
              <div className="hover:text-colorLevel3">
                <button>
                  <FaRegShareFromSquare size={30} />
                </button>
                <p>Share</p>
              </div>
              <div className="hover:text-colorLevel3">
                <button>
                  <IoMdDownload size={30} />
                </button>
                <p>Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  md:w-[30%] h-auto w-full border-t  md:border-t-0 md:border-l px-2">
        <h1 className="w-full h-12 mx-auto shadow-2xl text-2xl font-bold">
          Comments...
        </h1>
        <div className="flex w-full justify-between md:px-2">
          <img
            src={userData?.avatar}
            alt="Profile"
            className="rounded-[50%] border-2 shadow-lg w-12 h-12 md:w-14 md:h-10"
          />
          <input
            type="text"
            placeholder="Add a comment"
            className="w-[18rem] border-b-2 bg-colorLevel1 pl-2"
            value={comment}
            onChange={handleComment}
          />
          <button className="rounded-2xl px-6 bg-[#202024] shadow-xl"
          onClick={()=>{
            setComment('')
          }}
          >
            Add
          </button>
        </div>

        <h1 className="font-myFont text-3xl text-colorLevel4 text-center mt-20">No Comments yet</h1>

        {/* <ul className="mt-12">
          <li className="mb-10 shadow-2xl">
            <div className="flex">
              <img
                src="../../public/avatar.jpg"
                alt="Profile"
                className="rounded-[50%] border-2 shadow-lg w-18 h-16 md:w-14 md:h-10"
              />
              <div className="pl-2 max-h-20">
                <p className="font-bold text-sm">@anilPan</p>
                <p className=" text-sm font-sans">
                  Mehta sab ne galat kiya is mehman ki ache se khate dari karni
                  chahiye thi or fir police ke hawale kar dena chahiye tha
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10 shadow-2xl">
            <div className="flex">
              <img
                src="../../public/avatar.jpg"
                alt="Profile"
                className="rounded-[50%] border-2 shadow-lg w-12 h-12 md:w-14 md:h-10"
              />
              <div className="pl-2 max-h-20">
                <p className="font-bold text-sm">@anilPan</p>
                <p className=" text-sm font-sans">
                  Mehta sab ne galat kiya is mehman ki ache se khate dari karni
                  chahiye thi or fir police ke hawale kar dena chahiye tha
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10 shadow-2xl">
            <div className="flex">
              <img
                src="../../public/avatar.jpg"
                alt="Profile"
                className="rounded-[50%] border-2 shadow-lg w-18 h-16 md:w-14 md:h-10"
              />
              <div className="pl-2 max-h-20">
                <p className="font-bold text-sm">@anilPan</p>
                <p className=" text-sm font-sans">
                  Mehta sab ne galat kiya is mehman ki ache se khate dari karni
                  chahiye thi or fir police ke hawale kar dena chahiye tha
                </p>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default VideoPlayer;
