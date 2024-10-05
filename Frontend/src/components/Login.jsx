import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../store/Slices/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import userAPI from "../APIHandling/userAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.auth.userData);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const[success,setSuccess]=useState(false)


  const loginUser = async (userData) => {
    try {
      setSuccess(false)
      setError(false);
      setLoading(true);
      const loginData = await userAPI.login(userData);
      if (loginData) {
        // console.log("Login response data", loginData);
        const currentUser = await userAPI.getCurrentUser();
        console.log("Current User:", currentUser);

        if (currentUser) {
          setUser(currentUser.data.data.fullName);
          setSuccess(true)
          dispatch(login(currentUser.data.data));
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.response.data.message);
      // console.error("ERROR:anil pan ss",error)
    }
  };

  // console.log("Error messsage:",errorMessage)

  return (
    <div className="text-colorLevel3 bg-colorLevel2 md:w-[45%] rounded-xl md:max-w-[45%] h-auto mt-32 md:mx-auto mx-8 mb-10 py-4 px-8 shadow-2xl ">
      {loading && (
        <div className="fixed inset-0 bg-colorLevel2 bg-opacity-75 flex items-center justify-center rounded-xl z-0">
          <h1 className="text-5xl font-bold text-colorLevel3">
            Logging in please wait...
          </h1>
        </div>
      )}

      {success && (
        <div className="fixed inset-0 bg-colorLevel1 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-colorLevel2 p-8 rounded-xl shadow-2xl text-center">
            <h1 className="text-5xl font-bold text-colorLevel3">Welcome again <span className="text-colorLevel4">{user}</span> !</h1>
            
            <button
              className="mt-8 px-8 py-3 bg-colorLevel3 text-white rounded-lg"
              onClick={() => {
                setSuccess(false);
                navigate("/");

              }}
            >
              Go to Home page
            </button>
          </div>
        </div>
      )}

      <div className="w-full h-14 justify-center flex">
        <h1 className="text-5xl font-bold font-myFont border-b shadow-xl">
          Login
        </h1>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(loginUser)}
        className="font-myFont w-full mt-8"
      >
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

        {error && (
          <h1 className="text-center pt-3 text-red-500">{errorMessage}</h1>
        )}
        <p className="text-white font-myFont text-lg mt-6">
        Create new account!{" "}
        <span
          className="text-colorLevel3 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Sign up
        </span>
      </p>
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="rounded-lg px-14 py-3 bg-colorLevel3 text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
