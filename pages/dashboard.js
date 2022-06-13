import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkCookies, getCookie } from "cookies-next";

export default function Dashboard() {
  const popup = useRef(null);
  const router = useRouter();

  const [item, setItem] = useState("")
  const [type, setType] = useState("")
  const [client, setClient] = useState("")

  const [expenses, setExpenses] = useState(0)
  const [income, setIncome] = useState(0)

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

  // useEffect(() => {
  //   fetch(API_URL+"/expenses", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${getCookie("access_token")}`
  //     }
  //   }).then(res => res.json().then(data => {
  //     data.forEach(item => {
  //       if (item.type === "Expense") {
  //         setExpenses(expenses+parseInt(item.amount.remove("$")))
  //       } else {
  //         setIncome(income+parseInt(item.amount.remove($)))
  //       }
  //     })
  //   }))
  // })

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Solodustries - Dashboard</title>
      </Head>
      <div
        className="relative px-4 py-3 text-white bg-indigo-600 pr-14"
        ref={popup}
      >
        <p className="text-sm font-medium text-left sm:text-center">
          You got a new order!{" "}
          <Link href="/">
            <a className="underline">Check it out! &rarr; </a>
          </Link>
        </p>

        <button
          onClick={(e) => {
            popup.current.remove();
          }}
          aria-label="Close"
          className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
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
      <Navbar loggedin />
      <div className="text-5xl px-24 py-10 text-pink-500 font-bold">
        Welcome
      </div>
      <div className="grid grid-cols-2 gap-10 p-20">
        <div className="bg-gray-800 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Money</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Expense</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                ${expenses}
              </span>
              <span className="ml-1 text-xs text-white">from $0.00</span>
            </p>

            <p className="absolute inline-flex p-1 text-red-600 bg-red-100 rounded top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>

              <span className="ml-1.5 text-xs font-medium">100.00%</span>
            </p>
          </article>
          <br />
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Income</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                ${income}
              </span>
              <span className="ml-1 text-xs text-gray-300">from $0.00</span>
            </p>

            <p className="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>

              <span className="ml-1.5 text-xs font-medium">100.00%</span>
            </p>
          </article>
        </div>
        <div className="bg-gray-800 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Clients</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Client #4</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                John Doe
              </span>
              <span className="ml-1 text-xs text-white">
                john.doe@notgmail.com
              </span>
            </p>

            <p className="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
              <span className="text-xs font-medium">New</span>
            </p>
          </article>
          <br />
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Client #3</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                Gary Something
              </span>
              <span className="ml-1 text-xs text-gray-300">
                gary@hiscompany.com
              </span>
            </p>

            <p className="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
              <span className="text-xs font-medium">Recurring</span>
            </p>
          </article>
        </div>
        <div className="bg-gray-800 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Calendar</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">13:00 - 14:00</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                Meeting
              </span>
              <span className="ml-1 text-xs text-white">Google Meet</span>
            </p>

            <p className="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
              <span className="text-xs font-medium">Online</span>
            </p>
          </article>
          <br />
          <article className="relative px-6 pt-12 pb-6 bg-gray-500 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">16:00 - 17:00</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                Meeting with Gary
              </span>
              <span className="ml-1 text-xs text-gray-300">Some Cafe</span>
            </p>

            <p className="absolute inline-flex p-1 text-red-600 bg-red-100 rounded top-4 right-4">
              <span className="text-xs font-medium">Offline</span>
            </p>
          </article>
        </div>
        <div className="bg-gray-800 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">
            Add Resource
          </div>
          <div className="max-w-screen-xl py-2">
            <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full p-4 pr-12 text-sm text-white bg-gray-700 border-gray-800 rounded-lg shadow-sm"
                    placeholder="Enter name"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="link" className="sr-only">
                  Resource Link
                </label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full p-4 pr-12 text-sm text-white bg-gray-700 border-gray-800 rounded-lg shadow-sm"
                    placeholder="Enter link"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block px-5 py-3 text-sm font-medium text-white bg-pink-500 rounded-lg"
                >
                  Add Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
