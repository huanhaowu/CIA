"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function BackButton() {
  return (
    <button className="bg-white hover:bg-gray-500 z-20 text-black-200 font-semibold hover:text-white py-2 px-3 rounded-2xl mr-1 backbutton">
      <ArrowBackIosNewIcon
        className="w-4 h-4"
        style={{ marginRight: "0.75rem" }}
      />
    </button>
  );
}

