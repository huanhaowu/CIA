'use server'

import { redirect } from 'next/navigation'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export async function logIn(data) {
  console.log(data)
  const id = data.get("ID")
  const clave = data.get("Password")
  const firstNumber = String(id)[0];

  let role;
  let idrole;
  if (firstNumber === '1') {
    role = 'estudiante';
    idrole = 'est_id';
  } else if (firstNumber === '2') {
    role = 'admin';
    idrole = 'adm_id'
  } else if (firstNumber === '3') {
    role = 'profesor';
    idrole = 'prof_id';
  } else {
    console.log('error')
    return null;
  }

  const user = await prisma[role].findUnique({
    where: {
      [idrole]: Number(id)
    },
  });

  if (user && user.contrasena === clave) {
    redirect(`/${role}`)
  } else {
    console.log('error en action')
  }
}