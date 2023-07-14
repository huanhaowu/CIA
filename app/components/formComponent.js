'use client'
import { useState, useRef } from 'react';
import MessageOverlay from './Messager';
import { newPassword } from '@/actions/newPassword';
import { AddAlarmSharp } from '@mui/icons-material';
const { logIn } = require('@/actions/login.js')
const { addStudent } = require('@/actions/admin/createStudent.js')
const { addAdmin } = require('@/actions/admin/createAdmin.js')
const { addTeacher } = require('@/actions/admin/createTeacher.js')
const { addAsignatura } = require('@/actions/admin/createAsignatura.js')
const { addAula } = require('@/actions/admin/createAula.js')
const { addSeccion } = require('@/actions/admin/createSeccion.js')


export default function FormComponent({ fields = {}, showPlaceholder = false, showFieldTitles = false, style, buttonText, buttonStyle, action, h2 }) {

  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  let acc;
  if (action === 'logIn') {
    acc = logIn;
  } else if (action === 'admin') {
    acc = addAdmin;
  } else if (action === 'prof') {
    acc = addTeacher;
  } else if (action === 'estu') {
    acc = addStudent;
  } else if (action === 'newPassword') {
    acc = newPassword;
  } else if (action === 'asignatura') {
    acc = addAsignatura;
  } else if (action === 'aula') {
    acc = addAula;
  } else if (action === 'seccion') {
    acc = addSeccion;
  } {
    console.log('error en seleccion de action');
  }

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Collect form data
      const data = new FormData(e.target.form);

      // Call the action function
      const result = await acc(data);

      // Check the result and set the error or success message
      if (result && result.status === 'error') {
        setErrorMessage(result.message);
      } else if (result && result.status === 'success') {
        setErrorMessage(result.message);
      } else {
        setErrorMessage('');
      }
    } catch (err) {
      setErrorMessage('An unexpected error has occurred');
    }
  };

  console.log(action)
  return (
    <form ref={formRef} action={acc} className="flex h-full w-full flex-col items-center justify-center">
      {errorMessage && <MessageOverlay message={errorMessage} onClose={() => setErrorMessage(null)} />}
      {Object.entries(fields).map(([key, value]) => (
        <div key={key} className="flex w-full justify-start items-center">
          {showFieldTitles && <h2 className={h2}>{key}</h2>}
          <label className={style} style={{

          }}>
            <input
              className="w-full text-lg"
              type={value}
              name={key}
              placeholder={showPlaceholder ? key : ""}
              defaultValue=""
              required
            />
          </label>
        </div>
      ))
      }
      <button className={buttonStyle} onClick={handleClick} type="submit">{buttonText}</button>
    </form >
  );
}
