"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CreateIcon from '@mui/icons-material/Create';
const {disableEntity} = require('@/actions/deshabilitar.js')
import DeleteIcon from '@mui/icons-material/Delete';

const TablaCalificacion = ({ headers, data, entity}) => {
  
  const handleDelete = (id) => {
    console.log(id);
    disableEntity(entity, id);
  };

  /* FUNCIONES PARA EL FORMS 
  function handleInputChange(rowIndex, columnIndex, newValue) {
  Update the corresponding value in the data array with the new value
    data[rowIndex][columnIndex] = newValue;
  }
  
  function handleFormSubmit(e, rowIndex, columnIndex) {
    e.preventDefault();
  Handle the form submission if needed
  For example, you can perform validation or send the updated data to a server
  console.log('Form submitted!');
  } */
  

  return (
    <TableContainer component={Paper} sx={{ width: 1200, fontFamily: 'Poppins', height: 450, overflowX: 'hidden', zIndex: 10}} className='drop-shadow-xl rounded-3xl'>
      <Table sx={{ width: 1200, height: 100 }} aria-label="simple table">
        <TableHead className='sticky top-0 bg-white' style={{height: 50}}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell align="center" key={index} sx={{fontSize: 10, height: 50, fontWeight: 'bold'}}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 50}} className='bg-gray-100 '>
              {Object.values(row).map((value, columnIndex) => (
                <TableCell align="center" key={columnIndex}>
                  {Number.isInteger(value) && value >= 0 && value <= 100 || value === null ? (
                  <form onSubmit={(e) => console.log('funciona')
                  // handleFormSubmit(e, rowIndex, columnIndex)
                  }>
                    <input type="text" value={value} onChange={(e) => console.log('funciona')
                      // handleInputChange(rowIndex, columnIndex, e.target.value)
                      } className='w-14 rounded-lg py-1 px-2 text-center font-semibold'/>
                    <button type="submit"></button>
                  </form> )
                  : (value)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaCalificacion;