
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const Dropdown = ({options = [], onChanges, selectedOption}) => {

  return (
    <Select value={selectedOption} onChange={onChanges} className='drop-shadow-xl relative bg-gray-200 rounded-2xl px-2 py-1 mx-2' >
       {options && options.length > 0 && options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </Select>
  );
};

export default Dropdown;
