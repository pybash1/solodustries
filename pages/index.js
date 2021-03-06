import Head from "next/head";
import Link from "next/dist/client/link";
import { useRef, useEffect } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { checkCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Home() {
  const banner = useRef(null);
  const router = useRouter();

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://solodustries.up.railway.app";

  useEffect(() => {
    if (checkCookies("access_token")) {
      fetch(API_URL + "/checkjwt", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }).then(res => res.json().then(
        data => {
          if (data.valid) {
            router.push("/dashboard");
          }
        }
      ))
    }
  })

  return (
    <div>
      <Head>
        <title>Solodustries</title>
      </Head>
      <div className="relative px-4 py-3 text-white bg-pink-600 pr-14" ref={banner}>
        <p className="text-sm font-medium text-left sm:text-center">
          We now support Google Calendar Integration!{" "}
          <Link href="/onboarding">
            <a className="underline">
              Get Started &rarr;{" "}
            </a>
          </Link>
        </p>

        <button
          aria-label="Close"
          className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
          onClick={(_) => {banner.current.remove()}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Navbar />
      <Banner />
      <div id="features">
        <Features />
      </div>
      <Footer />
    </div>
  );
}
