'use client';
import { useState } from 'react';

const PeriodosDropDown = ({onPeriodChange}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onPeriodChange(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className='drop-shadow-xl relative bg-gray-200 rounded-2xl'>
      <option value="" className='text-center text-sm'> Periodo </option>
      <option value="option1" className='text-sm'>Febrero - Abril</option>
      <option value="option2" className='text-sm'>Mayo - Julio</option>
      <option value="option3" className='text-sm'>Agosto - Octubre</option>
      <option value="option4" className='text-sm'>Noviembre - Enero</option>
    </select>
  );
};

export default PeriodosDropDown;