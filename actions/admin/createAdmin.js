'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getNextAdminId = async () => {
  const maxUserId = await prisma.admin.findFirst({
    select: {
      adm_id: true
    },
    orderBy: {
      adm_id: 'desc'
    }
  });

  if (maxUserId) {
    return maxUserId.adm_id + 1;
  } else {
    return 2000000;
  }
}

export async function addAdmin(data) {

  const nextAdminId = await getNextAdminId();

  const adm_id = nextAdminId;
  const nombres = data.get("nombres");
  const apellidos = data.get("apellidos");
  const fecha_nac = data.get("fecha_nac");
  const correo = data.get("correo");
  const contrasena = data.get("contrasena");
  const deshabilitado = false;

  const newAdmin = await prisma.admin.create({
    data: {
      adm_id: adm_id,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: new Date(fecha_nac),
      correo: correo,
      contrasena: contrasena,
      deshabilitado: deshabilitado,
    },
  });

  return newAdmin;
}