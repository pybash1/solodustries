import Link from "next/link"
import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <br />
      <h2 className="text-3xl font-bold text-white text-center">Pricing</h2>
      <br />
      <br />    
      <div className="flex items-center justify-center">
        <article class="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
            <h5 class="text-3xl font-bold text-pink-600">Free Plan</h5>

            <h6 class="mt-1 text-sm text-gray-200">Perfect for individuals who are just starting</h6>

            <div class="mt-4 text-white">
            <h6>
                <span class="text-2xl">$</span>
                <span class="inline text-5xl font-bold">0</span>
                <span class="text-xs">/ month</span>
            </h6>

            <p class="text-xs text-gray-100 mt-0.5">Billed Annually</p>
            </div>

            <ul class="mt-8 space-y-2.5 text-white">
            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Client Management
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Expense Management
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Resource Management
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Upcoming Updates
            </li>
            </ul>

            <Link href="/onboarding?plan=1">
                <a
                    class="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                >
                    Let's Get Started
                </a>
            </Link>
        </article>
        &nbsp;&nbsp;&nbsp;
        <article class="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
            <h5 class="text-3xl font-bold text-pink-600">Basic Plan</h5>

            <h6 class="mt-1 text-sm text-gray-200">Perfect for Freelancers with some experience</h6>

            <div class="mt-4 text-white">
            <h6>
                <span class="text-2xl">$</span>
                <span class="inline text-5xl font-bold">9</span>
                <span class="text-xs">/ month</span>
            </h6>

            <p class="text-xs text-gray-100 mt-0.5">Billed Annually</p>
            </div>

            <ul class="mt-8 space-y-2.5 text-white">
            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Everything in Free and
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Priority Support
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Calendar Integration
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Promotion
            </li>
            </ul>

            <Link href="/onboarding?plan=2">
                <a
                    class="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                >
                    Let's Get Started
                </a>
            </Link>
        </article>
        &nbsp;&nbsp;&nbsp;
        <article class="block p-6 text-center shadow-xl bg-gray-800 rounded-xl">
            <h5 class="text-3xl font-bold text-pink-600">Premium Plan</h5>

            <h6 class="mt-1 text-sm text-gray-200">Perfect for freelancers, who know what they're doing</h6>

            <div class="mt-4 text-white">
            <h6>
                <span class="text-2xl">$</span>
                <span class="inline text-5xl font-bold">9</span>
                <span class="text-xs">/ month</span>
            </h6>

            <p class="text-xs text-gray-100 mt-0.5">Billed Annually</p>
            </div>

            <ul class="mt-8 space-y-2.5 text-white">
            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Everything in Free and
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Everything in Basic and
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Extra Priority Support
            </li>

            <li>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-6 h-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                />
                </svg>
                Project Tracking
            </li>
            </ul>

            <Link href="/onboarding?plan=3">
                <a
                    class="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                >
                    Let's Get Started
                </a>
            </Link>
        </article>
      </div>
    </div>
  );
}
