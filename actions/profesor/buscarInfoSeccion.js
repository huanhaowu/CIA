'use server'
const prisma = require('../../api/api.js')

export async function buscarInfoSeccion(id){

    const seccion = await prisma.seccion.findUnique({
        where: { seccion_id: id },
      });
    const asignatura = await prisma.asignatura.findUnique({
        where: { asignatura_clave: seccion.asignatura_clave },
      });
    const data = {
        numero: seccion.numero,
        asignatura: asignatura.nombre,
        clave: asignatura.asignatura_clave,
    }
      return data
}
