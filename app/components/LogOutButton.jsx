'use client';
import LogoutIcon from '@mui/icons-material/Logout';

function LogOutButton() {
  return (
    <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-2xl">
      Username <LogoutIcon/>
    </button>
  );
}

export default LogOutButton;