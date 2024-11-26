import React, { useEffect, useState } from "react";
import videoAPI from "../APIHandling/videosAPI";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Skeleton } from "@nextui-org/react";

function Videos() {
  const [allVideos, setAllVideos] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loadingBox = Array(6).fill(null);

  // const {video}
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const getAllVideos = await videoAPI.allVideos();
        if (getAllVideos) {
          setAllVideos(getAllVideos.data.data);
          setLoading(false);
          // console.log("All Videos:", getAllVideos.data.data);
        }
      } catch (error) {
        // setErrorMessage(error.data.message);
        setLoading(true);
        console.log(error);
      }
    })();
  }, []);

  // time logic for video upload

  const uploadedTime = (createdTime) => {
    // Parse the given date string
    const givenDate = new Date(createdTime);

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - givenDate;

    // Convert the difference to time units
    const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
    const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(
      (differenceInMilliseconds / (1000 * 60 * 60)) % 24
    );
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const months = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)
    );
    const years = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    );

    // Determine the most appropriate unit to display
    let result;
    if (years > 0) {
      result = `${years} year${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      result = `${months} month${months > 1 ? "s" : ""}`;
    } else if (days > 0) {
      result = `${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      result = `${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      result = `${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      result = `${seconds} second${seconds > 1 ? "s" : ""}`;
    }
    return result;
  };

  return (
    <div className="text-white">
      <div className="h-auto md:ml-[15%]  md:max-w-[80%]  z-0 flex flex-col justify-center  mx-auto ">
        {loading && (
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-32 w-full ">
            {loadingBox.map((_, index) => (
              <li key={index} className="  m-5 max-h-[16rem] h-[16rem] rounded-2xl">
                <Card className="w-[14rem ] space-y-5 p-4 bg-black" radius="lg" classNames="bg-dark">
                <Skeleton className="rounded-lg bg-gray-800 ">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                  <Skeleton className="w-3/5 rounded-lg  bg-gray-800">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200 "></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg  bg-gray-800">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg  bg-gray-800">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </div>
              </Card>
              </li>
            ))}
          </ul>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-32 w-full ">
          {allVideos?.map((video) => (
            <li
              key={video._id}
              className=" cursor-pointer m-5 max-h-[16rem] h-[16rem] rounded-2xl hover:bg-colorLevel2 bg-colorLevel2 md:bg-colorLevel1"
              onClick={() => {
                navigate(`/video/play/${video._id}`);
              }}
            >
              <img
                src={video.thumbnail}
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 object-fill "
              />
              <div className="w-full  max-h-[10rem]  p-2 flex px-4 ">
                <img
                  src={video.avatar}
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="w-10 h-10  rounded-full border-2 border-white"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3 ">
                  <h2 className="w-full  font-bold truncate ">{video.title}</h2>
                  <div className="flex justify-between w-full">
                    <h3 className="flex truncate mr-2">{video.channelName}</h3>
                    <p className="flex w-auto truncate pr-2">
                      {uploadedTime(video.createdAt)} ago
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Videos;
