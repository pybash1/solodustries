import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import OnboardingForm from "../components/OnboardingForm";

export default function Onboarding() {

  return (
    <div className="bg-gray-900 min-h-screen h-full">
      <Head>
        <title>Solodustries - Onboarding</title>
      </Head>
      <Navbar />
      <OnboardingForm />
    </div>
  );
}
