'use server'
const prisma = require('@/api/api.js')

const getMonthStart = (period) => {
  if (period === 1) return '02-01';
  if (period === 2) return '05-01';
  if (period === 3) return '08-01';
  if (period === 4) return '11-01';
  return '';
};

export async function generarReporte(year, period, id) {
  const trimestre = await prisma.trimestre.findFirst({
    where: {
      fecha_inicio: {
        gte: new Date(`${year}-${getMonthStart(period)}`)
      }
    },
    orderBy: {
      fecha_inicio: 'asc'
    }
  });

  if (trimestre) {
    const secciones = await prisma.seccion.findMany({
      where: {
        trimestre_id: trimestre.trimestre_id,
        estudiantes_secciones: {
          some: {
            estudiante: {
              est_id: id
            }
          }
        }
      }
    });

    console.log(secciones);
  } else {
    console.log('No trimestre found for the selected year and period.');
  }
}

