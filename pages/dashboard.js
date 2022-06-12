import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRef } from "react";

export default function Dashboard() {
  const popup = useRef(null);

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
          <a className="underline" href="/">
            Check it out! &rarr;{" "}
          </a>
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
              fill-rule="evenodd"
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
        <div className="bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Money</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Expense</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                $240.94
              </span>
              <span className="ml-1 text-xs text-white">from $321.23</span>
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

              <span className="ml-1.5 text-xs font-medium">75.00%</span>
            </p>
          </article>
          <br />
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-300">Income</p>

            <p className="inline-flex items-end mt-1">
              <span className="text-2xl font-medium leading-none text-white">
                $404.32
              </span>
              <span className="ml-1 text-xs text-gray-300">from $240.94</span>
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

              <span className="ml-1.5 text-xs font-medium">59.59%</span>
            </p>
          </article>
        </div>
        <div className="bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Clients</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
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
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
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
        <div className="bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">Calendar</div>
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
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
          <article className="relative px-6 pt-12 pb-6 bg-gray-800 backdrop-blur-md bg-opacity-25 rounded-lg shadow-sm">
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
        <div className="bg-white bg-opacity-25 backdrop-blur-lg p-10 rounded-lg">
          <div className="text-5xl pb-8 text-pink-500 font-bold">
            Add Resource
          </div>
          <div class="max-w-screen-xl py-2">
            <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
              <div>
                <label for="email" class="sr-only">
                  Email
                </label>

                <div class="relative">
                  <input
                    type="email"
                    class="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 rounded-lg shadow-sm"
                    placeholder="Enter email"
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <div class="relative">
                  <input
                    type="password"
                    class="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 rounded-lg shadow-sm"
                    placeholder="Enter password"
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <p class="text-sm text-white">
                  No account?{" "}
                  <a class="underline text-pink-500 underline-offset-2 hover:opacity-50 decoration-wavy" href="">
                    Sign up
                  </a>
                </p>

                <button
                  type="submit"
                  class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-pink-500 rounded-lg"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
