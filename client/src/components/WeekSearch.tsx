import React, {Fragment, useState} from "react";
import {FiSearch} from "react-icons/fi";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
type Props = {};
import {Calendar} from "react-date-range";
import {useDispatch, useSelector} from "react-redux";
import {
  addPickCount,
  removePickCount,
  setOpenCal,
  setOpenCal2,
  setOpenPicker,
} from "@/redux-actions/AppSlice";
import {RootState} from "@/redux-store/store";

const WeekSearch = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const {pickData, openCal, openPicker, openCal2} = useSelector(
    (store: RootState) => store.App
  );

  const dispatch = useDispatch();

  const handleSearchChange = (name: string) => {
    if (name === "checkin") {
      dispatch(setOpenCal());
    }
    if (name === "checkout") {
      dispatch(setOpenCal2());
    }
    if (name === "picker") {
      dispatch(setOpenPicker());
    }
    // if (name !== "checkin" && name !== "checkout") {
    //   setOpenCal(false);
    //   setOpenPicker(true);
    // }
    // setOpenCal((prev) => !prev);
    // setSearchValue(e.target.value);
    // console.log(e.target.name, searchValue);
  };
  const handleSelect = (date: any) => {
    console.log(date); // native Date object
  };
  const handleSubmit = () => {
    // Perform any actions with the search value
    console.log("Search value:", searchValue);
  };
  return (
    <nav className="flex gap-8 flex-col  justify-center items-center w-full p-3 scrollbar-none">
      <div
        className={`rounded-full border shadow-sm bg-gray-200 flex items-center justify-center`}
      >
        <div
          className={`text-[11px] px-6 rounded-full focus-within:bg-white focus:shadow-sm flex flex-col p-2 `}
          onClick={() => handleSearchChange("where")}
        >
          <p className={`p-1`}>Where</p>
          <input
            name={"where"}
            type="text"
            className={`bg-transparent p-1 outline-none w-[5rem]`}
            placeholder="Search destinations"
          />
        </div>
        <div
          onClick={() => handleSearchChange("checkin")}
          className={`px-6 text-[11px] ${
            openCal ? "bg-white" : ""
          } flex flex-col p-2 focus:shadow-sm rounded-full focus-within:bg-white`}
        >
          <p className={`p-1`}>Check in</p>
          <input
            name={"checkin"}
            type="text"
            className={`bg-transparent p-1 outline-none w-[4rem]`}
            placeholder="Add dates"
          />
        </div>
        <div
          onClick={() => handleSearchChange("checkout")}
          className={`px-6  ${
            openCal2 ? "bg-white" : ""
          } text-[11px] flex flex-col p-2 rounded-full focus-within:bg-white`}
        >
          <p className={`p-1`}>Check out</p>
          <input
            name={"checkout"}
            type="text"
            className={`bg-transparent p-1 outline-none w-[4rem]`}
            placeholder="Add dates"
          />
        </div>
        <div
          onClick={() => handleSearchChange("picker")}
          className={`text-[11px]  ${
            openPicker ? "bg-white" : ""
          } flex rounded-full pl-4 pr-2 focus-within:bg-white`}
        >
          <div
            className={`text-[11px] flex flex-col p-2  rounded-full focus-within:bg-white`}
          >
            <p className={`p-1`}>Who</p>
            <input
              type="text"
              className={`bg-transparent p-1 outline-none w-[5rem]`}
              placeholder="Add guests"
            />
          </div>
          <div
            className={`text-[11px] flex p-2 px-0 justify-center items-cente`}
          >
            <div
              className={`text-[11px] gap-1 flex px-2 rounded-3xl justify-center items-center bg-rose-500`}
            >
              <FiSearch fontSize={18} />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {openCal && <Calendar date={new Date()} onChange={handleSelect} />}
        {openCal2 && <Calendar date={new Date()} onChange={handleSelect} />}
        {openPicker && (
          <div className={`border rounded-lg p-8 flex flex-col w-full gap-3`}>
            {pickData.map((pick) => (
              <Fragment key={pick.id}>
                <div className={`flex justify-between gap-16 items-center`}>
                  <div className={`flex flex-col justify-center items-start `}>
                    <p className={`font-semibold text-md `}>{pick.head} </p>
                    <p className={`font-thin text-xs`}>{pick?.agerange} </p>
                    <p className={`font-thin text-xs underline`}>
                      {pick?.link}{" "}
                    </p>
                  </div>
                  <div className={`flex gap-4 justify-center items-center`}>
                    <div
                      onClick={() =>
                        pick.count !== 0
                          ? dispatch(removePickCount(pick))
                          : false
                      }
                      className={`p-2 border  ${
                        pick.count === 0
                          ? "text-gray-500 border-gray-500"
                          : "border-gray-800"
                      } cursor-pointer rounded-full w-8 h-8 flex justify-center items-center `}
                    >
                      <AiOutlineMinus />
                    </div>
                    <div>{pick.count} </div>
                    <div
                      onClick={() => dispatch(addPickCount(pick))}
                      className={`p-2 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center border border-gray-800`}
                    >
                      <AiOutlinePlus />
                    </div>
                  </div>
                </div>
                <div className={`w-full h-[1px] bg-gray-200`} />
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default WeekSearch;
