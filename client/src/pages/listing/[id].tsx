import Image from "next/image";
import {Inter} from "next/font/google";
import TopHeader from "@/components/TopHeader";
import BottomHeader from "@/components/BottomHeader";
import {useSelector} from "react-redux";
import {RootState} from "@/redux-store/store";
import {RxShare2} from "react-icons/rx";
import WeekSearch from "@/components/WeekSearch";
import Main from "@/components/Main";
import mapboxgl from "mapbox-gl";
import TopHeader2 from "@/components/TopHeader2";
import {useRouter} from "next/router";
import {BsBalloonHeartFill, BsChevronLeft} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";

const inter = Inter({subsets: ["latin"]});

export default function Home({post}: any) {
  const {mainData} = useSelector((store: RootState) => store.App);
  //   mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
  //   let map = new mapboxgl.Map({
  //     container: "YOUR_CONTAINER_ELEMENT_ID",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //   });
  const router = useRouter();
  const {id} = router.query;
  console.log(mainData);

  return (
    <div>
      <header
        className={`sticky top-0 bg-white lg:flex flex-col hidden p-2 z-10 overflow-hidden`}
      >
        <TopHeader2 />
        <div className={`w-full h-[1px] bg-gray-200`} />
      </header>
      <header
        className={`sticky top-0 bg-white lg:hidden flex-col flex  p-2 z-10 overflow-hidden`}
      >
        <div
          className={`cursor-pointer p-2 text-xs flex justify-between items-center`}
        >
          <div
            className={`hover:bg-slate-200 p-2 rounded-md`}
            onClick={() => router.push("/")}
          >
            <BsChevronLeft fontSize={20} />
          </div>
          <div className={`flex justify-center items-center gap-4`}>
            <div
              className={`cursor-pointer flex justify-center items-center gap-1 underline hover:no-underline transition-all`}
            >
              <RxShare2 fontSize={18} />
            </div>
            <div
              className={`cursor-pointer flex justify-center items-center gap-1 underline hover:no-underline transition-all`}
            >
              <BsBalloonHeartFill fontSize={18} />
            </div>
          </div>
        </div>
        <div className={`w-full h-[1px] bg-gray-200`} />
      </header>
      <main>
        <div className={`p-4 px-4 py-4 md:px-8 lg:px-20 flex flex-col gap-4 `}>
          <div className={`hidden lg:flex flex-col gap-2 `}>
            <div className={``}>
              <p className={`text-2xl font-semibold`}>
                {mainData.info?.title} !
              </p>
            </div>
            <div
              className={`cursor-pointer text-sm flex justify-between items-center`}
            >
              <p className={`underline hover:no-underline transition-all`}>
                {mainData.info?.location.city},{" "}
                {mainData.info?.location.country.title}
              </p>
              <div className={`flex justify-center items-center gap-4`}>
                <div
                  className={`cursor-pointer flex justify-center items-center gap-1 underline hover:no-underline transition-all`}
                >
                  <RxShare2 fontSize={18} />
                  <p>Share</p>
                </div>
                <div
                  className={`cursor-pointer flex justify-center items-center gap-1 underline hover:no-underline transition-all`}
                >
                  <BsBalloonHeartFill fontSize={18} />
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:grid grid-cols-[1fr_1fr] gap-2 rounded-3xl overflow-hidden hidden`}
          >
            {mainData.info?.images.data
              ?.slice(0, 1)
              .map((image: any, index: any) => (
                <div className={`h-[24rem]`}>
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
                </div>
              ))}
            <div
              className={`grid grid-cols-2 grid-rows-2 gap-2 w-[100%] h-[24rem]`}
            >
              {mainData.info?.images.data
                ?.slice(1, 5)
                .map((image: any, index: any) => (
                  <div key={index}>
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
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`lg:hidden flex w-full  gap-2 rounded-sm overflow-hidden `}
          >
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              className={`w-full  rounded-sm overflow-hidden `}
              modules={[Pagination, Scrollbar, Navigation]}

              //   onSlideChange={() => console.log("slide change")}
              //   onSwiper={(swiper) => console.log(swiper)}
            >
              {mainData.info.images.data.map((image: any, index: any) => (
                <div key={index * 3}>
                  {}
                  <SwiperSlide
                    className={`w-full h-[14rem] bg-green-800
                    `}
                    style={{
                      width: "100%",
                      height: "26rem",
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
          <div className={`lg:hidden flex flex-col gap-2 `}>
            <div className={``}>
              <p className={`text-2xl font-semibold`}>
                {mainData.info?.title} !
              </p>
            </div>
            <div
              className={`cursor-pointer text-sm flex justify-between items-center`}
            >
              <p className={`underline hover:no-underline transition-all`}>
                {mainData.info.location.city},{" "}
                {mainData.info.location.country.title}
              </p>
              <div className={`flex justify-center items-center gap-4`}></div>
            </div>
          </div>
          <div className={`w-full h-[1px] bg-gray-200`} />
          <div className={`grid lg:grid-cols-2`}>
            <div className={`flex flex-col gap-2 `}>
              <div className={`flex gap-2 justify-between items-center`}>
                <p className={`text-2xl font-semibold`}>
                  Entire home hosted by {mainData.info?.host?.name}
                </p>
                <div className={`flex justify-center items-center`}>
                  <img
                    className={`rounded-full overflow:hidden object-center w-14 h-14`}
                    src={`${mainData.info?.host?.avatar.url}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`cursor-pointer text-sm flex justify-between items-center`}
              >
                <div className={`flex justify-between items-center gap-1`}>
                  {mainData.info?.details.data.map((detail: any) => (
                    <p>
                      {detail?.value} {detail?.type} &bull;
                    </p>
                  ))}
                </div>
                <div className={`flex justify-center items-center gap-4`}></div>
              </div>
              <div className={`w-full h-[1px] bg-gray-200`} />
            </div>
            <div className={`flex justify-center items-center sticky top-8 `}>
              <div className={`border p-6 rounded-md shadow-sm`}>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        className={`sticky bottom-0 bg-white lg:hidden justify-between items-center flex  border-t shadow-sm px-6 p-4 z-10 overflow-hidden`}
      >
        <div className={`flex items-center justify-center gap-1`}>
          <p
            className={`text-sm font-semibold flex items-center justify-center `}
          >
            <span>{mainData.info?.currency.symbol}</span>
            <span>{mainData.info?.price}</span>
          </p>
          <p className={`text-sm font-thin`}>night </p>
        </div>
        <div className={`p-2 px-4 bg-rose-600 text-white rounded-md`}>
          Check availability
        </div>
      </footer>
    </div>
  );
}

// export async function getServerSideProps(context: any) {
//   const {slug} = context.query;

// Fetch data from an external API based on the slug
//   const res = await fetch(`https://api.example.com/posts/${slug}`);
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }3
