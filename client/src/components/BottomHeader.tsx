import {getcategories} from "@/redux-actions/AppSlice";
import {AppDispatch, RootState} from "@/redux-store/store";
import React, {useEffect} from "react";
import {BsSliders} from "react-icons/bs";
import {FaUmbrellaBeach} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
type Props = {};

const BottomHeader = ({data}: any) => {
  const {categories} = useSelector((store: RootState) => store.App);
  const dispatch: AppDispatch = useDispatch();
  //   console.log(data);
  useEffect(() => {
    dispatch(getcategories());
  }, []);

  return (
    <nav className="grid grid-cols-[1fr_5rem] gap-8 justify-between items-center p-3 scrollbar-none">
      <div
        className={`flex flex-nowrap gap-8 overflow-x-scroll scrollbar-none`}
      >
        {categories?.map((category) => (
          <div
            className={`cursor-pointer text-gray-500 flex flex-col justify-center items-center gap-2 relative before:content-[''] before:absolute before:bottom-[-1px] before:left-0 before:w-full before:h-[2px] before:bg-gray-400 header-roll p-2 before:hidden hover:before:flex pb-5`}
          >
            <FaUmbrellaBeach className={`text-2xl`} />
            <p className={`text-xs whitespace-nowrap  `}>{category?.type}</p>
          </div>
        ))}
      </div>
      <div
        className={`border border-gray-300 text-xs rounded-xl flex items-center justify-center gap-2 p-3`}
      >
        <BsSliders />
        <p className={`text-xs `}>Filters</p>
      </div>
    </nav>
  );
};

export default BottomHeader;
