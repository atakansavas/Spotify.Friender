import React from "react";
import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <div>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 60,
        }}
        toastOptions={{
          duration: 2500,
          className: "bg-white text-black text-xs font-semibold p-3",
          style: {
            borderRadius: 15,
            boxShadow: " 0px 0px 30px rgba(88, 80, 180, 0.2)",
          },
        }}
      />
    </div>
  );
}
