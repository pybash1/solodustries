import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkCookies, getCookie } from "cookies-next";

export default function Expenses() {
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);

  const [item, setItem] = useState("")
  const [type, setType] = useState("")
  const [client, setClient] = useState("")
  const [amount, setAmount] = useState("")

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
    fetch(API_URL + "/expenses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        setExpenses(data);
      })
    );
  }, []);

  const addExpense = () => {
    fetch(API_URL + "/create/expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      body: JSON.stringify({
        "item": item,
        "client": client || "None",
        "type": type,
        "amount": "$"+amount
      }),
    }).then((res) =>
      res.json().then((data) => {
        fetch(API_URL + "/expenses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }).then((res) =>
          res.json().then((data) => {
            setExpenses(data);
          })
        );
      })
    );
  };

  const deleteExpense = (cid) => {
    fetch(API_URL+"/delete/expense/"+cid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`
      }
    }).then(res => res.json().then(data => {
      fetch(API_URL + "/expenses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          setExpenses(data);
        })
      );
    }))
  }

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
                  Expense/Income
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
                  Amount
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
            {expenses.map(expense => (
            <tr>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                {expense.expense.item}
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                {expense.expense.client}
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                  {expense.expense.type}
                </strong>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                {expense.expense.amount}
              </td>
              <td className="p-4 text-pink-300 whitespace-nowrap"><button onClick={(e) => {deleteExpense(expense.key)}}>Delete</button></td>
              <td className="p-4 text-pink-300 whitespace-nowrap"><button>Edit</button></td>
            </tr>))}
            <tr>
              <td className="p-4 font-medium text-white whitespace-nowrap">
                <div className="relative">
                  <label className="sr-only" htmlFor="item">
                    {" "}
                    Item{" "}
                  </label>

                  <input
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="item"
                    type="text"
                    placeholder="Item"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <div className="relative">
                  <label className="sr-only" htmlFor="client">
                    {" "}
                    Client{" "}
                  </label>

                  <input
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="client"
                    type="text"
                    placeholder="Client"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <select
                  id="countries"
                  className="text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-900 placeholder-gray-400 text-white "
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>Expense</option>
                  <option>Income</option>
                </select>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <div className="relative">
                  <label className="sr-only" htmlFor="amount">
                    {" "}
                    Amount{" "}
                  </label>

                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full py-3 pl-3 pr-12 text-sm border-2 bg-gray-900 border-gray-900 rounded"
                    id="amount"
                    type="number"
                    placeholder="Amount"
                  />
                </div>
              </td>
              <td className="p-4 text-gray-300 whitespace-nowrap">
                <button
                  onClick={addExpense}
                  className="inline-block px-12 py-3 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded active:text-pink-500 hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring"
                >
                  Add Income/Expense
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
