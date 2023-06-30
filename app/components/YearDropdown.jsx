'use client';
import { useState, useEffect } from 'react';
const prisma = require('@/api/api.js')

const YearDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const studentId = '1000000'; // Replace with the actual student ID
        if (studentId !== '') {
          const studentYears = await prisma.estudiante_seccion.findMany({
            select: {
              seccion: {
                select: {
                  trimestre: {
                    select: {
                      fecha_inicio: true
                    }
                  }
                }
              }
            },
            where: {
              est_id: studentId,
            },
            distinct: ['seccion.trimestre.fecha_inicio'],
          });

          const formattedYears = studentYears.map((year) => year.seccion.trimestre.fecha_inicio.getFullYear());
          setYears(formattedYears);
        } else {
          setYears([]);
        }
      } catch (error) {
        console.error('Error fetching years:', error);
      }
    };

    fetchYears();
  }, []);

  const handleChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedOption(selectedYear);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className='drop-shadow-xl relative px-4 h-10 py-1 bg-gray-200 rounded-2xl m-10'>
      <option value="" className='text-center text-sm'>Año</option>
      {years.map((year, index) => (
        <option key={index} value={year} className='text-sm'>{year}</option>
      ))}
    </select>
  );
};

export default YearDropdown;
