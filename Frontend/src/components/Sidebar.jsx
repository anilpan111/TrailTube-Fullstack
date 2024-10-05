import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { RiVideoUploadLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const loginStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate();
  const items = [
    {
      name: "Home",
      navigate: "/",
      status: true,
      icon: <FaHome size={25} className="flex w-[20%] content-center" />,
      iconBottom: <FaHome size={40}/>
    },
    {
      name: "Subscription",
      navigate: loginStatus ? "/subscription" :"/register",
      status: true,
      icon: <MdOutlineSubscriptions size={25}  className="flex w-[20%] content-center"/>,
      iconBottom: <MdOutlineSubscriptions size={40}/>

    },
    {
      name: "Your Videos",
      navigate: loginStatus ? "/yourVideos" :"/register",
      status: true,
      icon:<BiSolidVideos size={25}  className="flex w-[20%] content-center"/>,
      iconBottom: <RiVideoUploadLine size={40}/>

    },
    {
      name: "Upload",
      navigate: loginStatus ? "/upload" :"/register",
      status: true,
      icon:<RiVideoUploadLine size={25}  className="flex w-[20%] content-center"/>,
      iconBottom: <BiSolidVideos size={40}/>

    },
    {
      name: "Profile",
      navigate:  "/profile" ,
      status: true,
      icon:<CgProfile size={25}  className="flex w-[20%] content-center"/>,
      iconBottom: <CgProfile size={40}/>

    }
  ];

  return (
    <div className='fixed flex  bottom-0 w-full h-14 md:left-0 md:top-24 md:max-w-[15%] md:h-screen z-10'>
      <ul className='hidden md:flex md:flex-col pt-4 mx-4 text-white'>
        {items.map((item) =>
          item.status ? (
            <li className='w-full h-12  content-center cursor-pointer mb-6 rounded-xl font-bold hover:bg-gray-800 hover:shadow-xl'
            key={item.name}
            onClick={()=>navigate(item.navigate)}
            >
              <div className="flex  my-auto">
                {item.icon}
                <h2 className="flex w-[80%] h-auto pl-3">{item.name}</h2>
              </div>
            </li>
          ) : null
        )}        
      </ul>

      <ul className='md:hidden flex bg-colorLevel1 justify-around my-auto w-full h-full text-white items-center'>
        
        {
          items.map((item)=>
          item.status ? (
            <li className='h-4 hover:text-[#00df9a] cursor-pointer pb-10'
            key={item.name}
            onClick={()=>navigate(item.navigate)}
            >
              {item.iconBottom}
            </li>
          ) : null
          )
        }
      </ul>
    </div>
  );
}

export default Sidebar;
