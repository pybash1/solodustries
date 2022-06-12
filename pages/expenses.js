import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Expenses() {
  return (
    <div className="bg-gray-900 min-h-screen">
        <Head>
            <title>Solodustries - Expenses</title>
        </Head>
      <Navbar loggedin />
      <div className="overflow-x-auto p-10">
        <table className="min-w-full text-sm divide-y bg-gray-800 divide-white">
          <thead>
            <tr>
              <th className="sticky left-0 p-4 text-left bg-gray-800">
                <label className="sr-only" for="row_all">
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
                  Item
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
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
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Expense/Income
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </th>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Amount
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
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
                <label className="sr-only" for="row_1">
                  Row 1
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_1"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                Solodustries Subscription
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                None
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                  Expense
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                $45.50
              </td>
            </tr>

            <tr>
              <td className="sticky left-0 p-4 bg-gray-800">
                <label className="sr-only" for="row_2">
                  Row 2
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_2"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">Project</td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                Jane Doe
              </td>
              <td className="p-4 whitespace-nowrap">
                <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                  Income
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                $129.00
              </td>
            </tr>

            <tr>
              <td className="sticky left-0 p-4 bg-gray-800">
                <label className="sr-only" for="row_3">
                  Row 3
                </label>
                <input
                  className="w-5 h-5 border-gray-800 rounded"
                  type="checkbox"
                  id="row_3"
                />
              </td>
              <td className="p-4 font-medium text-white whitespace-nowrap">Repl.it hacker plan</td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                Gary Barlow
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                  Expense
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                $50.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
