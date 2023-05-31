import {store} from "@/redux-store/store";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import {ChakraProvider} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
