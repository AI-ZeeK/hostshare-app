import Image from "next/image";
import {Inter} from "next/font/google";
import TopHeader from "@/components/TopHeader";
import BottomHeader from "@/components/BottomHeader";
import {useSelector} from "react-redux";
import {RootState} from "@/redux-store/store";
import WeekSearch from "@/components/WeekSearch";
import Main from "@/components/Main";
import mapboxgl from "mapbox-gl";
import TopHeader2 from "@/components/TopHeader2";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const {anyweekbar} = useSelector((store: RootState) => store.App);
  //   mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
  //   let map = new mapboxgl.Map({
  //     container: "YOUR_CONTAINER_ELEMENT_ID",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //   });

  return (
    <div>
      <header className={`sticky top-0 bg-white p-2 z-10 overflow-hidden`}>
        <TopHeader2 />
        <div className={`w-full h-[1px] bg-gray-200`} />
      </header>
      <main></main>
    </div>
  );
}
