'use server'
const prisma = require('../../api/api.js')
const { generarVolante} = require('@/actions/estudiante/generarVolante.js')

export async function generarBoletin(year, period, id) {
    console.log("Generando boletin de calificaciones...") 
    const secciones = generarVolante(year, period, id)
    return secciones
}

export async function prepararDataCalificacion(secciones, id_estudiante) {
    let data = [];
    console.log("prueba actual: ", id_estudiante)
    if(secciones !== null && secciones !== undefined && secciones.length !== 0) {
       data = await Promise.all(
      secciones.map(async (item) => {
        const asignatura = await prisma.asignatura.findUnique({
          where: { asignatura_clave: item.asignatura_clave },
        });
  
        let calificacion, califNota, califLetra;
        
        try {
          calificacion = await prisma.calificacion.findFirst({
            where: {
              est_id: Number(id_estudiante),
              seccion_id: Number(item.seccion_id),
            },
            include: {
              estudiante: true,
              seccion: true,
            },
          });
          califNota = calificacion?.calif_num;
          califLetra = calificacion?.calif_letra;
        } catch {
          calificacion = null;
          califNota = null;
          califLetra = null;
        }
        console.log("Calificacion:", calificacion)
        console.log("Calif nota:", califNota)
        console.log("Calif letra:", califLetra)
        let valorLetra
        if(califLetra === 'A'){
          valorLetra = 4
        }
        else if(califLetra === 'B+'){
          valorLetra = 3.5
        }
        else if(califLetra === 'B'){
          valorLetra = 3
        }
        else if(califLetra === 'C+'){
          valorLetra = 2.5
        }
        else if(califLetra === 'C'){
          valorLetra = 2
        }
        else if(califLetra === 'D'){
          valorLetra = 1
        }
        else if(califLetra === 'F'){
          valorLetra = 0
        }
          return {
            CLAVE: item.asignatura_clave,
            SEC: item.numero.toString().padStart(2, '0'),
            ASIGNATURA: asignatura.nombre,
            CRED: asignatura.creditos,
            CALIF: califNota ? califNota : '-',
            LETRA: califLetra ? califLetra : '-',
            PUNTOS: califLetra? valorLetra*asignatura.creditos : '-',
          };
      })
    );
    }
    return data;
  }