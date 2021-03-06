import Link from "next/link";
import Navbar from "../components/Navbar";
import { checkCookies, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Pricing() {
  const router = useRouter()
  
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
          if (data.valid) {
            router.push("/dashboard");
          }
        })
      );
    }
  });

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <br />
      <h2 className="text-3xl font-bold text-white text-center">Pricing</h2>
      <br />
      <br />
      <div className="flex items-center justify-center">
        <article className="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
          <h5 className="text-3xl font-bold text-pink-600">Free Plan</h5>

          <h6 className="mt-1 text-sm text-gray-200">
            Perfect for individuals who are just starting
          </h6>

          <div className="mt-4 text-white">
            <h6>
              <span className="text-2xl">$</span>
              <span className="inline text-5xl font-bold">0</span>
              <span className="text-xs">/ month</span>
            </h6>

            <p className="text-xs text-gray-100 mt-0.5">Billed Annually</p>
          </div>

          <ul className="mt-8 space-y-2.5 text-white">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Client Management
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Expense Management
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Resource Management
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Upcoming Updates
            </li>
          </ul>

          <Link href="/onboarding?plan=1">
            <a className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring">
              Let&apos;s Get Started
            </a>
          </Link>
        </article>
        &nbsp;&nbsp;&nbsp;
        <article className="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
          <h5 className="text-3xl font-bold text-pink-600">Basic Plan</h5>

          <h6 className="mt-1 text-sm text-gray-200">
            Perfect for Freelancers with some experience
          </h6>

          <div className="mt-4 text-white">
            <h6>
              <span className="text-2xl">$</span>
              <span className="inline text-5xl font-bold">9</span>
              <span className="text-xs">/ month</span>
            </h6>

            <p className="text-xs text-gray-100 mt-0.5">Billed Annually</p>
          </div>

          <ul className="mt-8 space-y-2.5 text-white">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Everything in Free and
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Priority Support
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Calendar Integration
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Promotion
            </li>
          </ul>

          <Link href="/onboarding?plan=2">
            <a className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring">
              Let&apos;s Get Started
            </a>
          </Link>
        </article>
        &nbsp;&nbsp;&nbsp;
        <article className="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
          <h5 className="text-3xl font-bold text-pink-600">Premium Plan</h5>

          <h6 className="mt-1 text-sm text-gray-200">
            Perfect for freelancers, who know what they&apos;re doing
          </h6>

          <div className="mt-4 text-white">
            <h6>
              <span className="text-2xl">$</span>
              <span className="inline text-5xl font-bold">9</span>
              <span className="text-xs">/ month</span>
            </h6>

            <p className="text-xs text-gray-100 mt-0.5">Billed Annually</p>
          </div>

          <ul className="mt-8 space-y-2.5 text-white">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Everything in Free and
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Everything in Basic and
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Extra Priority Support
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Project Tracking
            </li>
          </ul>

          <Link href="/onboarding?plan=3">
            <a className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring">
              Let&apos;s Get Started
            </a>
          </Link>
        </article>
      </div>
    </div>
  );
}
