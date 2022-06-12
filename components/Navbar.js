import Link from "next/link";

export default function Navbar(props) {
  return (
    <header className="border-b border-gray-800 bg-gray-800 text-white">
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/">
            <a className="flex">
              <span className="w-32 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                SoloDustries
              </span>
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            {!props.loggedin ? 
            <>
              <Link href="/#features">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Features
                </a>
              </Link>

              <Link href="/pricing">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Pricing
                </a>
              </Link>
              
              <Link href="/freelancers">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Freelancers
                </a>
              </Link>

              <Link href="/login">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Login
                </a>
              </Link>

              <Link href="/onboarding">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Get Started
                </a>
              </Link>
            </>
            :
            <>
              <Link href="/dashboard">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Dashboard
                </a>
              </Link>

              <Link href="/clients">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Clients
                </a>
              </Link>

              <Link href="/expenses">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Expenses
                </a>
              </Link>
              
              <Link href="/projects">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Projects
                </a>
              </Link>

              <Link href="/resources">
                <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                  Resources
                </a>
              </Link>

              <a href="https://calendar.google.com/" target="blank_" rel="noreferrer noopener" className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current">
                Calendar
              </a>
            </>
            }
          </nav>

          {props.loggedin ? (
            <div className="flex items-center ml-8">
              <div className="flex items-center border-gray-600 divide-x divide-gray-600 border-x">
                <span>
                  <a
                    href="/account"
                    className="block p-6 border-b-4 border-transparent hover:border-pink-700"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </a>
                </span>

                <span className="hidden sm:block">
                  <Link href="/search">
                    <a
                      className="block p-6 border-b-4 border-transparent hover:border-pink-700"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>

                      <span className="sr-only"> Search </span>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
