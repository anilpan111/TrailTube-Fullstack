import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const userData = useSelector((state)=>state.auth.userData);
  const loginStatus = useSelector((state)=>state.auth.status);
  const navigate = useNavigate();
  // console.log("UserData",userData)
  return (
    <div className="text-white md:ml-[15%]  max-w-[100%]  z-0 flex flex-col  mx-auto  bg-[#1A1A1C]  h-auto mt-24">
      <div className="flex flex-col items-center w-full bg-gray-900 text-white">
        <div
          className="relative w-full h-48 md:h-64 bg-cover bg-colorLevel4"
          style={{ backgroundImage: `url('${userData?.coverImage}')` }}
        >
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2">
            <img
              src={userData?.avatar || '/defaultDP.jpg'}
              alt="Profile"
              className="w-32 h-32 md:w-52 md:h-52 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="mt-16 w-full md:max-w-4xl p-4 text-center">
          <h1 className="text-2xl font-bold">{userData?.fullName}</h1>
          <div className="flex justify-center mt-2 space-x-4">
            <p>1.2M Subscribers</p>
            <p>50 Channels Subscribed</p>
          </div>
          {/* <button className="mt-4 px-4 py-2 rounded bg-blue-600">
            Subscribe
          </button> */}
        </div>
      </div>
      {!loginStatus && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-0">
          <div className=" bg-opacity-60 p-8 rounded-xl shadow-2xl text-center">
            <h1 className="text-5xl font-bold text-colorLevel3">Please login <span className="text-colorLevel4"></span> !</h1>
            
            <button
              className="mt-8 px-8 py-3 bg-colorLevel3 text-white rounded-lg"
              onClick={() => {
                navigate("/login");

              }}
            >
              login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
