import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkCookies, getCookie } from "cookies-next";

export default function Resources() {
  const router = useRouter();
  const [resources, setResources] = useState([]);
  const [name, setName] = useState("")
  const [paid, setPaid] = useState("Yes")
  const [link, setLink] = useState("")

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://solodustries.up.railway.app";

  useEffect(() => {
    if (checkCookies("access_token")) {
      fetch(API_URL + "/checkjwt", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          if (!data.valid) {
            router.push("/");
          }
        })
      );
    } else {
      router.push("/");
    }
  });

  useEffect(() => {
    fetch(API_URL + "/resources", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        setResources(data);
      })
    );
  }, []);

  const addResource = () => {
    fetch(API_URL + "/create/resource", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      body: JSON.stringify({
        "name": name,
        "paid": paid === "Yes" ? true : false,
        "link": link,
      }),
    }).then((res) =>
      res.json().then((data) => {
        fetch(API_URL + "/resources", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }).then((res) =>
          res.json().then((data) => {
            setResources(data);
          })
        );
      })
    );
  };

  const deleteResource = (cid) => {
    fetch(API_URL+"/delete/resource/"+cid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`
      }
    }).then(res => res.json().then(data => {
      fetch(API_URL + "/resources", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          setResources(data);
        })
      );
    }))
  }

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
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {resources.map(resource => (
            <tr>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                {resource.resource.name}
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                {resource.resource.paid ? "Yes" : "No"}
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                {resource.resource.link}
              </td>
              <td className="p-4 text-pink-300 whitespace-nowrap"><button onClick={(e) => {deleteResource(resource.key)}}>Delete</button></td>
              <td className="p-4 text-pink-300 whitespace-nowrap"><button>Edit</button></td>
            </tr>))}
            <tr>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                <div className="relative">
                  <label className="sr-only" htmlFor="link">
                    {" "}
                    Name{" "}
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <select
                  id="paid"
                  className="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-900 placeholder-gray-400 text-white "
                  value={paid}
                  onChange={(e) => {
                    setPaid(e.target.value);
                  }}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <div className="relative">
                  <label className="sr-only" htmlFor="link">
                    {" "}
                    Link{" "}
                  </label>

                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="link"
                    type="url"
                    placeholder="Link"
                  />
                </div>
              </td>
              <td>
                <button
                  onClick={addResource}
                  className="inline-block px-12 py-3 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded active:text-pink-500 hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring"
                >
                  Add Resource
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
