import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Understand Your Clients.
              <span className="sm:block">Increase Retention.</span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Freelancer? Need help, managing your expenses, calendar, and more!
              Then hop in!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/onboarding">
                <a className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring">
                  <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium transition-all group-hover:mr-4">
                    Get Started
                  </span>
                </a>
              </Link>

              <Link href="#features">
                <a className="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:-rotate-2 active:text-indigo-500 focus:outline-none focus:ring">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
