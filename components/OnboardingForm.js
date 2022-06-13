import Link from "next/link";
import Steps from "./Steps";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookies, checkCookies, getCookie } from "cookies-next";

export default function OnboardingForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [passShow, setPassShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const passRef = useRef(null);
  const step_0 = useRef(null);
  const step_1 = useRef(null);
  const step_2 = useRef(null);

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
      }).then((res) =>
        res.json().then((data) => {
          if (data.valid) {
            router.push("/dashboard");
          }
        })
      );
    }
  });

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

    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      step_0.current.style.display = "none";
      step_2.current.style.display = "none";
      step_1.current.style.display = "block";
    } else if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      step_1.current.style.display = "none";
      step_0.current.style.display = "none";
      step_2.current.style.display = "block";
    } else {
      fetch(API_URL + "/register", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          title: title,
          desc: `Hi, I am ${name} and I am a ${title}.`,
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
    }
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
            {currentStep >= 2 ? "Payment" : "Get Started Today"}
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-white">
            {currentStep >= 2
              ? "Do not enter real card information, although these details arenot tracked, it is advised to enter fake info. No money is needed to use this product! Entering real and valid information is at your own risk!"
              : "Sign Up today, to get the most out of Solodustries - your own industry"}
          </p>

          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
            ref={step_0}
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
              Continue
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-pink-600 underline decoration-wavy decoration-pink-500 hover:opacity-75 underline-offset-4">
                  Login
                </a>
              </Link>
            </p>
          </form>
          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl hidden"
            ref={step_1}
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-pink-500"
              >
                Full Name
              </label>

              <div className="relative mt-1">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="name"
                  className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 text-white rounded-lg shadow-sm"
                  placeholder="Enter full name"
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
                htmlFor="title"
                className="text-sm font-medium text-pink-500"
              >
                Job Title
              </label>

              <div className="relative mt-1">
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  id="title"
                  className="w-full p-4 pr-12 text-sm bg-gray-800 border-gray-800 text-white rounded-lg shadow-sm"
                  placeholder="Enter job title"
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
              Continue
            </button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-pink-600 underline decoration-wavy decoration-pink-500 hover:opacity-75 underline-offset-4">
                  Login
                </a>
              </Link>
            </p>
          </form>
          <div className="py-12 text-white md:py-24 hidden" ref={step_2}>
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-pink-600 font-bold"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm bg-gray-800 border-gray-800 w-full text-sm p-2.5"
                    type="text"
                    id="frst_name"
                    placeholder="Enter First Name"
                    required
                  />
                </div>

                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-pink-600 font-bold"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm bg-gray-800 border-gray-800 w-full text-sm p-2.5"
                    type="text"
                    id="last_name"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-pink-600 font-bold"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    value={email}
                    className="rounded-lg shadow-sm bg-gray-800 border-gray-800 w-full text-sm p-2.5"
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    readOnly
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-pink-600 font-bold"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="rounded-lg shadow-sm bg-gray-800 border-gray-800 w-full text-sm p-2.5"
                    type="number"
                    id="phone"
                    placeholder="Enter Phone Number"
                    maxLength={10}
                    required
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-pink-600 font-bold">
                    Card Details
                  </legend>

                  <div className="-space-y-px rounded-lg shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="card-number">
                        Card Number
                      </label>

                      <input
                        className="bg-gray-800 border-gray-800 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        type="text"
                        name="card-number"
                        id="card-number"
                        placeholder="Card number"
                        maxLength={19}
                        minLength={16}
                        required
                      />
                    </div>

                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label
                          className="sr-only"
                          htmlFor="card-expiration-date"
                        >
                          Expiration Date
                        </label>

                        <input
                          className="bg-gray-800 border-gray-800 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="card-expiration-date"
                          id="card-expiration-date"
                          placeholder="MM / YY"
                          required
                        />
                      </div>

                      <div className="flex-1">
                        <label className="sr-only" htmlFor="card-cvc">
                          CVC
                        </label>

                        <input
                          className="bg-gray-800 border-gray-800 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                          type="text"
                          name="card-cvc"
                          id="card-cvc"
                          placeholder="CVV/CVC"
                          maxLength={3}
                          minLength={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-pink-600 font-bold">
                    Billing Address
                  </legend>

                  <div className="-space-y-px rounded-lg shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="bg-gray-800 border-gray-800 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        required
                      >
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Federated States of Micronesia</option>
                        <option>Indian Subcontinent</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>Africa</option>
                        <option>North America</option>
                        <option>South America</option>
                        <option>Antarctica</option>
                        <option>Australia/Oceania</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="bg-gray-800 border-gray-800 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="ZIP/Post Code"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="rounded-lg bg-pink-500 text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Steps step={currentStep} />
    </>
  );
}
