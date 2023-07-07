'use server'
const prisma = require('@/api/api.js')

// Function to retrieve students by seccion_id
export async function getStudentsBySeccionId (seccionId){
  try {
    const students = await prisma.estudiante.findMany({
      where: {
        estudiantes_secciones: {
          some: {
            seccion_id: seccionId,
          },
        },
      },
    });

    return students;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};

export async function prepararDataEstudiantes (estudiantes, tipo_reporte, seccion_id){
  let data = [];
  if(estudiantes !== null && estudiantes !== undefined && estudiantes.length !== 0) {
     data = await Promise.all(
      estudiantes.map(async (item) => {
      if(tipo_reporte === 'lista'){
        const programa = await prisma.programa.findUnique({
          where: { programa_id: item.programa_id },
        });
        return {
          ESTUDIANTE_ID: item.est_id,
          NOMBRE: item.nombres + ' ' + item.apellidos,
          CORREO: item.correo,
          PROGRAMA: programa.nombre,
        };
      }
      else if (tipo_reporte === 'calificaciones'){
        const programa = await prisma.programa.findUnique({
          where: { programa_id: item.programa_id },
        });
        const calificacion = await prisma.calificacion.findFirst({
          where: {
            est_id: item.est_id,
            seccion_id: seccion_id,
          }
        });
        const calif_num = calificacion ? calificacion.calif_num : -1;
        const calif_letra = calificacion ? calificacion.calif_letra : '-';
        return {
          ESTUDIANTE_ID: item.est_id,
          NOMBRE: item.nombres + ' ' + item.apellidos,
          CORREO: item.correo,
          PROGRAMA: programa.nombre,
          CALIFICACION: calif_num,
          LETRA: calif_letra,
        };
      } 
    })
  );
  }
  return data;
};
