import React from "react";

function YourVideosPage() {
  return (
    <div className="text-white md:ml-[15%]  max-w-[100%]  z-0 flex flex-col  mx-auto  bg-[#1A1A1C]  h-auto mt-24">
      <div className="p-8 flex justify-center flex-col ">
        <h1 className="font-myFont text-3xl font-extrabold border-b mx-auto mb-16">
          Videos uploaded by you
        </h1>
        <h1 className="text-center font-myFont text-3xl mt-10 my-auto text-red-500">This page is under development procee</h1>
        {/* <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className=" cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="/background.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="/background2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/laptop.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail1.webp"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/avatar.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="   cursor-pointer m-5 h-[16rem]  rounded-2xl">
              <img
                src="../../public/thumbnail2.jpg"
                alt="Thumbnail"
                className="width-full h-[75%] w-full rounded-3xl p-2 "
              />
              <div className="w-full max-w-[80%] max-h-[10rem]  p-2 flex">
                <img
                  src="../../public/avatar.jpg"
                  alt="Profile"
                  width="35px"
                  height="35px"
                  className="rounded-[50%]"
                />
                <div className="w-full h-[60%] max-h-[2rem] pl-3">
                  <h2 className="w-full font-bold truncate">
                    World Championship Of Legends, 2024 | India vs West Indies |
                    Highlights
                  </h2>
                  <div className="flex justify-between">
                    <h3 className="flex">Channel Name</h3>
                    <p className="flex w-auto">2 hours ago</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default YourVideosPage;
