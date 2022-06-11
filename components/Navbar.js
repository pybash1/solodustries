import Link from "next/link";

export default function Navbar(props) {
  return (
    <header class="border-b border-gray-800 bg-gray-800 text-white">
      <div class="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="flex items-center">
          <button type="button" class="p-2 sm:mr-4 lg:hidden">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a href="" class="flex">
            <span class="w-32 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              SoloDustries
            </span>
          </a>
        </div>

        <div class="flex items-center justify-end flex-1">
          <nav class="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <Link href="/#features">
              <a class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-700 hover:border-current">
                Features
              </a>
            </Link>

            <Link href="/login">
              <a class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-700 hover:border-current">
                Login
              </a>
            </Link>

            <Link href="/onboarding">
              <a class="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-indigo-700 hover:border-current">
                Get Started
              </a>
            </Link>
          </nav>

          {props.loggedin ? (
            <div class="flex items-center ml-8">
              <div class="flex items-center border-gray-600 divide-x divide-gray-600 border-x">
                <span>
                  <a
                    href="/cart"
                    class="block p-6 border-b-4 border-transparent hover:border-indigo-700"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span class="sr-only">Cart</span>
                  </a>
                </span>

                <span>
                  <a
                    href="/account"
                    class="block p-6 border-b-4 border-transparent hover:border-indigo-700"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="sr-only"> Account </span>
                  </a>
                </span>

                <span class="hidden sm:block">
                  <a
                    href="/search"
                    class="block p-6 border-b-4 border-transparent hover:border-indigo-700"
                  >
                    <svg
                      class="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>

                    <span class="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
