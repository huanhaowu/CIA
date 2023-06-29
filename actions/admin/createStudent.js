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

  const nextStudent = await getNextUserId()

  const est_id = nextStudent
  const nombres = data.get("NOMBRES")
  const apellidos = data.get("APELLIDOS")
  const fecha_nac = data.get("NAC.")
  const correo = data.get("CORREO")
  const contrasena = data.get("CONTRASENA")
  const conf_contrasena = data.get("CONF. CONTRASENA");
  const carrera_id = data.get("CARRERA ID")
  const deshabilitado = false
  const indice = 4
  const programa_id = data.get("PROGRAMA ID")
  const creditos_aprobados = 0


  if (contrasena != conf_contrasena) {
    throw new Error('Las claves no son iguales')
    return
  }


  const newStudent = await prisma.estudiante.create({
    data: {
      est_id: est_id,
      nombres: nombres,
      apellidos: apellidos,
      fecha_nac: new Date(fecha_nac),
      correo: correo,
      contrasena: contrasena,
      carrera_id: parseInt(carrera_id),
      deshabilitado: deshabilitado,
      indice: indice,
      programa_id: parseInt(programa_id),
      creditos_aprobados: creditos_aprobados
    },
  });
  return newStudent
}





