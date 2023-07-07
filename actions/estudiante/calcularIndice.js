'use server'
const prisma = require('@/api/api.js')

async function calcularIndiceEstudiante(matriculaEstudiante) {
    try {
      const trimestresAprobados = await prisma.historico_Academico.aggregate({
        _count: {
          distinct: {
            id_periodo: true,
          },
        },
        where: {
          id_estudiante: {
            equals: {
              matricula: matriculaEstudiante,
            },
          },
        },
      });
  
      const puntosGeneralesResult = await prisma.historico_Academico.aggregate({
        _sum: {
          puntos_honor: true,
        },
        where: {
          id_estudiante: {
            equals: {
              matricula: matriculaEstudiante,
            },
          },
          id_estado_historico: {
            in: [1, 2],
          },
        },
      });
      const puntosGenerales = puntosGeneralesResult._sum.puntos_honor || 0;
  
      const puntosTrimestreResult = await prisma.historico_Academico.aggregate({
        _sum: {
          puntos_honor: true,
        },
        where: {
          id_estudiante: {
            equals: {
              matricula: matriculaEstudiante,
            },
          },
          id_estado_historico: {
            in: [1, 2],
          },
          seccion: {
            periodo: {
              id_estado_periodo: 3,
            },
          },
        },
      });
      const puntosTrimestre = puntosTrimestreResult._sum.puntos_honor || 0;
  
      const creditosGeneralesResult = await prisma.historico_Academico.aggregate({
        _sum: {
          seccion: {
            asignatura: {
              creditos: true,
            },
          },
        },
        where: {
          id_estudiante: {
            equals: {
              matricula: matriculaEstudiante,
            },
          },
          id_estado_historico: {
            in: [1, 2],
          },
        },
      });
      const creditosGenerales = creditosGeneralesResult._sum.seccion.asignatura.creditos || 0;
  
      const creditosTrimestreResult = await prisma.historico_Academico.aggregate({
        _sum: {
          seccion: {
            asignatura: {
              creditos: true,
            },
          },
        },
        where: {
          id_estudiante: {
            equals: {
              matricula: matriculaEstudiante,
            },
          },
          id_estado_historico: {
            in: [1, 2],
          },
          seccion: {
            periodo: {
              id_estado_periodo: 3,
            },
          },
        },
      });
      const creditosTrimestre = creditosTrimestreResult._sum.seccion.asignatura.creditos || 0;
  
      const indiceGeneral = creditosGenerales !== 0 ? puntosGenerales / creditosGenerales : 0;
      const indiceTrimestral = creditosTrimestre !== 0 ? puntosTrimestre / creditosTrimestre : 0;
  
      await prisma.estudiante.update({
        where: {
          matricula: matriculaEstudiante,
        },
        data: {
          indice_general: indiceGeneral,
          indice_trimestral: indiceTrimestral,
          trimestres_aprobados: trimestresAprobados._count.distinct.id_periodo,
          creditos_aprobados: creditosGenerales,
        },
      });
  
      return indiceGeneral;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
  