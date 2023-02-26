import type { AppProps } from "next/app";

import Layout from "@/layouts/Layout";
import Providers from "@/layouts/Providers";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans px-10 py-7 tracking-wide`}>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
