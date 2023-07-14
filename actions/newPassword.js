'use server'
import { redirect } from 'next/navigation'
const prisma = require('@/api/api.js')

export async function newPassword(data) {
  const id = data.get("ID")
  const clave = data.get("Password")
  const newClave = data.get("NewPassword")
  const firstNumber = String(id)[0];

  let role;
  let idrole;

  if (firstNumber === '1') {
    role = 'estudiante';
    idrole = 'est_id';
  } else if (firstNumber === '2') {
    role = 'profesor';
    idrole = 'prof_id'
  } else if (firstNumber === '3') {
    role = 'admin';
    idrole = 'adm_id';
  } else {
    console.log('error')
    return { status: 'error', message: 'Campos invalidos' };
  }

  const user = await prisma[role].findUnique({
    where: {
      [idrole]: Number(id)
    },
  });

  if (user && user.contrasena === clave) {
    await prisma[role].update({
      where: {
        [idrole]: Number(id)
      },
      data: {
        contrasena: newClave
      }
    });
    redirect(`/`);
  } else {
    console.log('error en action');
    return { status: 'error', message: 'Invalid credentials' };
  }
}
