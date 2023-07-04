'use server'
import { redirect } from 'next/navigation'
const prisma = require('@/api/api.js')
import { cookies } from 'next/headers'

export async function logIn(data) {
  const id = data.get("ID")
  const clave = data.get("Password")
  const firstNumber = String(id)[0];

  let role;
  let idrole;
  if (firstNumber === '1') {
    role = 'estudiante';
    idrole = 'est_id';
  } else if (firstNumber === '2') {
    role = 'profesor';
    idrole = 'prof_id';
  } else if (firstNumber === '3') {
    role = 'admin';
    idrole = 'adm_id'
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
    cookies().set('userId', id)
    redirect(`/${role}?id=${id}`)
  } else {
    console.log('error en action')
  }
}