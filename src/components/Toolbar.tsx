import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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
          <Image
            src="/logo.png"
            className="mr-3 h-6 h-9"
            alt="Tripplyn Logo"
            width={40}
            height={40}
          />
          <span className="self-center text-xl font-semibold text-white">
            Tripplyn
          </span>
        </div>
        <div className="flex md:order-2">
          <Image
            src="/gustavo.png"
            className="mr-3 h-6 h-9 rounded-full"
            alt="Gustavo"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
}
