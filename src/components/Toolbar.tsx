import * as React from "react";
import { useRouter } from "next/router";

export default function Toolbar() {
  const router = useRouter();

  return (
    <nav className="border-gray-200 bg-toolbar_background  p-3 shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-8">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => {
            router.push("/menu");
          }}
        >
          <img src="/logo.png" className="mr-3 h-6 h-9" alt="Trippler Logo" />
          <span className="self-center text-xl font-semibold text-white">
            Trippler
          </span>
        </div>
        <div className="flex md:order-2">
          <img
            src="/gustavo.png"
            className="mr-3 h-6 h-9 rounded-full"
            alt="Gustavo"
          />
        </div>
      </div>
    </nav>
  );
}
