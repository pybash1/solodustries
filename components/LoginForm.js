import Link from "next/link";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, checkCookies, setCookies } from "cookies-next";

export default function OnboardingForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passShow, setPassShow] = useState(false);

  const passRef = useRef(null);
  const router = useRouter();

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
      }).then(res => res.json().then(
        data => {
          if (data.valid) {
            router.push("/dashboard");
          }
        }
      ))
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+\.[a-zA-Z0-9\.]+/.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!/.{6,}$/.test(password)) {
      toast.error("Invalid Password! Must be at least 8 characters long!");
      return;
    }

    fetch(API_URL + "/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        if (data.message) {
          toast.error(data.message);
          return;
        } else {
          setCookies("access_token", data.access_token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
          });
          router.push("/dashboard");
        }
      })
    );
  };

  const showPass = (e) => {
    e.preventDefault();
    passRef.current.type = passShow === true ? "password" : "text";
    setPassShow(!passShow);
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-white sm:text-3xl">
            Welcome Back
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-white">
            Enter your email and password to login to your account.
          </p>

          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-pink-500"
              >
                Email
              </label>

              <div className="relative mt-1">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 text-white rounded-lg shadow-sm"
                  placeholder="Enter email"
                  required
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
              <label
                htmlFor="password"
                className="text-sm font-medium text-pink-500"
              >
                Password
              </label>

              <div className="relative mt-1">
                <input
                  ref={passRef}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 text-white rounded-lg shadow-sm"
                  placeholder="Enter password"
                  required
                />

                <span
                  onClick={showPass}
                  className="cursor-pointer absolute inset-y-0 inline-flex items-center right-4"
                >
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-pink-600 rounded-lg"
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/pricing">
                <a className="text-pink-600 underline decoration-wavy decoration-pink-500 hover:opacity-75 underline-offset-4">
                  Sign Up
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
