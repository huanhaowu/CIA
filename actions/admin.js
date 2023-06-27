'use server'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getNextUserId = async () => {
  const maxUserId = await prisma.estudiante.findFirst({
    select: {
      est_id: true
    },
    orderBy: {
      est_id: 'desc'
    }
  });

  if (maxUserId) {
    return maxUserId.est_id + 1;
  } else {
    return 1000000;
  }
};

export async function addStudent(data) {

  nextStudent = await getNextUserId()

  const est_id = nextStudent
  const nombres = data.get("nombres")
  const apellidos = data.get("apellidos")
  const fecha_nac = data.get("fecha_nac")
  const correo = data.get("correo")
  const contrasena = data.get("contrasena")
  const carrera_id = data.get("carrera_id")
  const deshabilitado = false
  const indice = 4
  const programa_id = data.get("programa_id")
  const creditos_aprobados = 0


  const newStudent = await prisma.estudiante.create({
    data: {
      est_id: est_id,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: fecha_nac,
      correo: correo,
      contrasena: contrasena,
      carrera_id: carrera_id,
      deshabilitado: deshabilitado,
      indice: indice,
      programa_id: programa_id,
      creditos_aprobados: creditos_aprobados
    },
  });
  return newStudent
}

export async function addProfesor(data) {
  const nextProfId = await getNextUserId();

  const nombres = data.get("nombres");
  const apellidos = data.get("apellidos");
  const fecha_nac = data.get("fecha_nac");
  const correo = data.get("correo");
  const contrasena = data.get("contrasena");
  const deshabilitado = false;

  const newProfesor = await prisma.profesor.create({
    data: {
      prof_id: nextProfId,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: fecha_nac,
      fecha_reg: new Date(),
      deshabilitado: deshabilitado,
      correo: correo,
      contrasena: contrasena,
    },
  });

  return newProfesor;
}

export async function addAdmin(data) {
  const nextAdminId = await getNextUserId();

  const nombres = data.get("nombres");
  const apellidos = data.get("apellidos");
  const fecha_nac = data.get("fecha_nac");
  const correo = data.get("correo");
  const contrasena = data.get("contrasena");
  const deshabilitado = false;

  const newAdmin = await prisma.admin.create({
    data: {
      adm_id: nextAdminId,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: fecha_nac,
      fecha_reg: new Date(),
      deshabilitado: deshabilitado,
      correo: correo,
      contrasena: contrasena,
    },
  });

  return newAdmin;
}
