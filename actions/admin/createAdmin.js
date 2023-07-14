'use server'
const prisma = require('@/api/api.js')

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
    return 3000000;
  }
}

export async function addAdmin(data) {
  console.log(data)
  const nextAdminId = await getNextAdminId();

  const adm_id = nextAdminId;
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
  return { status: 'success', message: 'Administrador creado exitosamente', data: newAdmin };
}
