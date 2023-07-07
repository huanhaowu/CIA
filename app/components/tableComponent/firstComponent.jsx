"use client";
import { useState } from "react";
import React from "react";

export default function TablaInifinita({
  data,
  level = 0,
  onRowSelect,
  parentData,
}) {
  const firstRow = data[0] || {};
  const headers = Object.keys(firstRow).filter(
    (header) => header !== "data" && header !== "Id"
  );

  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (index, event) => {
    event.stopPropagation();
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  function handleRowClick(row, index, parentData, event) {
    event.stopPropagation();
    const newData = {
      asignatura_clave: parentData.asignatura_clave,
      ...row,
    };
    onRowSelect(newData);
  }

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
          {level === 1 && <th className="bg-[#f5f5f5] px-4 py-2"></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr className={`recursive-table-level-${level}`}>
              {headers.map((header, index) => (
                <td key={index} className={` px-4 py-2`}>
                  {Array.isArray(row[header])
                    ? row[header].length > 0
                      ? row[header]
                          .map(({ inicio, fin }) => `${inicio}/${fin}`)
                          .join(", ")
                      : "--/--"
                    : row[header]}
                </td>
              ))}
              {level === 0 && (
                <td className={` px-4 py-2`}>
                  <button onClick={() => toggleOpen(rowIndex, event)}>+</button>
                </td>
              )}
              {level === 1 && (
                <td className={` px-4 py-2`}>
                  <button
                    onClick={() =>
                      handleRowClick(row, rowIndex, parentData, event)
                    }
                  >
                    +
                  </button>
                </td>
              )}
            </tr>
            {isOpen[rowIndex] && row.data && (
              <tr>
                <td colSpan={headers.length + 1}>
                  <TablaInifinita
                    data={row.data}
                    level={level + 1}
                    onRowSelect={onRowSelect}
                    parentData={row}
                  />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
