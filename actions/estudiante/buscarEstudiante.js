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