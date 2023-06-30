'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function addAula(data) {

  const clave = data.get("CLAVE");
  const capacidad = Number(data.get("CAPACIDAD"));
  const deshabilitado = false;

  const newAula = await prisma.aula.create({
    data: {
      aula_clave: clave,
      capacidad: capacidad,
      deshabilitado: deshabilitado,
    },
  });

  return newAula;
}