'use server'
import { redirect } from 'next/navigation'
const prisma = require('@/api/api.js')
import { cookies } from 'next/headers'

export async function logIn(data) {
  const id = data.get("ID")
  const clave = data.get("Password")

  if (!id || !clave) {
    console.log('Error: Invalid fields')
    return { status: 'error', message: 'Campos inválidos.' };
  }

  const firstNumber = String(id)[0];
  let role, idrole;

  switch (firstNumber) {
    case '1':
      role = 'estudiante';
      idrole = 'est_id';
      break;
    case '2':
      role = 'profesor';
      idrole = 'prof_id';
      break;
    case '3':
      role = 'admin';
      idrole = 'adm_id';
      break;
    default:
      console.log('Error: Invalid fields')
      return { status: 'error', message: 'Campos inválidos.' };
  }

  const user = await prisma[role].findUnique({
    where: {
      [idrole]: Number(id)
    },
  });

  if (user && user.contrasena === clave) {
    cookies().set('userId', id)
    return { status: 'login', redirectUrl: `/${role}?id=${id}` };
  } else {
    console.log('Error: Invalid credentials')
    return { status: 'error', message: 'Credenciales inválidas.' };
  }
}
