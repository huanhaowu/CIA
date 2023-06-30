'use server'
const prisma = require('@/api/api.js')
const year = 2023; // Replace with the selected year
const period = "option1"; // Replace with the selected period

const secciones = await prisma.seccion.findMany({
  where: {
    trimestre: {
      fecha_inicio: {
        gte: new Date(`${year}-${getMonthStart(period)}`)
      },
      fecha_fin: {
        lte: new Date(`${year}-${getMonthEnd(period)}`)
      }
    },
    estudiantes_secciones: {
      some: {
        estudiante: {
          est_id: estudianteId // Replace with the estudiante's ID
        }
      }
    }
  }
});

console.log(secciones);
