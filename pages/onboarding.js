import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import OnboardingForm from "../components/OnboardingForm";
import { checkCookies, getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Onboarding() {
  const router = useRouter();
  const { plan } = router.query;

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

  return (
    <div className="bg-gray-900 min-h-screen h-full">
      <Head>
        <title>Solodustries - Onboarding</title>
      </Head>
      <Navbar />
      {plan == null ? (
        <OnboardingForm />
      ) : plan == undefined ? (
        <OnboardingForm />
      ) : plan == 1 ? (
        <OnboardingForm />
      ) : plan == 2 ? (
        <OnboardingForm />
      ) : plan == 3 ? (
        <OnboardingForm />
      ) : (
        <div className="flex items-center justify-center text-5xl font-bold text-white p-48">
          Invalid Plan Selected
        </div>
      )}
    </div>
  );
}
