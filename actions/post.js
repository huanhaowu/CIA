'use server'
const prisma = require('@/api/api.js')

export async function addPost(data) {

  const asignatura_clave = data.get("asignatura_clave")
  const nombre = data.get("nombre")
  const creditos = data.get("creditos")
  const deshabilitado = data.get("deshabilitado")

  const newPost = await prisma.asignatura.create({
    data: {
      asignatura_clave: asignatura_clave,
      nombre: nombre,
      creditos: parseInt(creditos),
      deshabilitado: Boolen(deshabilitado),
    },
  });
  return newPost
}
