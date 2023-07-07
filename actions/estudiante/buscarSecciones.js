'use server'
const prisma = require('../../api/api.js')

export async function getAsignaturas() {
  const asignaturas = await prisma.asignatura.findMany({
    select: {
      asignatura_clave: true,
      nombre: true,
      creditos: true
    }
  });

  for (const asignatura of asignaturas) {
    const secciones = await prisma.seccion.findMany({
      where: { asignatura_clave: asignatura.asignatura_clave },
      select: {
        cupos_disp: true,
        seccion_id: true,
        numero: true,
        aula_clave: true,
        profesor: {
          select: {
            nombres: true
          }
        },
        horarios_secciones: {
          select: {
            horario: {
              select: {
                dia: true,
                hora_inicio: true,
                hora_fin: true
              }
            }
          }
        }
      }
    });

    asignatura.data = secciones.map(s => ({
      Id: s.seccion_id,
      Cupos: s.cupos_disp,
      Sec: s.numero,
      Aula: s.aula_clave,
      Docente: s.profesor.nombres,
      Lun: s.horarios_secciones.filter(h => h.horario.dia === 'L').map(h => ({ inicio: new Date(h.horario.hora_inicio).getUTCHours(), fin: new Date(h.horario.hora_fin).getUTCHours() })),
      Mar: s.horarios_secciones.filter(h => h.horario.dia === 'M').map(h => ({ inicio: new Date(h.horario.hora_inicio).getUTCHours(), fin: new Date(h.horario.hora_fin).getUTCHours() })),
      Mie: s.horarios_secciones.filter(h => h.horario.dia === 'X').map(h => ({ inicio: new Date(h.horario.hora_inicio).getUTCHours(), fin: new Date(h.horario.hora_fin).getUTCHours() })),
      Jue: s.horarios_secciones.filter(h => h.horario.dia === 'J').map(h => ({ inicio: new Date(h.horario.hora_inicio).getUTCHours(), fin: new Date(h.horario.hora_fin).getUTCHours() })),
      Vie: s.horarios_secciones.filter(h => h.horario.dia === 'V').map(h => ({ inicio: new Date(h.horario.hora_inicio).getUTCHours(), fin: new Date(h.horario.hora_fin).getUTCHours() }))
    }));
  }

  return asignaturas;
}
