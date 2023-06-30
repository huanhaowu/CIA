"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function CancelButton() {
  return (
    <button
      style={{
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
      class=" bg-white hover:bg-gray-200 text-base text-black font-bold py-3 px-6 rounded-3xl m-2"
    >
      Cancel
    </button>
  );
}

export default CancelButton;
