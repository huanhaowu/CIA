"use client";
import { useState } from "react";
import SecondTable from "./secondComponent";

export default function FirstTable({ data, style1 }) {
  const headers = Object.keys(data[0]).filter((header) => header !== "data");

  return (
    <table className={`w-full `}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={`text-left px-4 py-2`}>
              {header}
            </th>
          ))}
          <th className=" px-4 py-2">+</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <SecondTable key={rowIndex} row={row} style1={style1} />
        ))}
      </tbody>
    </table>
  );
}
