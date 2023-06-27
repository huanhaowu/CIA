const { addStudent } = require('@/actions/admin.js');  // Reemplaza con la ruta correcta

export default function AddStudentForm() {

  return (
    <form action={addStudent}>
      <label>
        Nombres:
        <input type="text" name="nombres" required />
      </label>
      <label>
        Apellidos:
        <input type="text" name="apellidos" required />
      </label>
      <label>
        Fecha de Nacimiento:
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
      <label>
        ID de Carrera:
        <input type="number" name="carrera_id" required />
      </label>
      <label>
        ID del Programa:
        <input type="number" name="programa_id" required />
      </label>
      <button type="submit">Agregar Estudiante</button>
    </form>
  );
}
