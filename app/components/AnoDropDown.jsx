'use client';
import { useState } from 'react';

const AnoDropdown = ({onYearChange}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onYearChange(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className='drop-shadow-xl relative bg-gray-200 rounded-2xl px-2 py-1 mx-2' >
      <option value="" className='text-center text-sm'> Años </option>
      <option value="2023" className='text-sm'>2023</option>
      <option value="2022" className='text-sm'>2022</option>
      <option value="2021" className='text-sm'>2021</option>
      <option value="2020" className='text-sm'>2020</option>
    </select>
  );
};

export default AnoDropdown;