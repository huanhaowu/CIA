"use client";
import { useState } from "react";
import React from "react";

export default function TablaInifinita({ data, level = 0 }) {
  const headers = Object.keys(data[0]).filter((header) => header !== "data");
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <table className={`recursive-table`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={`recursive-table-level-${level} text-left px-4 py-2`}
            >
              {header}
            </th>
          ))}
          {level === 0 && <th className="px-4 py-2"></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr className={`recursive-table-level-${level}`}>
              {headers.map((header, index) => (
                <td key={index} className={` px-4 py-2`}>
                  {row[header]}
                </td>
              ))}
              {level === 0 && (
                <td className={` px-4 py-2`}>
                  <button onClick={() => toggleOpen(rowIndex)}>+</button>
                </td>
              )}
            </tr>
            {isOpen[rowIndex] && row.data && (
              <tr>
                <td colSpan={headers.length + 1}>
                  <TablaInifinita data={row.data} level={level + 1} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
