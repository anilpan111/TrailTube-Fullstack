import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/Slices/authSlice";
import axios from "axios";
import userAPI from "../APIHandling/userAPI";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (userData) => {
    try {
      setError(false);
      setLoading(true);
      const responseData = await userAPI.signUp(userData);
      if (responseData) {
        const currentUser = await userAPI.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser.data.data));
          navigate("/");
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false)
      setError(true);
      setErrorMessage(error.response.data.message);
      console.error("ERR:", error);
    }
  };

  // if(error){
  //   return <h1 className='w-full h-full text-center flex justify-center items-center'>Something ent wrong....</h1>
  // }
  return (
    <div className="text-colorLevel3 bg-colorLevel2 md:w-[45%] rounded-xl md:max-w-[45%] h-auto mt-32 md:mx-auto mx-8 mb-10 py-4 px-8 shadow-2xl ">


      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-xl z-0">
          <h1 className="text-5xl font-bold text-colorLevel3">Signing up...</h1>
        </div>
      )}


      <div className="w-full h-14 justify-center flex">
        <h1 className="text-4xl font-bold font-myFont border-b shadow-xl">
          Register Now
        </h1>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(registerUser)}
        className="font-myFont w-full mt-8"
      >
        <div className="w-full">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Full Name*
          </label>
          <input
            type="text"
            className="w-full border-b-2 bg-colorLevel2 pl-2 text-white font-light"
            id="name"
            {...register("fullName", {
              required: true,
            })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            User Name*
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full border-b-2 bg-colorLevel2 pl-2 text-white font-light"
            id="username"
            {...register("userName", {
              required: true,
            })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Email*
          </label>
          <input
            type="text"
            className="w-full border-b-2 bg-colorLevel2 pl-2 text-white font-light"
            id="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Password*
          </label>
          <input
            type="password"
            className="w-full border-b-2 bg-colorLevel2 pl-2 text-white font-light"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Upload Profile Picture*
          </label>
          <input
            type="file"
            id="avatar"
            name="photo"
            accept="image/*"
            required
            className="w-full  bg-colorLevel2 pl-2 text-white font-light"
            {...register("avatar", {
              required: true,
            })}
          />
        </div>
        <div className="w-full mt-8">
          <label htmlFor="" className="font-bold text-2xl mr-4">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="photo"
            accept="image/*"
            className="w-full  bg-colorLevel2 pl-2 text-white font-light"
            {...register("coverImage", {
              required: true,
            })}
          />
        </div>
        {error && (
          <h1 className="text-center pt-3 text-red-500">{errorMessage}</h1>
        )}
        <div className="w-full flex justify-center mt-6">
          <button
            className="rounded-lg px-14 py-3 bg-colorLevel3 text-white"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-white font-myFont text-lg mt-6">
        Already have an account?{" "}
        <span
          className="text-colorLevel3 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          login
        </span>
      </p>
    </div>
  );
}

export default Register;
