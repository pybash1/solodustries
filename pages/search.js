import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const formRef = useRef(null);
  const [query, setQuery] = useState("");

  if (q) {
    return (
      <div className="bg-gray-900 min-h-screen">
        <Head>
          <title>Solodustries - Search - {q}</title>
        </Head>
        <Navbar loggedin />
        <h2 className="text-2xl font-bold text-pink-500 pt-10 px-10">Clients</h2>
        <div className="overflow-hidden overflow-x-auto rounded-ld p-10">
          <table className="min-w-full text-sm divide-y divide-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  Phone Number
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-white whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  jo.hn.do.e@johnscompany.com
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  Not Provided
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Jane Doe
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  doe.jane@company.com
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  (+1) 9145 34524
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Gary Barlow
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  gary.barlow@notgmail.com
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  Not Provided
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-bold text-pink-500 pt-10 px-10">Resources</h2>
        <div className="overflow-hidden overflow-x-auto rounded-ld p-10">
          <table className="min-w-full text-sm divide-y divide-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  Resource Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-white whitespace-nowrap">
                  Link
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-2 font-medium text-white whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                <a href="https://stackoverflow.com">https://stackoverflow.com</a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Jane Doe
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  <a href="https://google.com">https://google.com</a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Gary Barlow
                </td>
                <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                  <a href="https://onehacks.org">https://onehacks.org</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }


  const handleSearch = (e) => {
    e.preventDefault();
    if (query === null || query === undefined || query === "") {
      toast.error("Query cannot be empty!");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Head>
        <title>Solodustries - Search</title>
      </Head>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />
      <div className="absolute top-0 right-0 left-0">
        <Navbar loggedin />
      </div>
      <div className="">
        <form onSubmit={handleSearch} ref={formRef} className="m-4 flex">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-white border-gray-800 bg-gray-700"
            placeholder="Search Term"
          />
          <button className="px-8 rounded-r-lg bg-pink-400 text-white font-bold p-4 border-yellow-500 border-t border-b border-r">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
