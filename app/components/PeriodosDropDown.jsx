'use client';
import { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange} className='drop-shadow-xl px-4 py-1 bg-gray-200 rounded-2xl m-10'>
      <option value="" className='text-center text-sm'> - </option>
      <option value="option1" className='text-sm'>Febrero - Abril</option>
      <option value="option2" className='text-sm'>Mayo - Julio</option>
      <option value="option3" className='text-sm'>Agosto - Octubre</option>
      <option value="option4" className='text-sm'>Noviembre - Enero</option>
    </select>
  );
};

export default Dropdown;
