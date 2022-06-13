import Head from "next/head";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="bg-gray-900 min-h-screen h-full">
      <Head>
        <title>Solodustries - Onboarding</title>
      </Head>
      <Navbar />
      <LoginForm />
    </div>
  );
}
