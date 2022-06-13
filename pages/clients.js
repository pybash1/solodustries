import Navbar from "../components/Navbar";
import Head from "next/head";
import { checkCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Clients() {
  const router = useRouter();
  const [clients, setClients] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Todo");

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
    fetch(API_URL + "/clients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        setClients(data);
      })
    );
  }, []);

  const addClient = () => {
    fetch(API_URL + "/create/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone || "Not Provided",
        "status": status,
      }),
    }).then((res) =>
      res.json().then((data) => {
        fetch(API_URL + "/clients", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }).then((res) =>
          res.json().then((data) => {
            setClients(data);
          })
        );
      })
    );
  };

  const deleteClient = (cid) => {
    fetch(API_URL+"/delete/client/"+cid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`
      }
    }).then(res => res.json().then(data => {
      fetch(API_URL + "/clients", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          setClients(data);
        })
      );
    }))
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Solodustries - Clients</title>
      </Head>
      <Navbar loggedin />
      <div className="overflow-x-auto p-10">
        <table className="min-w-full text-sm divide-y bg-gray-800 divide-white">
          <thead>
            <tr>
              <th className="p-4 font-medium text-left text-white whitespace-nowrap">
                <div className="flex items-center">
                  Name
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
                  Email Address
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
                  Status
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
                  Phone Number
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
                  Client Number
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
              <th>
              </th>
              <th>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr>
                <td className="p-4 font-medium text-white whitespace-nowrap">
                  {client.client.name}
                </td>
                <td className="p-4 text-gray-300 whitespace-nowrap">
                  {client.client.email}
                </td>
                <td className="p-4 text-gray-300 whitespace-nowrap">
                  <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                    {client.client.status}
                  </strong>
                </td>
                <td className="p-4 text-gray-300 whitespace-nowrap">
                  {client.client.phone}
                </td>
                <td className="p-4 text-gray-300 whitespace-nowrap">
                  {client.key}
                </td>
                <td className="p-4 text-pink-300 whitespace-nowrap"><button onClick={(e) => {deleteClient(client.key)}}>Delete</button></td>
                <td className="p-4 text-pink-300 whitespace-nowrap"><button>Edit</button></td>
              </tr>
            ))}
            <tr>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                <div class="relative">
                  <label class="sr-only" for="email">
                    {" "}
                    Name{" "}
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <div class="relative">
                  <label class="sr-only" for="email">
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <select
                  id="status"
                  class="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-900 placeholder-gray-400 text-white "
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <div class="relative">
                  <label class="sr-only" for="email">
                    {" "}
                    Phone Number{" "}
                  </label>

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="phone"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <button
                  onClick={addClient}
                  class="inline-block px-12 py-3 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded active:text-pink-500 hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring"
                >
                  Add Client
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
