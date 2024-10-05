import React, { useState } from "react";
import { useForm } from "react-hook-form";
import uploadVideoAPI from "../APIHandling/uploadVideoAPI";
import { useNavigate } from "react-router-dom";

function UploadVideo() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [success,setSuccess]=useState(false)


  const uploadVideo = async (videoData) => {
    try {
      setError(false);
      setLoading(true);
      setSuccess(false)
      const responseData = await uploadVideoAPI.upload(videoData);
      if(responseData){
        setSuccess(true)
        console.log("Video upload:", responseData.data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.response.data.message);
        // console.error("ERR:", error);
    }
  };

  return (
    <div className="text-colorLevel3 bg-colorLevel1 md:w-[45%] rounded-xl md:max-w-[45%] h-auto mt-32 md:mx-auto mx-8 mb-10 py-4 px-8 shadow-2xl ">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-xl z-0">
          <h1 className="text-5xl font-bold text-colorLevel3">
            Video uploading please wait...
          </h1>
        </div>
      )}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-colorLevel1 p-8 rounded-xl shadow-2xl text-center">
            <h1 className="text-5xl font-bold text-colorLevel3">Success!</h1>
            <p className="mt-4 text-xl text-white">Video uploaded successfully.</p>
            <button
              className="mt-8 px-8 py-3 bg-colorLevel3 text-white rounded-lg"
              onClick={() => {
                setSuccess(false)
                navigate('/yourVideos')

              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full h-14 justify-center flex">
        <h1 className=" text-3xl font-bold font-myFont border-b shadow-xl">
          Upload video here
        </h1>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(uploadVideo)}
        className="font-myFont w-full mt-8"
      >
        <div className="w-full">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Video Title*
          </label>
          <input
            type="text"
            className="w-full border-b-2 bg-colorLevel1 pl-2 text-white font-light"
            id="title"
            {...register("videoTitle", { required: true })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Description*
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full border-b-2 bg-colorLevel1 pl-2 text-white font-light"
            id="description"
            {...register("description", { required: true })}
          />
        </div>

        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Choose thumbnail*
          </label>
          <input
            type="file"
            id="photo"
            name="thumbnail"
            accept="image/*"
            required
            className="w-full  bg-colorLevel1 pl-2 text-white font-light"
            {...register("thumbnail", { required: true })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Choose Video{" "}
          </label>
          <input
            type="file"
            id="video"
            name="videoFile"
            accept="video/*"
            className="w-full  bg-colorLevel1 pl-2 text-white font-light"
            {...register("videoFile", { required: true })}
          />
        </div>
        {error && (
          <h1 className="text-center pt-3 text-red-500">{errorMessage}</h1>
        )}
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="rounded-lg px-14 py-3 bg-colorLevel3 text-white"
          >Upload</button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideo;
