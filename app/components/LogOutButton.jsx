'use client';
import LogoutIcon from '@mui/icons-material/Logout';

function LogOutButton({username}) {
  return (
    <button className="logout bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded-2xl w-full mr-1">
      <p>{username}</p> <LogoutIcon className='w-4 h-4' style={{ marginLeft: '0.75rem'}}/>
    </button>
  );
}

export default LogOutButton;