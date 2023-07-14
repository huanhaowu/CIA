'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function addAula(data) {
  const clave = data.get("CLAVE");
  const capacidadString = data.get("CAPACIDAD");
  const deshabilitado = false;

  // Comprobar el formato de la clave
  if (!/^[a-zA-Z]\d{3}$/.test(clave)) {
    return { status: 'error', message: 'La clave debe seguir el formato "x000" donde "x" es cualquier letra y "0" es cualquier número.' };
  }

  // Comprobar si ya existe una aula con la misma clave
  const existingAula = await prisma.aula.findUnique({ where: { aula_clave: clave } });
  if (existingAula) {
    return { status: 'error', message: 'Ya existe una aula con esta clave.' };
  }

  // Comprobar que la capacidad es un número válido
  if (!/^\d+$/.test(capacidadString)) {
    return { status: 'error', message: 'La capacidad debe ser un número.' };
  }

  const capacidad = Number(capacidadString);

  const newAula = await prisma.aula.create({
    data: {
      aula_clave: clave,
      capacidad: capacidad,
      deshabilitado: deshabilitado,
    },
  });

  return { status: 'success', message: 'Aula creada exitosamente', data: newAula };
}
