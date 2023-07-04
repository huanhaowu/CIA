"use client";
import { useState } from "react";
import ThirdTable from "./thirdComponent";

export default function SecondTable({ row, style1 }) {
  const [isOpen, setIsOpen] = useState(false);
  const headers = Object.keys(row).filter((header) => header !== "data");

  return (
    <>
      <tr className={` ${style1}`}>
        {headers.map((header, index) => (
          <td key={index} className={`text-white px-4 py-2 `}>
            <div>{row[header]}</div>
          </td>
        ))}
        <td className="text-white px-4 py-2">
          <button onClick={() => setIsOpen(!isOpen)}>+</button>
        </td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={headers.length + 1}>
            <ThirdTable data={row.data} />
          </td>
        </tr>
      )}
    </>
  );
}
