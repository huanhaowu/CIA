'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function addAula(data) {

  const clave = data.get("CLAVE");
  const capacidad = data.get("CAPACIDAD");
  const deshabilitado = false;

  const newAula = await prisma.aula.create({
    data: {
      asignatura_clave: clave,
      capacidad: capacidad,
      deshabilitado: deshabilitado,
    },
  });

  return newAula;
}