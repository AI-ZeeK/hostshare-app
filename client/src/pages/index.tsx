import Image from "next/image";
import {Inter} from "next/font/google";
import TopHeader from "@/components/TopHeader";
import BottomHeader from "@/components/BottomHeader";
import {useSelector} from "react-redux";
import {RootState} from "@/redux-store/store";
import WeekSearch from "@/components/WeekSearch";
import Main from "@/components/Main";
import mapboxgl from "mapbox-gl";
import {Switch} from "@chakra-ui/react";
import {useRouter} from "next/router";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const {anyweekbar} = useSelector((store: RootState) => store.App);
  //   mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
  //   let map = new mapboxgl.Map({
  //     container: "YOUR_CONTAINER_ELEMENT_ID",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //   });
  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
      <header className={`sticky top-0 bg-white p-2 z-10 overflow-hidden`}>
        <TopHeader />
        <div className={`w-full h-[1px] bg-gray-200`} />
        <div className={`relative h-full`}>
          <div
            className={`${
              anyweekbar ? "opacity-0 " : "opacity-1 "
            } transition-opacity delay-200`}
          >
            <BottomHeader />
          </div>
          <div
            className={`${
              anyweekbar ? "h-[20rem]" : "h-0"
            } transition-all duration-300`}
          >
            <div
              className={`${
                anyweekbar ? " h-[full] top-0 delay-150" : "-top-0 h-0"
              } transition-all absolute overflow-hidden bg-white left-0 w-full shadow-sm`}
            >
              <WeekSearch />
            </div>
          </div>
        </div>
      </header>
      <main className={`flex flex-col gap-2 justify-center items-center pt-2`}>
        <div
          className={`p-4 border shadow-sm rounded-xl flex justify-between items-center gap-2`}
        >
          <div className={`font-semibold text-sm`}>Display total price</div>
          <div className={`w-[1px] h-[22px] bg-gray-300`} />

          <div className={`text-gray-400 text-sm hidden sm:flex`}>
            Includes all fees, before taxes
          </div>
          <Switch size="lg" />
        </div>
        <Main />
      </main>
    </div>
  );
}
