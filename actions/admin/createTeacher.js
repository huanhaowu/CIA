'use server'
const prisma = require('@/api/api.js')

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

  if (contrasena !== conf_contrasena) {
    return { status: 'error', message: 'Las claves no son iguales' };
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

  return { status: 'success', message: 'Profesor creado exitosamente', data: newProfesor };
}
