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