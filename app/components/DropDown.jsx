import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Dropdown = ({options = [], onChange}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Select value={selectedOption} onChange={handleChange} className='drop-shadow-xl relative bg-gray-200 rounded-2xl px-2 py-1 mx-2' >
       {options && options.length > 0 && options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </Select>
  );
};

export default Dropdown;
