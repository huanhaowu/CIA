'use server'
const prisma = require('@/api/api.js')

export async function getSeccionesByProfId (profId) {
  const secciones = await prisma.seccion.findMany({
    where: {
      deshabilitado: false,
      prof_id: profId,
    },
  });
  console.log("Secciones: ", secciones)
  return secciones;
};

export async function prepararDataSecciones (secciones){
  let data = [];
  if(secciones !== null && secciones !== undefined && secciones.length !== 0) {
     data = await Promise.all(
    secciones.map(async (item) => {
      const asignatura = await prisma.asignatura.findUnique({
        where: { asignatura_clave: item.asignatura_clave },
      });

      return {
        ID: item.seccion_id,
        CLAVE: item.asignatura_clave,
        SEC: item.numero.toString().padStart(2, '0'),
        ASIGNATURA: asignatura.nombre, 
        CREDITOS: asignatura.creditos, 
        LISTA: 'LISTA',
        CALIF: 'CALIF',
      };
    })
  );
  }
  return data;
};
