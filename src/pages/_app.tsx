import "@/styles/globals.css";
import { SEO } from "@/components";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
