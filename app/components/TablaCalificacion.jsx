// TablaCalificacion.js

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TablaCalificacion = ({ headers, data, onInputChange, onFormSubmit }) => {
  const [activeCell, setActiveCell] = useState(null);

  const handleCellClick = (rowIndex, columnIndex) => {
    setActiveCell({ rowIndex, columnIndex });
  };

  const handleFormSubmit = (e, rowIndex, columnIndex) => {
    e.preventDefault();
    setActiveCell(null);
    onFormSubmit(e, rowIndex, columnIndex);
  };

  const convertToLetterGrade = (calificacion) => {
    if (calificacion >= 90) return "A";
    if (calificacion >= 85) return "B+";
    if (calificacion >= 80) return "B";
    if (calificacion >= 75) return "C+";
    if (calificacion >= 70) return "C";
    if (calificacion >= 60) return "D";
    if(calificacion < 0) return "-";
    return "F";
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ width: 1200, fontFamily: "Poppins", height: 450, overflowX: "hidden", zIndex: 10 }}
      className="drop-shadow-xl rounded-3xl"
    >
      <Table sx={{ width: 1200, height: 100 }} aria-label="simple table">
        <TableHead className="sticky top-0 bg-white" style={{ height: 50 }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell align="center" key={index} sx={{ fontSize: 10, height: 50, fontWeight: "bold" }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ "&:last-child td, &:last-child th": { border: 0 }, height: 50 }} className="bg-gray-100 ">
              {Object.entries(row).map(([key, value], columnIndex) => {
                if (key === "CALIFICACION") {
                  if (activeCell?.rowIndex === rowIndex && activeCell?.columnIndex === columnIndex) {
                    return (
                      <TableCell align="center" key={columnIndex}>
                        <form onSubmit={(e) => handleFormSubmit(e, rowIndex, columnIndex)}>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => onInputChange(rowIndex, columnIndex, e.target.value)}
                            className="w-14 rounded-lg py-1 px-2 text-center font-semibold"
                          />
                          <button type="submit" className="ml-2 text-blue-600 underline">
                            Guardar
                          </button>
                        </form>
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell align="center" key={columnIndex}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                          <span className="mr-2">{value}</span>
                          <span
                            onClick={() => handleCellClick(rowIndex, columnIndex)}
                            className="text-blue-600 underline cursor-pointer"
                            style={{ marginLeft: "12px" }}
                          >
                            Editar
                          </span>
                        </div>
                      </TableCell>
                    );
                  }
                } else if (key === "LETRA") {
                  const calificacion = Number(row["CALIFICACION"]);
                  const letra = convertToLetterGrade(calificacion);
                  return <TableCell align="center" key={columnIndex}>{letra}</TableCell>;
                } else {
                  return <TableCell align="center" key={columnIndex}>{value}</TableCell>;
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaCalificacion;
