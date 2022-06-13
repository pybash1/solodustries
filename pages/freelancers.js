import Navbar from "../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkCookies, getCookie } from "cookies-next";

export default function Freelancers() {
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
      }).then((res) =>
        res.json().then((data) => {
          if (!data.valid) {
            router.push("/");
          }
        })
      );
    } else {
      router.push("/");
    }
  });

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-3 gap-8 p-20">
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
        <p className="relative block group h-60">
          <span className="absolute inset-0 border-2 border-pink-300 border-dashed rounded-lg"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-pink-300 border-2 border-pink-300 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="mt-4 text-2xl font-medium">Free Lancer</h2>

              <p className="mt-4">
                Hi, I am Free Lancer, and I can make websites for you at a very low price!
              </p>
              <br />
              <Link href="/add/test"><a className="mt-8 font-bold">Let&apos;s Hire!</a></Link>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
