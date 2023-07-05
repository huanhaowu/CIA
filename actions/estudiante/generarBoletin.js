'use server'
const prisma = require('../../api/api.js')
const { generarVolante} = require('@/actions/estudiante/generarVolante.js')

export async function generarBoletin(year, period, id) {
    console.log("Generando boletin de calificaciones...") 
    const secciones = generarVolante(year, period, id)
    return secciones
}

export async function prepararDataCalificacion(secciones) {
    let data = [];
    if(secciones !== null && secciones !== undefined && secciones.length !== 0) {
       data = await Promise.all(
      secciones.map(async (item) => {
        const asignatura = await prisma.asignatura.findUnique({
          where: { asignatura_clave: item.asignatura_clave },
        });
  
        const profesor = await prisma.profesor.findUnique({
          where: { prof_id: item.prof_id },
        });

        let calificacion, califNota, califLetra;
        
        try{
            calificacion = await prisma.calificacion.findUnique({
                where: { seccion_id: Number(item.seccion_id) },
              });
            califNota = calificacion.nota;
            califLetra = calificacion.letra;
        }
        catch{
            calificacion = null;
            califNota = null;
            califLetra = null;
        }
        
  
          return {
            CLAVE: item.asignatura_clave,
            SEC: item.numero.toString().padStart(2, '0'),
            AULA: item.aula_clave,
            CRED: asignatura.creditos,
            ASIGNATURA: asignatura.nombre,
            DOCENTE: profesor.nombres.toString().concat(' ', profesor.apellidos.toString()),
            CALIF: califNota ? califNota : '-',
            LETRA: califLetra ? califLetra : '-',
          };
      })
    );
    }
    return data;
  }