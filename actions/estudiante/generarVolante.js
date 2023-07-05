'use server'
const prisma = require('../../api/api.js')
import { redirect } from 'next/navigation'
import TablaAula from "@/app/components/TablaAula"

export async function generarVolante(year, period, id) {
 
  const headers = ['CLAVE', 'SEC', 'AULA', 'CRED', 'ASIGNATURA', 'DOCENTE', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'];
  console.log(year)
  console.log(period)
  console.log(id)

  const getMonthStart = (period) => {
    if (period === 1) return '02-01';
    if (period === 2) return '05-01';
    if (period === 3) return '08-01';
    if (period === 4) return '11-01';
    return '';
  };

  
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
              est_id: Number(id)
            }
          }
        }
      }
    });

    console.log(secciones);
    return secciones;	
  
  }
}

export async function prepararData(secciones) {
  const data = await Promise.all(
    secciones.map(async (item) => {
      const asignatura = await prisma.asignatura.findUnique({
        where: { asignatura_clave: item.asignatura_clave },
      });

      const profesor = await prisma.profesor.findUnique({
        where: { prof_id: item.prof_id },
      });

      const horariosSecciones = await prisma.horario_seccion.findMany({
        where: { seccion_id: item.seccion_id },
        include: { horario: true },
      });

      const schedule = {
        Lun: '--/--',
        Mar: '--/--',
        Mier: '--/--',
        Jue: '--/--',
        Vie: '--/--',
        Sab: '--/--',
      };

      horariosSecciones.forEach((horarioSeccion) => {
        const { horario } = horarioSeccion;
        const day = horario.dia;
        const timeStart = horario.hora_inicio.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timeEnd = horario.hora_fin.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timeRange = `${timeStart}/${timeEnd}`;
        schedule[day] = timeRange;
      });
  
      return {
        CLAVE: item.asignatura_clave,
        SEC: item.numero.toString().padStart(2, '0'),
        AULA: item.aula_clave,
        CRED: asignatura.creditos, 
        ASIGNATURA: asignatura.nombre, 
        DOCENTE: profesor.nombres.toString().concat(' ', profesor.apellidos.toString()),
        Lun: schedule.Lun,                                  
        Mar: schedule.Mar,                                  
        Mier: schedule.Mier,                                
        Jue: schedule.Jue,                                  
        Vie: schedule.Vie,                                  
        Sab: schedule.Sab  
      };
    })
  );

  return data;
}
