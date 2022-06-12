import Head from "next/head";

export default function ClientForm() {
  return (
    <section className="bg-gray-700 text-white min-h-screen">
        <Head>
            <title>Hire Freelancer!</title>
        </Head>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              You are hiring Free Lancer as a freelancer! Fill in this form to submit your request.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                {" "}
                free.lancer@solodustries.vercel.app
                {" "}
              </a>

              <address className="mt-2 not-italic">
                For privacy reasons, phone numbers, and physical addresses are not provided.
              </address>
            </div>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm bg-gray-900 border-gray-900 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-gray-900 border-gray-900 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-gray-900 border-gray-900 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm bg-gray-900 border-gray-900 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Send Message </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
