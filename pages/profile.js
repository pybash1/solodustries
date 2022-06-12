import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const [name, setName] = useState("Free Lancer");
  const [title, setTitle] = useState("Web Developer");
  const [description, setDescription] = useState(
    "Hi, I am Free Lancer, a web developer!"
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Successfully updated profile!")
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Solodustries - Profile</title>
      </Head>
      <Toaster position="bottom-center" toastOptions={{ 
        style: {
            background: "#1f2937",
            color: "#fff"
        }
      }} />
      <Navbar loggedin />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 text-white">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Your Profile</h1>

          <p className="mt-4 text-gray-500">
            You can view or edit your profile here. You must click the update
            button in order to update any information.
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 rounded-lg shadow-sm"
                placeholder="Enter Name"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="title" className="sr-only">
              Job Title
            </label>
            <div className="relative">
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 rounded-lg shadow-sm"
                placeholder="Enter job title"
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
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <div className="relative">
              <input
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                type="text"
                className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 rounded-lg shadow-sm"
                placeholder="Enter description"
                maxLength={100}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
