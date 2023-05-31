import {getdata, getimages, setMainData} from "@/redux-actions/AppSlice";
import {AppDispatch, RootState} from "@/redux-store/store";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles

import {BsStarFill} from "react-icons/bs";
import {Navigation, Pagination, Scrollbar} from "swiper";
import {useRouter} from "next/router";
type Props = {};

const Main = (props: Props) => {
  const {data, images} = useSelector((store: RootState) => store.App);
  const [imageData, setImageData] = useState<any>([]);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const handleSelectData = async (data: any) => {
    await dispatch(setMainData(data));
    router.push(`/listing/${data.info.id}`);
  };
  //   console.log(data[0]?.info.mainImage.url, typeof images);
  useEffect(() => {
    dispatch(getdata());
    dispatch(getimages());
    setImageData(images.slice(0, 14));
  }, []);
  return (
    <div className={`p-2 px-4 py-4 md:px-8 grid gap-4 grid-auto-fit`}>
      {data.map((dat, i) => {
        return (
          <div
            key={i}
            onClick={() => handleSelectData(dat)}
            className={`flex rounded-md flex-col cursor-pointer duration-300 justify-center items-center gap-1 transition-all hover:shadow-md`}
          >
            <div className={`w-full rounded-3xl border overflow:none`}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className={`w-full rounded-lg overflow:hidden`}
                modules={[Pagination, Scrollbar, Navigation]}

                //   onSlideChange={() => console.log("slide change")}
                //   onSwiper={(swiper) => console.log(swiper)}
              >
                {dat.info.images.data?.map((image: any, index: any) => (
                  <div key={index}>
                    {}
                    <SwiperSlide
                      className={`w-full h-[14rem]
                    `}
                      style={{
                        width: "100%",
                        height: "16rem",
                      }}
                    >
                      <img
                        src={`${image?.url}`}
                        width={200}
                        height={200}
                        alt="rooms image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
            <div className={`p-2 w-full flex flex-col gap-1`}>
              <div className={`flex justify-between items-center w-full`}>
                <p className={`text-sm font-semibold `}>
                  {dat.info.location.city}{" "}
                </p>
                <div className={`flex gap-2 items-center`}>
                  <BsStarFill />

                  <p className={`text-sm  `}>{dat.info.ratings.accuracy} </p>
                </div>
              </div>
              <div className={`flex justify-start items-center w-full`}>
                <div className={`flex items-center`}>
                  <p className={`text-sm font-semibold `}>
                    {dat.info.currency.symbol}{" "}
                  </p>
                  <p className={`text-sm`}>{dat.info.price} </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
