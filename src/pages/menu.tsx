import * as React from "react";
import Toolbar from "~/components/Toolbar";
export default function Menu() {
  return (
    <div className="h-screen w-screen bg-background text-white">
      <Toolbar />
      <div className="flex flex-wrap p-4">
        <div className="w-1/2">
          <div className="flex flex-row pt-4">
            {/*<h1 className="text-4xl">Your trips</h1>*/}
            {/*<div className="">*/}
            {/*  <img src="/gustavo.png" className="h-6 mr-3 h-9 rounded-full" alt="Gustavo" />*/}
            {/*</div>*/}
            <h1 className="text-4xl">Your Trips</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
