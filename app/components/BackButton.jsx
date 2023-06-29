'use client';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function BackButton() {
  return (
    <button className="bg-white hover:bg-gray-500 hover:text-white text-black-200 font-semibold py-0 px-4 rounded-2xl backbutton shadow-xl"> 
    <ArrowBackIosNewIcon className='w-4 h-4' style={{ marginRight: '0.75rem' }}/> <p>Regresar</p>
    </button>
  )
}