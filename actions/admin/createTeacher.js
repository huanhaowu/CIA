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
    return 2000000;
  }
}

export async function addTeacher(data) {

  const nextTeacherId = await getNextteacherId();

  const prof_id = nextTeacherId;
  const nombres = data.get("NOMBRES");
  const apellidos = data.get("APELLIDOS");
  const fecha_nac = data.get("NAC.");
  const correo = data.get("CORREO");
  const contrasena = data.get("CONTRASENA");
  const conf_contrasena = data.get("CONF. CONTRASENA");
  const deshabilitado = false;

  if (contrasena != conf_contrasena) {
    throw new Error('Las claves no son iguales')
    return
  }

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