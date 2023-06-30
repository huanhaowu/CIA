'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getNextteacherId = async () => {
  const maxUserId = await prisma.profesor.findFirst({
    select: {
      prof_id: true
    },
    orderBy: {
      prof_id: 'desc'
    }
  });

  if (maxUserId) {
    return maxUserId.prof_id + 1;
  } else {
    return 3000000;
  }
}

export async function addTeacher(data) {

  const nextTeacherId = await getNextteacherId();

  const prof_id = nextTeacherId;
  const nombres = data.get("nombres");
  const apellidos = data.get("apellidos");
  const fecha_nac = data.get("fecha_nac");
  const correo = data.get("correo");
  const contrasena = data.get("contrasena");
  const deshabilitado = false;

  const newProfesor = await prisma.profesor.create({
    data: {
      prof_id: prof_id,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: new Date(fecha_nac),
      correo: correo,
      contrasena: contrasena,
      deshabilitado: deshabilitado,
    },
  });

  return newProfesor;
}