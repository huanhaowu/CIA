'use client'

import { useState } from 'react';
const { addAdmin } = require('@/actions/admin/createAdmin.js');
const { addTeacher } = require('@/actions/admin/createTeacher.js')



export default function AddUserForm() {

  const [isAddingAdmin, setIsAddingAdmin] = useState(true);

  const role = isAddingAdmin ? addAdmin : addTeacher


  return (
    <div>
      <button onClick={() => setIsAddingAdmin(!isAddingAdmin)}>
        Cambiar a {isAddingAdmin ? "Agregar Profesor" : "Agregar Administrador"}
      </button>
      <form action={role}>
        <label>
          Nombres:
          <input type="text" name="nombres" required />
        </label>
        <label>
          Apellidos:
          <input type="text" name="apellidos" required />
        </label>
        <label>
          Fecha de nacimiento:
          <input type="date" name="fecha_nac" required />
        </label>
        <label>
          Correo:
          <input type="email" name="correo" required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="contrasena" required />
        </label>
        <button type="submit">{isAddingAdmin ? "Agregar Administrador" : "Agregar Profesor"}</button>
      </form>
    </div>
  );
}
