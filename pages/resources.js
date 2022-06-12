import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Resources() {
  return (
    <div className="bg-gray-900 min-h-screen">
        <Head>
            <title>Solodustries - Resources</title>
        </Head>
      <Navbar loggedin />
      <div className="overflow-x-auto p-10">
        <table className="min-w-full text-sm divide-y bg-gray-800 divide-white">
          <thead>
            <tr>
              <th className="sticky left-0 p-4 text-left bg-gray-800">
                <label className="sr-only" htmlFor="row_all">
                  Select All
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_all"
                />
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Resource
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Client
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Paid
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="sticky left-0 p-4 bg-gray-800">
                <label className="sr-only" htmlFor="row_1">
                  Row 1
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_1"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                Solodustries
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                None
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                  Yes
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                https://solodustries.vercel.app
              </td>
            </tr>

            <tr>
              <td className="sticky left-0 p-4 bg-gray-800">
                <label className="sr-only" htmlFor="row_2">
                  Row 2
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_2"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">OneHacks</td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                Jane Doe
              </td>
              <td className="p-4 whitespace-nowrap">
                <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                  No
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                https://onehacks.org
              </td>
            </tr>

            <tr>
              <td className="sticky left-0 p-4 bg-gray-800">
                <label className="sr-only" htmlFor="row_3">
                  Row 3
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_3"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">Visual Studio Code</td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                None
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                  No
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                https://code.visualstudio.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
