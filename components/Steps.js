import { useEffect, useRef } from "react";

export default function Steps(props) {
  const progress = useRef(null)

  useEffect(() => {
    if (progress !== null || progress !== undefined) {
      progress.current.style.width = props.step === 0 ? "40px" : props.step === 1 ? "50%" : "100%"
    }
  })

  return (
    <div className="px-96">
      <h2 className="sr-only">Steps</h2>

      <div>
        <div className="overflow-hidden bg-gray-200 rounded-full">
          <div
            className="h-2 bg-pink-500 rounded-full"
            ref={progress}
          ></div>
        </div>

        <ol className="grid grid-cols-3 mt-4 text-sm font-medium text-gray-500">
          <li
            className={`flex items-center justify-center ${
              props.step >= 0 ? "text-pink-600" : null
            }`}
          >
            <span className="hidden sm:inline"> Information </span>

            <svg
              className="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </li>

          <li
            className={`flex items-center justify-center ${
              props.step >= 1 ? "text-pink-600" : null
            }`}
          >
            <span className="hidden sm:inline"> Configuration </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>

          <li
            className={`flex items-center justify-center ${
              props.step >= 2 ? "text-pink-600" : null
            }`}
          >
            <span className="hidden sm:inline"> Payment </span>

            <svg
              className="w-6 h-6 sm:w-5 sm:h-5 sm:ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </li>
        </ol>
      </div>
    </div>
  );
}
