import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "🍷🗿" });

  return (
    <>
      <Head>
        <title>Travel App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-600 to-gray-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            IPTeta <span className="text-gray-900">Travel</span> App
          </h1>
          <div className="w-full max-w-screen-xl sm:w-2/3 md:w-2/3 lg:w-2/3">
            <div className="border-tdgreen relative overflow-hidden rounded-lg border-2 border-solid shadow drop-shadow-md">
              <div className="flex items-center justify-center">
                <iframe
                  width="1000"
                  height="500"
                  src="https://www.youtube.com/embed/yxq0ZnjEENs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
