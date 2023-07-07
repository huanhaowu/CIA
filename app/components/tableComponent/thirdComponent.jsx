"use client";
import React from "react";

export default function ThirdTable({ data }) {
  if (data.length === 0) {
    return null;
  }
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#F5F5F5]">
          <th className="text-left px-4 py-2">Clave</th>
          <th className="text-left px-4 py-2">Cupos</th>
          <th className="text-left px-4 py-2">Sec</th>
          <th className="text-left px-4 py-2">Aula</th>
          <th className="text-left px-4 py-2">Docente</th>
          <th className="text-left px-4 py-2">Lun</th>
          <th className="text-left px-4 py-2">Mar</th>
          <th className="text-left px-4 py-2">Mie</th>
          <th className="text-left px-4 py-2">Jue</th>
          <th className="text-left px-4 py-2">Vie</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="px-4 py-2">{row.asignatura_clave}</td>
            <td className="px-4 py-2">{row.Cupos}</td>
            <td className="px-4 py-2">{row.Sec}</td>
            <td className="px-4 py-2">{row.Aula}</td>
            <td className="px-4 py-2">{row.Docente}</td>
            <td className="px-4 py-2">
              {Array.isArray(row.Lun) && row.Lun.length > 0
                ? row.Lun.map(({ inicio, fin }) => `${inicio}/${fin}`).join(
                    ", "
                  )
                : "--/--"}
            </td>
            <td className="px-4 py-2">
              {Array.isArray(row.Mar) && row.Mar.length > 0
                ? row.Mar.map(({ inicio, fin }) => `${inicio}/${fin}`).join(
                    ", "
                  )
                : "--/--"}
            </td>
            <td className="px-4 py-2">
              {Array.isArray(row.Mie) && row.Mie.length > 0
                ? row.Mie.map(({ inicio, fin }) => `${inicio}/${fin}`).join(
                    ", "
                  )
                : "--/--"}
            </td>
            <td className="px-4 py-2">
              {Array.isArray(row.Jue) && row.Jue.length > 0
                ? row.Jue.map(({ inicio, fin }) => `${inicio}/${fin}`).join(
                    ", "
                  )
                : "--/--"}
            </td>
            <td className="px-4 py-2">
              {Array.isArray(row.Vie) && row.Vie.length > 0
                ? row.Vie.map(({ inicio, fin }) => `${inicio}/${fin}`).join(
                    ", "
                  )
                : "--/--"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
