'use client'
import { useState } from "react"

export default function FiltroUsuarios(){
    const [user, setUser] = useState('admin')
  const buttonState = 'text-sm p-3 px-10 animate duration-300 hover:bg-[#4B63FD] hover:text-white'

  const buttonColorA = user === 'admin' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'
  const buttonColorD = user === 'prof' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'
  const buttonColorE = user === 'estu' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'
    return(
        <div className="mb-6 font-mono">
            <button className={`${buttonState} ${buttonColorA} rounded-l-lg`} onClick={() => setUser('admin')}>Administrador</button>
            <button className={`${buttonState} ${buttonColorD}`} onClick={() => setUser('prof')}>Docente</button>
            <button className={`${buttonState} ${buttonColorE} rounded-r-lg`} onClick={() => setUser('estu')}>Estudiante</button>
        </div>
    )
}
