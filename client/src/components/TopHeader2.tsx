import React from "react";
import Image from "next/image";
import {Calendar} from "react-date-range";
import {FiSearch} from "react-icons/fi";
import {IoIosGlobe} from "react-icons/io";
import {HiUserCircle} from "react-icons/hi";
import {HiOutlineBars3} from "react-icons/hi2";
import {AppDispatch} from "@/redux-store/store";
import {useDispatch} from "react-redux";
import {setanyweekbar} from "@/redux-actions/AppSlice";
type Props = {};

const TopHeader2 = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleSelect = (date: any) => {
    console.log(date); // native Date object
  };
  return (
    <nav className="flex sm:justify-between justify-center p-4">
      <div
        className={`cursor-pointer p-2  font-semibold sm:flex justify-center items-center gap-2 hidden`}
      >
        <Image src={"/ss.png"} width={28} height={28} alt="src" />
        <p className={`hidden lg:flex`}>hostshare</p>
      </div>
      <div
        className={`border  border-gray-200 rounded-3xl p-1 px-[8px] bg-white shadow-sm flex items-center justify-center  gap-2 text-xs`}
      >
        <div
          className={`flex justify-center items-center gap-1 transition duration-200 ease`}
        >
          <input
            type="text"
            className={`p-2 w-[12rem] focus-within:w-[18rem] transition-all duration-200 ease outline-none`}
            placeholder={`Start Search`}
          />
          <div
            className={`cursor-pointer bg-rose-600 text-white text-md rounded-full p-2`}
          >
            <FiSearch />
          </div>
        </div>
      </div>
      <div
        className={` cursor-pointer sm:flex justify-center items-center gap-2 hidden`}
      >
        <p className={`text-sm hidden lg:flex`}>Airbnb your home</p>
        <div className={`text-2xl`}>
          <IoIosGlobe />{" "}
        </div>
        <div
          className={`border rounded-3xl p-1 bg-white shadow-sm flex items-center justify-center gap-1`}
        >
          <HiOutlineBars3 className={`text-2xl`} />
          <HiUserCircle className={`text-3xl text-gray-500`} />
        </div>
      </div>
    </nav>
  );
};

export default TopHeader2;
