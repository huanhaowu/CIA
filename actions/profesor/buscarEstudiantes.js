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

export async function prepararDataEstudiantes (estudiantes, tipo_reporte){
  let data = [];
  if(estudiantes !== null && estudiantes !== undefined && estudiantes.length !== 0) {
     data = await Promise.all(
      estudiantes.map(async (item) => {
      if(tipo_reporte === 'lista'){
        return {
          UID: item.est_id,
          NOMBRE: item.nombres + ' ' + item.apellidos,
          CORREO: item.correo,
          PROGRAMA: item.programa.nombre,
        };
      }
      else if (tipo_reporte === 'calificaciones'){

      }

      
    })
  );
  }
  return data;
};
