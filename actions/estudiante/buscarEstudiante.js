'use server'
const prisma = require('../../api/api.js')

export async function buscarEstudiante(id) {
    console.log("Buscando estudiante...")
    let studentData
        try {
          studentData = await prisma.estudiante.findUnique({
            where: { est_id: id },
            select: {
              nombres: true,
              programa: { select: { nombre: true } },
              carrera: { select: { nombre: true } }
            }
          });
        } catch (error) {
          console.error('Error fetching student:', error);
        }
        console.log("Estudiante encontrado:", studentData)
    return studentData
}

export async function buscarEstudianteHome(id) {
  console.log("Buscando estudiante...")
    let studentData
        try {
          studentData = await prisma.estudiante.findUnique({
            where: { est_id: id },
            select: {
              est_id: true,
              nombres: true,
              apellidos: true,
              programa: { select: { nombre: true, creditos: true } },
              carrera: { select: { nombre: true } },
              fecha_reg: true,
              indice: true,
              creditos_aprobados: true,
              calificaciones: {
                select: {
                  calificacion_id: true,
                  calif_num: true,
                  calif_letra: true,
                  seccion: {
                    select: {
                      seccion_id: true,
                      trimestre_id: true,
                      asignatura_clave: true,
                      numero: true,
                      prof_id: true,
                      modalidad_id: true,
                      cupos_totales: true,
                      cupos_disp: true,
                      aula_clave: true,
                      deshabilitado: true,
                      fecha_reg: true
                    }
                  }
                }
              }
            }
          });
        } catch (error) {
          console.error('Error fetching student:', error);
        }
        console.log("Estudiante encontrado:", studentData)
  return studentData
}

export async function buscarRanking() {
  let ranking = await prisma.estudiante.findMany({
    select: {
      programa: { select: { nombre: true } },
      carrera: { select: { nombre: true } },
      nombres: true,
      est_id: true,
      indice: true,
    },
    orderBy: {
      indice: 'desc',
    },
    take: 10,
  });

  return ranking;
}

// export async function prepararDataCalificacion(ranking) {
//   let datos = [];
//   if (ranking !== null && ranking !== undefined && ranking.length !== 0) {
//     datos = await Promise.all(
//       ranking.map(async (item) => {
//         const Carrera = await prisma.ranking.findUnique({
//           where: { carrera: item.asignatura_clave },
//         });

//         let calificacion, califNota, califLetra;

//         try {
//           calificacion = await prisma.calificacion.findUnique({
//             where: { seccion_id: Number(item.seccion_id) },
//           });
//           califNota = calificacion.calif_num;
//           califLetra = calificacion.calif_letra;
//         } catch {
//           calificacion = null;
//           califNota = null;
//           califLetra = null;
//         }

//         let valorLetra;
//         if (califLetra === 'A') {
//           valorLetra = 4;
//         } else if (califLetra === 'B+') {
//           valorLetra = 3.5;
//         } else if (califLetra === 'B') {
//           valorLetra = 3;
//         } else if (califLetra === 'C+') {
//           valorLetra = 2.5;
//         } else if (califLetra === 'C') {
//           valorLetra = 2;
//         } else if (califLetra === 'D') {
//           valorLetra = 1;
//         } else if (califLetra === 'F') {
//           valorLetra = 0;
//         }
//         return {
//           CLAVE: item.asignatura_clave,
//           SEC: item.numero.toString().padStart(2, '0'),
//           ASIGNATURA: asignatura.nombre,
//           CRED: asignatura.creditos,
//           CALIF: califNota ? califNota : '-',
//           LETRA: califLetra ? califLetra : '-',
//           PUNTOS: califLetra ? valorLetra * asignatura.creditos : '-',
//         };
//       })
//     );
//   }
//   return data;
// }