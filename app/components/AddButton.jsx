'use client';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AddButton(prop) {
  return (
    <button className={`${prop} addicon`}>
        <AddCircleOutlineIcon />
    </button>
  )
}
