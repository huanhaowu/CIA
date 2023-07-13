'use server'
// Import the necessary Prisma models and functions
const prisma = require('@/api/api.js');
// ... your existing functions ...

// Function to retrieve and format the data'
export async function getAllStudents() {
    try {
      const students = await prisma.estudiante.findMany();
      return students;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
  
  // Function to retrieve all professors
export async function getAllProfessors() {
    try {
      const professors = await prisma.profesor.findMany();
      return professors;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
}
  
  // Function to retrieve all admins
export async function getAllAdmins() {
    try {
      const admins = await prisma.admin.findMany();
      return admins;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
}

export async function getAllData() {
  try {
    const students = await getAllStudents();
    const professors = await getAllProfessors();
    const admins = await getAllAdmins();

    const data = [];

    // Format students data
    students.forEach((student) => {
      data.push({
        USER_ID: student.est_id,
        NOMBRE: `${student.nombres} ${student.apellidos}`,
        CORREO: student.correo,
        FECHA: student.fecha_reg.toISOString(),
        MOD: 'MOD',
        DEL: 'DEL'
      });
    });

    // Format professors data
    professors.forEach((professor) => {
      data.push({
        USER_ID: professor.prof_id,
        NOMBRE: `${professor.nombres} ${professor.apellidos}`,
        CORREO: professor.correo,
        FECHA: professor.fecha_reg.toISOString(),
        MOD: 'MOD',
        DEL: 'DEL'
      });
    });

    // Format admins data
    admins.forEach((admin) => {
      data.push({
        USER_ID: admin.adm_id,
        NOMBRE: `${admin.nombres} ${admin.apellidos}`,
        CORREO: admin.correo,
        FECHA: admin.fecha_reg.toISOString(),
        MOD: 'MOD',
        DEL: 'DEL'
      });
    });

    return data;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}