'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function logIn(data) {

  const id = data.get("id")
  const clave = data.get("clave")
  const firstNumber = String(id)[0];

  let role;
  if (firstNumber === '1') {
    role = 'estudiante';
  } else if (firstNumber === '2') {
    role = 'profesor';
  } else if (firstNumber === '3') {
    role = 'admin';
  } else {
    console.log('error')
    return null;
  }

  const user = await prisma[role].findUnique({
    where: {
      id: id,
      contrasena: clave
    },
  });
  return user
}
