'use server'
const prisma = require('@/api/api.js')

export async function addAsignatura(data) {

  const clave = data.get("CLAVE");
  const nombre = data.get("NOMBRE");
  const creditos = Number(data.get("CREDITOS"));
  const deshabilitado = false;

  // validate clave format
  const claveFormat = /^[a-zA-Z]{3}[0-9]{3}$/;
  if (!claveFormat.test(clave)) {
    return { status: 'error', message: 'Formato de clave no válido. Debe ser "LLL000", donde L es una letra y 0 es cualquier número.' };
  }

  // check if asignatura with that clave already exists
  const existingAsignatura = await prisma.asignatura.findUnique({
    where: { asignatura_clave: clave }
  });

  if (existingAsignatura) {
    return { status: 'error', message: 'Ya existe una asignatura con esa clave. Por favor, introduce una clave única.' };
  }

  const newAsignatura = await prisma.asignatura.create({
    data: {
      asignatura_clave: clave,
      nombre: nombre,
      creditos: creditos,
      deshabilitado: deshabilitado,
    },
  });

  return { status: 'success', message: 'Asignatura creada exitosamente', data: newAsignatura };
}
