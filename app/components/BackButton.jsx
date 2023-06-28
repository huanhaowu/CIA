'use client';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function BackButton() {
  return (
    <button className="bg-white hover:bg-gray-500 hover:text-white text-black-200 font-semibold py-2 px-3 rounded-2xl custom-position"> 
    <ArrowBackIosNewIcon/>  Regresar
    </button>
  )
}