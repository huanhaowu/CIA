'use server'
const prisma = require('@/api/api.js')

const getNextSeccionId = async () => {
  const maxSeccionId = await prisma.seccion.findFirst({
    select: {
      seccion_id: true
    },
    orderBy: {
      seccion_id: 'desc'
    }
  });

  if (maxSeccionId) {
    return maxSeccionId.seccion_id + 1;
  } else {
    return 1;
  }
}

export async function addSeccion(data) {
  const nextSeccionId = await getNextSeccionId();
  const seccion_id = nextSeccionId;
  const asignatura_clave = data.get("CLAVE ASIG.");
  const numero = Number(data.get("NUMERO"));
  const trimestre_id = Number(data.get("TRIMESTRE ID"));
  const prof_id = Number(data.get("DOCENTE ID"));
  const modalidad_id = Number(data.get("MODALIDAD ID"));
  const aula_clave = data.get("AULA");
  const deshabilitado = false;

  // Validar si la clave de la asignatura ya existe
  const existingAsignatura = await prisma.asignatura.findUnique({
    where: { asignatura_clave: asignatura_clave }
  });
  if (!existingAsignatura) {
    return { status: 'error', message: 'La clave de la asignatura no existe' };
  }

  // Validar si el profesor existe
  const existingProfesor = await prisma.profesor.findUnique({
    where: { prof_id: prof_id }
  });
  if (!existingProfesor) {
    return { status: 'error', message: 'El ID del profesor no existe' };
  }

  // Validar si el trimestre existe
  const existingTrimestre = await prisma.trimestre.findUnique({
    where: { trimestre_id: trimestre_id }
  });
  if (!existingTrimestre) {
    return { status: 'error', message: 'El ID del trimestre no existe' };
  }

  // Validar si la modalidad existe
  const existingModalidad = await prisma.modalidad.findUnique({
    where: { modalidad_id: modalidad_id }
  });
  if (!existingModalidad) {
    return { status: 'error', message: 'El ID de la modalidad no existe' };
  }

  // Validar si los horarios existen
  const horarios = [];
  for (let i = 1; i <= 3; i++) {
    const horario_id = Number(data.get(`HORARIO DIA ${i}`));
    if (horario_id) {
      const existingHorario = await prisma.horario.findUnique({
        where: { horario_id: horario_id }
      });
      if (!existingHorario) {
        return { status: 'error', message: `El ID del horario ${i} no existe` };
      }
      horarios.push(horario_id);
    }
  }

  // Crear la sección
  const newSeccion = await prisma.seccion.create({
    data: {
      seccion_id: seccion_id,
      asignatura_clave: asignatura_clave,
      numero: numero,
      trimestre_id: trimestre_id,
      prof_id: prof_id,
      modalidad_id: modalidad_id,
      aula_clave: aula_clave,
      deshabilitado: deshabilitado,
    },
  });

  // Crear los horarios de la sección
  for (const horario_id of horarios) {
    const newHorarioSeccion = await prisma.horario_seccion.create({
      data: {
        seccion_id: seccion_id,
        horario_id: horario_id,
      },
    });
  }

  return { status: 'success', message: 'Sección creada exitosamente', data: newSeccion };
}
